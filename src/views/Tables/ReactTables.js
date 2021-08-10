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
import axios from "axios"
import { dataTable } from "variables/general.js";
import { UserContext } from "../../UserContext"
import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";

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
        history.push('/auth/login')
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
          price_target: prop[1],
          status: prop[2],
          time_estimate: prop[3],
          actions: (
            // we've added some custom button actions
            <div className="actions-right">
              <Button
                justIcon
                round
                simple
                onClick={() => {
                  let obj = data.find((o) => o.id === key);
                  alert(
                    "You've clicked EDIT button on \n{ \nName: " +
                      obj.name +
                      ", \nPrice Target: " +
                      obj.price_target +
                      ", \nStatus: " +
                      obj.status +
                      ", \nTime Estimate: " +
                      obj.time_estimate +
                      "\n}."
                  );
                }}
                color="warning"
                className="edit"
              >
                <Edit />
              </Button>{" "}
              {/* use this button to remove the data row */}
              <Button
                justIcon
                round
                simple
                onClick={() => {
                  var newData = data;
                  newData.find((o, i) => {
                    if (o.id === key) {
                      // here you should add some custom code so you can delete the data
                      // from this component and from your server as well
                      newData.splice(i, 1);
                      return true;
                    }
                    return false;
                  });
                  setData([...newData]);
                }}
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
          price_target: prop[1],
          status: prop[2],
          time_estimate: prop[3],
          actions: (
            // we've added some custom button actions
            <div className="actions-right">
              <Button
                justIcon
                round
                simple
                onClick={() => {
                  let obj = data.find((o) => o.id === key);
                  alert(
                    "You've clicked EDIT button on \n{ \nName: " +
                      obj.name +
                      ", \nPrice Target: " +
                      obj.price_target +
                      ", \nStatus: " +
                      obj.status +
                      ", \nTime Estimate: " +
                      obj.time_estimate +
                      "\n}."
                  );
                }}
                color="warning"
                className="edit"
              >
                <Edit />
              </Button>{" "}
              {/* use this button to remove the data row */}
              <Button
                justIcon
                round
                simple
                onClick={() => {
                  var newData = data;
                  newData.find((o, i) => {
                    if (o.id === key) {
                      // here you should add some custom code so you can delete the data
                      // from this component and from your server as well
                      newData.splice(i, 1);
                      return true;
                    }
                    return false;
                  });
                  setData([...newData]);
                }}
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
                  Header: "Price Target",
                  accessor: "price_target",
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
  );
}
