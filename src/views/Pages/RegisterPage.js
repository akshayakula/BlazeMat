import React, {useState, useContext} from "react";
import {Link, useHistory } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import LocationOn from "@material-ui/icons/LocationOn";
import Email from "@material-ui/icons/Email";
import PostAddIcon from '@material-ui/icons/PostAdd';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
// import LockOutline from "@material-ui/icons/LockOutline";
import Check from "@material-ui/icons/Check";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import CardFooter from "components/Card/CardFooter";
import CardBody from "components/Card/CardBody.js";
import SweetAlert from "react-bootstrap-sweetalert";

import alertStyles from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.js";
import styles from "assets/jss/material-dashboard-pro-react/views/registerPageStyle";
import PostAdd from "@material-ui/icons/PostAdd";
import axios from "axios";
import { UserContext } from "UserContext";

const api_url = process.env.REACT_APP_API_URL;
const useStyles = makeStyles(styles);
const useAlertStyles = makeStyles(alertStyles)

export default function RegisterPage() {

  const {token, setToken} = useContext(UserContext)

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [zip_code, setZipcode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState(null);

  const history = useHistory();
  const [checked, setChecked] = React.useState(false);
  
  const handleCheck = () => {
    setChecked(true);
  };
  const handleUnCheck = () => {
    setChecked(false);
  }

  const classes = useStyles();
  const alertClasses = useAlertStyles();

  const handleRegister = async (event) => {
    event.preventDefault();
    console.log('Register Pressed')

    setLoading(true);

    const userData = {
      username: email,
      email: email,
      zip_code: zip_code,
      password: password,
      confirmPassword: confirmPassword
    }

      let r
      try{
        r = await axios.post(`${api_url}/signup`, userData)
      }
      catch(err) {
        console.log("SIGNUP ERROR");
        console.log(err.response.data)
        console.log(err);
        failAlert()
        setErrors(err.response.data);
        
        return 
      }
      console.log(r.data);
      localStorage.setItem('BSIdToken', `Bearer ${r.data.token}`)
      setToken(`Bearer ${r.data.token}`)
      successAlert()

  }
  const hideAlert = () => {
    setAlert(null);
  };
  const successAlert = (e) => {
    setAlert(
      <SweetAlert
        success
        style={{ display: "block", marginTop: "-100px"}}
        title="Your Good to Go!"
        onConfirm={() => {hideAlert();history.push('/admin/dashboard')}}
        onCancel={() => {hideAlert()}}
        confirmBtnCssClass={alertClasses.button + " " + alertClasses.success}
      >
        {email}
      </SweetAlert>
    );
  };

  const failAlert = () => {
    setAlert(
      <SweetAlert
        danger
        style={{ display: "block", marginTop: "-100px" }}
        title="Fix Form Errors!"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={classes.button + " " + classes.success}
      >
      </SweetAlert>
    );
  };

  return (
    <div className={classes.container}>
      <div className={classes.sweetAlert}>
        {alert}
      </div>
      <GridContainer justifyContent="center">
        <GridItem xs={12} sm={12} md={10}>
          <Card className={classes.cardSignup}>
            <h2 className={classes.cardTitle}>Register</h2>
            <CardBody>
              <GridContainer justifyContent="center">
                <GridItem xs={12} sm={12} md={5}>
                  <InfoArea
                    title="List"
                    description="Tell us what you wanna get off your hands, and take a couple pictures"
                    icon={PostAddIcon}
                    iconColor="rose"
                  />
                  <InfoArea
                    title="Earn"
                     description="When you accept our offer, balance is added to your account instantly"
                    icon={MonetizationOnIcon}
                    iconColor="warning"
                  />
                  <InfoArea
                    title="Send"
                    description="Pack it up and Leave it on your door or drop-off at your local UPS"
                    icon={LocalShippingIcon}
                    iconColor="primary"
                  />
                </GridItem>
                <GridItem xs={12} sm={8} md={5}>
                  {/* <div className={classes.center}>
                    <Button justIcon round color="google">
                      <i class="fab fa-google"></i>
                    </Button>
                    {` `}
                    <Button justIcon round color="facebook">
                      <i className="fab fa-facebook-f" />
                    </Button>
                    {` `}
                    <h4 className={classes.socialTitle}>or be classical</h4>
                  </div> */}
                  <form className={classes.form}>
                    <CustomInput
                      labelText={errors.email}
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses,
                      }}
                      inputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            className={classes.inputAdornment}
                          >
                            <Email className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        ),
                        placeholder: "Email...",
                      }}
                      value={email}
                      onChange={ (event) => {setEmail(event.target.value) }}    
                    />
                    <CustomInput
                      labelText={errors.zip_code}
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses,
                      }}
                      inputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            className={classes.inputAdornment}
                          >
                            <LocationOn className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        ),
                        placeholder: "Zipcode...",
                      }}
                      value={zip_code}
                      onChange={ (event) => {setZipcode(event.target.value) }}
                    />
                    <CustomInput
                    labelText={errors.password}
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses,
                      }}
                      inputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            className={classes.inputAdornment}
                          >
                            <Icon className={classes.inputAdornmentIcon}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        type: "password",
                        placeholder: "Password...",
                      }}

                      value={password}
                      onChange={ (event) => {setPassword(event.target.value) }}
                    />
                    <CustomInput
                    labelText={errors.confirmPassword}
                      formControlProps={{
                        fullWidth: true,
                        className: classes.customFormControlClasses,
                      }}
                      inputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            className={classes.inputAdornment}
                          >
                            <Icon className={classes.inputAdornmentIcon}>
                              check
                            </Icon>
                          </InputAdornment>
                        ),
                        type: "password",
                        placeholder: "Confirm Password...",
                      }}
                      value={confirmPassword}
                      onChange={ (event) => {setConfirmPassword(event.target.value) }}
                    />
                    {checked ? <FormControlLabel
                      classes={{
                        root: classes.checkboxLabelControl,
                        label: classes.checkboxLabel,
                      }}
                      control={
                        <Checkbox
                          tabIndex={-1}
                          onClick={() => handleUnCheck()}
                          checkedIcon={
                            <Check className={classes.checkedIcon} />
                          }
                          icon={<Check className={classes.uncheckedIcon} />}
                          classes={{
                            checked: classes.checked,
                            root: classes.checkRoot,
                          }}
                        />
                      }
                      label={
                        <span>
                          I agree to the{" "}
                          <Link to="/terms">terms and conditions</Link>.
                        </span>
                      }
                    /> : <FormControlLabel
                      classes={{
                        root: classes.checkboxLabelControl,
                        label: classes.checkboxLabel,
                      }}
                      control={
                        <Checkbox
                          tabIndex={-1}
                          onClick={() => handleCheck()}
                          checkedIcon={
                            <Check className={classes.checkedIcon} />
                          }
                          icon={<Check className={classes.uncheckedIcon} />}
                          classes={{
                            checked: classes.checked,
                            root: classes.checkRoot,
                          }}
                        />
                      }
                      label={
                        <span>
                          I agree to the{" "}
                          <Link to="/terms">terms and conditions</Link>.
                        </span>
                      }
                    />}
                    <div className={classes.center}>
                      {checked ? 
                              <Button round color="primary" onClick={(event) => handleRegister(event)} > Get started</Button>
                          :
                              <Button round color="primary" disabled  >Get started</Button> }
                    </div>
                  </form>
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <br/>
              <Button color="primary" simple size="sm" onClick={()=> history.push("/auth/login-page")}> Already Have an Account?</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
