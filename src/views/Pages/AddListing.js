import React, { useState, useContext } from "react";
import { useHistory } from 'react-router-dom'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";

// @material-ui/icons
import PermIdentity from "@material-ui/icons/PermIdentity";
import Tooltip from "@material-ui/core/Tooltip";
import Refresh from "@material-ui/icons/Refresh";
import Edit from "@material-ui/icons/Edit";
import Place from "@material-ui/icons/Place";
import ArtTrack from "@material-ui/icons/ArtTrack";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardFooter from "components/Card/CardFooter.js";
import priceImage1 from "assets/img/card-2.jpeg";
import { UserContext } from "UserContext";
import styles from "assets/jss/material-dashboard-pro-react/views/userProfileStyles.js";
import Dropzone from "components/CustomUpload/listingForm"
import avatar from "assets/img/faces/marc.jpg";
import axios from "axios"
import SweetAlert from "react-bootstrap-sweetalert";

import alertStyles from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.js";


const useStyles = makeStyles(styles);
const api_url = process.env.REACT_APP_API_URL;
const useAlertStyles = makeStyles(alertStyles)


export default function AddListing() {
  
  const {info, setInfo} = useContext(UserContext);
  let history = useHistory()
  const classes = useStyles();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("")
  const [time, setTime] = useState("")

  const [zipcode, setZipcode] = useState(info.zip_code)
  const [firstName, setfirstName] = useState(info.firstName)
  const [lastName, setlastName] = useState(info.lastName)
  const [city, setCity] = useState(info.city)
  const [street, setStreet] = useState(info.street)

  const [images, setImages] = useState([])

  const [alert, setAlert] = useState(null);

  const alertClasses = useAlertStyles();

  const hideAlert = () => {
    setAlert(null);
  };
  const successAlert = () => {
    setAlert(
      <SweetAlert
        success
        style={{ display: "block", marginTop: "-100px"}}
        title="Listing Added!"
        onConfirm={() => {hideAlert()}}
        onCancel={() => {hideAlert()}}
        confirmBtnCssClass={alertClasses.button + " " + alertClasses.success}
      >
      </SweetAlert>
    );
  };


  const handleSubmit = async (event) => {

    event.preventDefault()
    let bodyFormData = new FormData();
    console.log('Submit Pressed')
    bodyFormData.append('name', name)
    bodyFormData.append('time_limit', time)
    bodyFormData.append('first_name', firstName)
    bodyFormData.append('last_name', lastName)
    bodyFormData.append('street', street)
    bodyFormData.append('city', city)
    bodyFormData.append('zip_code', zipcode)
    bodyFormData.append("description", description)

    images.forEach( (i) => {
      bodyFormData.append('image', i); 
    })

    const headers = {
      headers: {
        'Authorization': localStorage.getItem('BSIdToken')
      }
    }
    
    try{
 
      const res = await axios.post(`${api_url}/addFullListing`, bodyFormData, headers)

    }
    catch(err){
      console.log(err)
      if(err.response.status = 403){
        history.push('/auth/login')
      }
      return
    }
    successAlert();
  }

  return (
    <div>
      <div className={classes.sweetAlert}> {alert} </div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <PermIdentity />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>
                Add Listing<small>/ Edit Listing</small>
              </h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Item Name"
                    id="name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Time Limit on Holding Item (Optional)"
                    id="time"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    value={time}
                    onChange={e => setTime(e.target.value)}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="First Name"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    value={firstName}
                    onChange={e => setfirstName(e.target.value)}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Last Name"
                    id="last-name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    value={lastName}
                    onChange={e => setlastName(e.target.value)}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Street Address"
                    id="streed"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    value={street}
                    onChange={e => setStreet(e.target.value)}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="City"
                    id="city"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    value={city}
                    onChange={e => setCity(e.target.value)}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Country (Disabled)"
                    id="country"
                    formControlProps={{
                      disabled: true,
                      fullWidth: true,
                    }}
                    value="U.S"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Postal Code"
                    id="postal-code"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    value={zipcode}
                    onChange={e => setZipcode(e.target.value)}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>Description (Optional)</InputLabel>
                  <CustomInput
                    labelText="Quick details about the item..."
                    id="description"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 3,
                    }}
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />
                </GridItem>
              </GridContainer>
              <Dropzone images={images} setImages={setImages}/>
              <Button color="rose" className={classes.updateProfileButton} onClick={e => handleSubmit(e)}>
                Submit Listing
              </Button>
              <Clearfix />
            </CardBody>
          </Card>
        </GridItem>
        {/* <GridItem xs={12} sm={12} md={4}>
        <Card product className={classes.cardHover}>
          <CardHeader image className={classes.cardHeaderHover}>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={priceImage1} alt="..." />
              </a>
            </CardHeader>
            <CardBody>
              <div className={classes.cardHoverUnder}>
                <Tooltip
                  id="tooltip-top"
                  title="View"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="transparent" simple justIcon>
                    <ArtTrack className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Edit"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="success" simple justIcon>
                    <Refresh className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Remove"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="danger" simple justIcon>
                    <Edit className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
              </div>
              <h4 className={classes.cardProductTitle}>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>

                </a>
              </h4>
            </CardBody>
            <CardFooter product>
              <div className={classes.price}>
                <h4>$899/night</h4>
              </div>
              <div className={`${classes.stats} ${classes.productStats}`}>
                <Place /> Barcelona, Spain
              </div>
            </CardFooter>
          </Card>
        </GridItem> */}
      </GridContainer>
    </div>
  );
}
