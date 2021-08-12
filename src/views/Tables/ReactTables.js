import React, {useContext, useState, useEffect} from "react";
import { useHistory } from "react-router-dom"
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Assignment from "@material-ui/icons/Assignment";
import Edit from "@material-ui/icons/Edit";
// import Favorite from "@material-ui/icons/Favorite";
import Close from "@material-ui/icons/Close";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardIcon from "components/Card/CardIcon.js";
import CardHeader from "components/Card/CardHeader.js";
import ReactTable from "components/ReactTable/ReactTable.js";
import SweetAlert from "react-bootstrap-sweetalert";
import axios from "axios"
import { dataTable } from "variables/general.js";
import { UserContext } from "../../UserContext"
import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";
import alertStyles from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.js";

const useAlertStyles = makeStyles(alertStyles)

const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px",
  },
};
const api_url = process.env.REACT_APP_API_URL;
//create your forceUpdate hook


const useStyles = makeStyles(styles);

export default function ReactTables() {

  const [value, setValue] = useState(0); 
  const {listings, setListings, token} = useContext(UserContext);
  const [data, setData] = React.useState(null)
  let history = useHistory()


  const [alert, setAlert] = useState(null);
  const alertClasses = useAlertStyles();

  const hideAlert = () => {
    setAlert(null);
  };

  const alertAcceptCancelReject = (price, time, docId) => {
    console.log(price)
    setAlert(
      <SweetAlert
        warning
        style={{ display: "block", marginTop: "-100px" }}
        title={`We Will Pay You $${price}!`}

        customButtons={
          <div>
            <Button onClick={ () => hideAlert()}>Cancel</Button>
            <Button color="danger" onClick={ () => RejectOfferAlert(docId)} >Reject</Button>
            <Button color="success" onClick={ () => AcceptOffer(docId)} >Accept</Button>
          </div>
        }
        showCancel
      >
        You will need to send the item between now and {time}
      </SweetAlert>
    );
  };
  const AcceptOffer = async (docId) => {

    const headers = {
      headers: {
        'Authorization': localStorage.getItem('BSIdToken')
      }
    }

    const payload = {
      "docId": docId
    }

    let r;
    try{
      r = await axios.post(`${api_url}/acceptListing`, payload, headers)
    }
    catch (err) {
      console.log(err)
    }
    fetchUserListings()

    setAlert(
      <SweetAlert
        success
        style={{ display: "block", marginTop: "-100px" }}
        title="Congratulations!"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={classes.button + " " + classes.success}
      >
        The Amount will be added to your balance!
      </SweetAlert>
    );
  };
  const RejectOfferAlert = async(docId) => {
    const headers = {
      headers: {
        'Authorization': localStorage.getItem('BSIdToken')
      }
    }

    const payload = {
      "docId": docId
    }

    let r;
    try{
      r = await axios.post(`${api_url}/rejectListing`, payload, headers)
    }
    catch (err) {
      console.log(err)
    }
    fetchUserListings()

    setAlert(
      <SweetAlert
        danger
        style={{ display: "block", marginTop: "-100px" }}
        title="Offer Rejected"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={classes.button + " " + classes.success}
      >
        This Item will be marked as Inactive Rejected
      </SweetAlert>
    );
  };
  const successAlert = (e) => {
    setAlert(
      <SweetAlert
        success
        style={{ display: "block", marginTop: "-100px"}}
        title="Item Deleted"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={alertClasses.button + " " + alertClasses.success}
      >
      </SweetAlert>
    );
  };


  const removeListing = async (docId) => {
    const headers = {
      headers: {
        'Authorization': localStorage.getItem('BSIdToken')
      }
    }

    const payload = {
      "docId": docId
    }

    let r;
    try{
      r = await axios.post(`${api_url}/removeListing`,payload , headers)
    }
    catch (err) {
      console.log(err)
      history.push('/auth/login')
    }
    fetchUserListings()
    successAlert()

  }


  const fetchUserListings = async () => {
    console.log("TABLES FETCHING Listings")
    // console.log(token)

    const headers = {
        headers: {
          'Authorization': localStorage.getItem('BSIdToken')
        }
    }

    let r;
    try{
        r = await axios.get(`${api_url}/getListings`, headers)
    }
    catch(err){
        console.log(err)
        console.log('Session Expired Info Fetch failed')
        // localStorage.removeItem('BSIdToken')
        history.push('/auth/login-page')
        return; 
    }

    console.log('Fetching User Listings')
    //console.log(r.data.data)
    let arrListings = [];
    r.data.data.forEach(element => {
        const tempListing = []
        tempListing.push(element.info.name)
        tempListing.push(element.info.price_target)
        tempListing.push(element.info.status)
        tempListing.push(element.info.time_estimate)
        tempListing.push(element.id)
        tempListing.push(element.info.imageUrls)
        // console.log(tempListing)
        arrListings.push(tempListing)
    })

    const newListings = listings
    newListings.dataRows = arrListings
    setListings(newListings)

    setData(
      listings.dataRows.map((prop, key) => {
        return {
          id: key,
          name: prop[0],
          price: `$${prop[1]}`,
          status: prop[2],
          time_estimate: prop[3],
          actions: (
            // we've added some custom button actions
            <div className="actions-right">
              {prop[2] === "Active Offer" ? <Button
                round
                onClick={() => {alertAcceptCancelReject(prop[1],prop[3],prop[4])}}
                color="warning"
                className="edit"
              >
                Check Offer
              </Button> : null}

              {/* use this button to remove the data row */}
              <Button
                justIcon
                round
                simple
                onClick={(event) => {console.log(prop[4]); removeListing(prop[4])} }
                color="danger"
                className="remove"
              >
                <Close />
              </Button>{" "}
            </div>
          ),
        };
      }))
    }

  useEffect( () => {
    console.log(listings.dataRows)
    
    setData(
      listings.dataRows.map((prop, key) => {
        return {
          id: key,
          name: prop[0],
          price: `$${prop[1]}`,
          status: prop[2],
          time_estimate: prop[3],
          actions: (
            // we've added some custom button actions
            <div className="actions-right">
              {prop[2] === "Active Offer" ? <Button
                round
                onClick={() => {alertAcceptCancelReject(prop[1],prop[3],prop[4])}}
                color="warning"
                className="edit"
              >
                Check Offer
              </Button> : null}

              {/* use this button to remove the data row */}
              <Button
                justIcon
                round
                simple
                onClick={(event) => {console.log(prop[4]); removeListing(prop[4])} }
                color="danger"
                className="remove"
              >
                <Close />
              </Button>{" "}
            </div>
          ),
        };
      }))
    fetchUserListings()
    
  }, [])


  

  const classes = useStyles();
  return (
    <div>
      
      <div className={classes.sweetAlert}> {alert} </div>

      <GridContainer>
        <GridItem xs={12}>
          <Card>
            <CardHeader color="primary" icon>
              <CardIcon color="primary">
                <Assignment />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>Items</h4>
            </CardHeader>
            <CardBody>
              {data ? <ReactTable
                columns={[
                  {
                    Header: "Name",
                    accessor: "name",
                  },
                  {
                    Header: "Offer",
                    accessor: "price",
                  },
                  {
                    Header: "Status",
                    accessor: "status",
                  },
                  {
                    Header: "Time Estimate",
                    accessor: "time_estimate",
                  },
                  {
                    Header: "Actions",
                    accessor: "actions",
                  },
                ]}
                data={data}
              /> : null}
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
