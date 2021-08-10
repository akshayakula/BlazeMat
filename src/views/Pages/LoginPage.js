import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import SweetAlert from "react-bootstrap-sweetalert";
// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
// import LockOutline from "@material-ui/icons/LockOutline";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";

import alertStyles from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.js";
import styles from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.js";
import { UserContext } from "../../UserContext"
import axios from "axios";

const api_url = process.env.REACT_APP_API_URL;
const useStyles = makeStyles(styles);
const useAlertStyles = makeStyles(alertStyles)

export default function LoginPage() {
  
  const {token , setToken} = useContext(UserContext)

  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState(null);

  const history = useHistory();

  React.useEffect(() => {
    let id = setTimeout(function () {
      setCardAnimation("");
    }, 300);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.clearTimeout(id);
    };
  });

  const classes = useStyles();
  const alertClasses = useAlertStyles();

  const handleLogin = async (event) => {
    
    event.preventDefault();
    console.log('Login Pressed')

    const userData = {
      email: email,
      password: password
    }

    let res;
    try{
      res = await axios.post(`${api_url}/login`, userData)
      // setToken(`Bearer ${res.data.token}`);
    }
    catch( err ) {
      console.log("Error")
      setErrors(err.response.data)
      return 
    }
    localStorage.setItem('BSIdToken', `Bearer ${res.data.token}`)
    setToken(`Bearer ${res.data.token}`)
    history.push('/admin/dashboard');
    // fetchUserData();

  }

  const hideAlert = () => {
    setAlert(null);
  };
  const inputAlert = () => {
    setAlert(
      <SweetAlert
        input
        showCancel
        style={{ display: "block", marginTop: "-100px" }}
        title="Enter Email"
        onConfirm={(e) => {
          handleForgotPassword(e);
        }}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={classes.button + " " + classes.info}
        cancelBtnCssClass={classes.button + " " + classes.danger}
      />
    );
  };
  const successAlert = (e) => {
    setAlert(
      <SweetAlert
        success
        style={{ display: "block", marginTop: "-100px"}}
        title="Email Sent!"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={alertClasses.button + " " + alertClasses.success}
      >
        {e}
      </SweetAlert>
    );
  };

  const failAlert = (e) => {
    setAlert(
      <SweetAlert
        danger
        style={{ display: "block", marginTop: "-100px" }}
        title="Email not Found"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={classes.button + " " + classes.success}
      >
        {e}
      </SweetAlert>
    );
  };

  const handleForgotPassword = async (e) => {

    const lostEmail = {
      email: e
    }

    try{
      const r = await axios.post(`${api_url}/resetpassword`, lostEmail )
      console.log("Success Email Sent")
      // setErrors(r.data)
      successAlert(e)
    }
    catch (err) {
      console.log(err)
      failAlert(e)
    }

  
  }

  return (
    <div className={classes.container}>
      <div className={classes.sweetAlert}> {alert} </div>
      <GridContainer justifyContent="center">
        <GridItem xs={12} sm={6} md={4}>
          <form>
            <Card login className={classes[cardAnimaton]}>
              <CardHeader
                className={`${classes.cardHeader} ${classes.textCenter}`}
                color="rose"
              >
                <h4 className={classes.cardTitle}>Log in</h4>
                {/* <div className={classes.socialLine}>
                  {[
                    // "fab fa-facebook-square",
                    // "fab fa-twitter",
                    "fab fa-google",
                  ].map((prop, key) => {
                    return (
                      <Button
                        color="transparent"
                        justIcon
                        key={key}
                        className={classes.customButtonClass}
                      >
                        <i className={prop} />
                      </Button>
                    );
                  })}
                </div> */}
              </CardHeader>
              <CardBody>
                <CustomInput
                  labelText="Email..."
                  id="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Email className={classes.inputAdornmentIcon} />
                      </InputAdornment>
                    ),
                  }}
                  value={email}
                  onChange={ (event) => {setEmail(event.target.value)}}
                />
                { errors.email === 'Success! Email Sent' ?
                    <small className={classes.smallSuccess} >{errors.email}</small>
                      : 
                    <small className={classes.smallError} >{errors.email}</small>
                  }
                <CustomInput
                  labelText="Password"
                  id="password"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Icon className={classes.inputAdornmentIcon}>
                          lock_outline
                        </Icon>
                      </InputAdornment>
                    ),
                    type: "password",
                    autoComplete: "off",
                  }}
                  value={password}
                  onChange={ (event) => {setPassword(event.target.value) }}
                />
                { 
                  errors.password ? <small className={classes.smallError} > {errors.password} </small> : null  
                }
              </CardBody>
              <CardFooter className={classes.justifyCenter}>

                <Button color="rose" size="lg" block onClick={
                    (event) => {handleLogin(event)}
                  }>
                  Let{"'"}s Go
                </Button>

              </CardFooter>
              <CardFooter>
                <Button color="rose" simple size="sm" onClick={(event)=>{inputAlert()}} > Forgot Password </Button>
                <Button color="rose" simple size="sm" onClick={()=> history.push("/auth/register-page")}> Create Account </Button>
              </CardFooter>
            </Card>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
