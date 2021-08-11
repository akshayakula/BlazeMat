import React, {useContext, useState, useEffect} from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";

// @material-ui/icons
import PermIdentity from "@material-ui/icons/PermIdentity";

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
import SweetAlert from "react-bootstrap-sweetalert";

import alertStyles from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.js";
import styles from "assets/jss/material-dashboard-pro-react/views/userProfileStyles.js";

import avatar from "assets/img/mainclearlogo.png";
import { UserContext } from "../../UserContext"

const useStyles = makeStyles(styles);
const api_url = process.env.REACT_APP_API_URL;
const useAlertStyles = makeStyles(alertStyles)

const getState = (zipcode) => {
  if (zipcode >= 35000 && zipcode <= 36999) {
    return 'AL';
  } else if (zipcode >= 99500 && zipcode <= 99999) {
    return 'AK';
  } else if (zipcode >= 85000 && zipcode <= 86999) {
    return 'AZ';
  } else if (zipcode >= 71600 && zipcode <= 72999) {
    return 'AR';
  } else if (zipcode >= 90000 && zipcode <= 96699) {
    return 'CA';
  } else if (zipcode >= 80000 && zipcode <= 81999) {
    return 'CO';
  } else if ((zipcode >= 6000 && zipcode <= 6389) || (zipcode >= 6391 && zipcode <= 6999)) {
    return 'CT';
  } else if (zipcode >= 19700 && zipcode <= 19999) {
    return 'DE';
  } else if (zipcode >= 32000 && zipcode <= 34999) {
    return 'FL';
  } else if ( (zipcode >= 30000 && zipcode <= 31999) || (zipcode >= 39800 && zipcode <= 39999) ) {
    return 'GA';
  } else if (zipcode >= 96700 && zipcode <= 96999) {
    return 'HI';
  } else if (zipcode >= 83200 && zipcode <= 83999) {
    return 'ID';
  } else if (zipcode >= 60000 && zipcode <= 62999) {
    return 'IL';
  } else if (zipcode >= 46000 && zipcode <= 47999) {
    return 'IN';
  } else if (zipcode >= 50000 && zipcode <= 52999) {
    return 'IA';
  } else if (zipcode >= 66000 && zipcode <= 67999) {
    return 'KS';
  } else if (zipcode >= 40000 && zipcode <= 42999) {
    return 'KY';
  } else if (zipcode >= 70000 && zipcode <= 71599) {
    return 'LA';
  } else if (zipcode >= 3900 && zipcode <= 4999) {
    return 'ME';
  } else if (zipcode >= 20600 && zipcode <= 21999) {
    return 'MD';
  } else if ( (zipcode >= 1000 && zipcode <= 2799) || (zipcode == 5501) || (zipcode == 5544 ) ){
    return 'MA';
  } else if (zipcode >= 48000 && zipcode <= 49999) {
    return 'MI';
  } else if (zipcode >= 55000 && zipcode <= 56899) {
    return 'MN';
  } else if (zipcode >= 38600 && zipcode <= 39999) {
    return 'MS';
  } else if (zipcode >= 63000 && zipcode <= 65999) {
    return 'MO';
  } else if (zipcode >= 59000 && zipcode <= 59999) {
    return 'MT';
  } else if (zipcode >= 27000 && zipcode <= 28999) {
    return 'NC';
  } else if (zipcode >= 58000 && zipcode <= 58999) {
    return 'ND';
  } else if (zipcode >= 68000 && zipcode <= 69999) {
    return 'NE';
  } else if (zipcode >= 88900 && zipcode <= 89999) {
    return 'NV';
  } else if (zipcode >= 3000 && zipcode <= 3899) {
    return 'NH';
  } else if (zipcode >= 7000 && zipcode <= 8999) {
    return 'NJ';
  } else if (zipcode >= 87000 && zipcode <= 88499) {
    return 'NM';
  } else if ( (zipcode >= 10000 && zipcode <= 14999) || (zipcode == 6390) || (zipcode == 501) || (zipcode == 544) ) {
    return 'NY';
  } else if (zipcode >= 43000 && zipcode <= 45999) {
    return 'OH';
  } else if ((zipcode >= 73000 && zipcode <= 73199) || (zipcode >= 73400 && zipcode <= 74999) ) {
    return 'OK';
  } else if (zipcode >= 97000 && zipcode <= 97999) {
    return 'OR';
  } else if (zipcode >= 15000 && zipcode <= 19699) {
    return 'PA';
  } else if (zipcode >= 300 && zipcode <= 999) {
    return 'PR';
  } else if (zipcode >= 2800 && zipcode <= 2999) {
    return 'RI';
  } else if (zipcode >= 29000 && zipcode <= 29999) {
    return 'SC';
  } else if (zipcode >= 57000 && zipcode <= 57999) {
    return 'SD';
  } else if (zipcode >= 37000 && zipcode <= 38599) {
    return 'TN';
  } else if ( (zipcode >= 75000 && zipcode <= 79999) || (zipcode >= 73301 && zipcode <= 73399) ||  (zipcode >= 88500 && zipcode <= 88599) ) {
    return 'TX';
  } else if (zipcode >= 84000 && zipcode <= 84999) {
    return 'UT';
  } else if (zipcode >= 5000 && zipcode <= 5999) {
    return 'VT';
  } else if ( (zipcode >= 20100 && zipcode <= 20199) || (zipcode >= 22000 && zipcode <= 24699) || (zipcode == 20598) ) {
    return 'VA';
  } else if ( (zipcode >= 20000 && zipcode <= 20099) || (zipcode >= 20200 && zipcode <= 20599) || (zipcode >= 56900 && zipcode <= 56999) ) {
    return 'DC';
  } else if (zipcode >= 98000 && zipcode <= 99499) {
    return 'WA';
  } else if (zipcode >= 24700 && zipcode <= 26999) {
    return 'WV';
  } else if (zipcode >= 53000 && zipcode <= 54999) {
    return 'WI';
  } else if (zipcode >= 82000 && zipcode <= 83199) {
    return 'WY';
  } else {
    return 'Error';
  }
}

export default function UserProfile() {

  const {info, setInfo} = useContext(UserContext);
  let history = useHistory();
  const email = info.email
  const [zipcode, setZipcode] = useState(info.zip_code)
  const [firstName, setfirstName] = useState(info.firstName)
  const [lastName, setlastName] = useState(info.lastName)
  const [city, setCity] = useState(info.city)
  const [street, setStreet] = useState(info.street)
  const [alert, setAlert] = useState(null);

  // const baseInfo = 

  const [savedInfo, setSavedInfo] = useState({
    zipcode: zipcode,
    firstName: firstName,
    lastName: lastName,
    city: city,
    street: street,
    alert: alert
  })

  useEffect( () =>{

    setZipcode(info.zip_code)
    setfirstName(info.firstName)
    setlastName(info.lastName)
    setCity(info.city)
    setStreet(info.street)

  }, [info])


  const classes = useStyles();
  const alertClasses = useAlertStyles();

  // const print = () => {
  //   console.log(`${zipcode} ${street} ${city} ${firstName} ${lastName}`)
  // }
  const hideAlert = () => {
    setAlert(null);
  };
  const successAlert = () => {
    setAlert(
      <SweetAlert
        success
        style={{ display: "block", marginTop: "-100px"}}
        title="Profile Updated!"
        onConfirm={() => {hideAlert()}}
        onCancel={() => {hideAlert()}}
        confirmBtnCssClass={alertClasses.button + " " + alertClasses.success}
      >
      </SweetAlert>
    );
  };

  const handleSignOut = async (event) => {
    event.preventDefault()
    localStorage.removeItem('BSIdToken')
    history.push('/auth/login')
    
  }

  const handleSave = async (event) => {
    event.preventDefault()
    let updatedUser = {
      ...info
    }

    updatedUser.zip_code = zipcode;
    updatedUser.firstName = firstName;
    updatedUser.lastName = lastName;
    updatedUser.city = city;
    updatedUser.street = street;

    const headers = {
      headers: {
        'Authorization': localStorage.getItem('BSIdToken')
      }
    }
    // console.log(localStorage.getItem('BSIdToken'))
    // console.log(updatedUser)
    let r;
    try{
      r = await axios.post(`${api_url}/updateUserInfo`, updatedUser, headers)
    }
    catch(err) {
      console.log('Update Error')
      if(err.response.status === 403)
        history.push('/auth/login')
        return;
    }

    console.log("New user looks like" + r.data)
    setInfo(r.data)
    setSavedInfo(({
      zipcode: zipcode,
      firstName: firstName,
      lastName: lastName,
      city: city,
      street: street,
      alert: alert
    }))
    successAlert()
  }



  return (
    <div>

      {/* <p>{JSON.stringify(info)}</p>
      <button onClick={() => setInfo({...info, test: "----------"})}>TEST CHANGE</button> */}
      <div>
      {alert}
      </div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <PermIdentity />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>
                Edit Profile - <small>Complete your profile</small>
              </h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText={email}
                    id="email-address"
                    formControlProps={{
                      disabled: true,
                      fullWidth: true,
                    }}
                    helperText="Disabled"
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
                    onChange={event => {setfirstName(event.target.value)}}
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
                    onChange={(event) => setlastName(event.target.value)}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Street Address"
                    id="street-address"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    value={street}
                    onChange={event => setStreet(event.target.value)}
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
                    onChange={ event => setCity(event.target.value)}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="United States"
                    id="country"
                    formControlProps={{
                      disabled:true,
                      fullWidth: true,
                    }}
                    helperText="(Disabled) Must be U.S"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText={"Postal Code"}
                    id="postal-code"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    value={zipcode}
                    onChange={ event => setZipcode(event.target.value)}
                  />
                </GridItem>
              </GridContainer>
              <Button color="rose" className={classes.updateProfileButton} onClick={event => handleSave(event)}>
                Update Profile
              </Button>
              <Clearfix />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>{email}</h6>
              <h4 className={classes.cardTitle}>{savedInfo.firstName} {savedInfo.lastName} </h4>
              {savedInfo.zipcode ? (savedInfo.street && savedInfo.city ? <p>{savedInfo.street}<br/>{savedInfo.city}, {getState(savedInfo.zipcode)}<br/>{savedInfo.zipcode}</p> : <p className={classes.description}>
                {getState(savedInfo.zipcode)}, {savedInfo.zipcode}
              </p>) : null}

              <Button color="rose" round onClick={event => handleSignOut(event)}> 
                Sign Out
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
