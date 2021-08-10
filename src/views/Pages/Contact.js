import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader";
import CardBody from "components/Card/CardBody";
import { Accordion } from "@material-ui/core";
import { cardTitle } from "assets/jss/material-dashboard-pro-react";
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import NavPills from "components/NavPills/NavPills.js";
import ChatIcon from '@material-ui/icons/Chat';
import CustomInput from "components/CustomInput/CustomInput.js";
import EmailIcon from '@material-ui/icons/Email';
import Button from "components/CustomButtons/Button.js";
import axios from 'axios'


const styles = {
    cardTitle,
    pageSubcategoriesTitle: {
      color: "#3C4858",
      textDecoration: "none",
      textAlign: "center",
    },
    cardCategory: {
      margin: "0",
      color: "#999999",
    },
  };
  
const useStyles = makeStyles(styles);
const api_url = process.env.REACT_APP_API_URL;
export default function Contact(props) {

    const classes = useStyles();

    const [message, setMessage] = useState("");
    const [method, setMethod] = useState("")
 
    const handleSubmit = async (event) => {
        event.preventDefault();

        const headers = {
            headers: {
              'Authorization': localStorage.getItem('BSIdToken')
            }
        }
        const body = {
            message: message,
            method: method
        }
        const res = await axios.post(`${api_url}/supportTicket`, body, headers)
    }

    return (
        <div>
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
            <Card>
                <CardHeader>
                <h4 className={classes.cardTitle}>
                    Navigation Pills Icons <small> - Vertical Tabs</small>
                </h4>
                </CardHeader>
                <CardBody>
                <NavPills
                    color="rose"
                    horizontal={{
                    tabsGrid: { xs: 12, sm: 12, md: 4 },
                    contentGrid: { xs: 12, sm: 12, md: 8 },
                    }}
                    tabs={[
                    {
                        tabButton: "Message",
                        tabIcon: ChatIcon,
                        tabContent: (
                        <span>
                            <h4>
                                Send Our Team an Instant message
                            </h4>
                            <CustomInput
                                labelText="Write Your Message Here. . ."
                                id="message"
                                formControlProps={{
                                fullWidth: true,
                                }}
                                inputProps={{
                                    multiline: true,
                                    rows: 3,
                                }}
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                            />
                            <br />
                            <CustomInput
                                labelText="What Phone Number or Email should we respond to?"
                                id="method"
                                formControlProps={{
                                fullWidth: true,
                                }}
                                inputProps={{
                                    multiline: true,
                                    rows: 1,
                                }}
                                value={method}
                                onChange={e => setMethod(e.target.value)}
                            />
                            <Button color="rose" round className={classes.marginRight} onClick={e => handleSubmit(e)}>
                                Send
                            </Button>
                        </span>
                        ),
                    },
                    {
                        tabButton: "Email",
                        tabIcon: EmailIcon,
                        tabContent: (
                        <span>
                            <h4>
                                Send Us an Email to Support@blazesell.com
                            </h4>
                        </span>
                        ),
                    },
                    ]}
                />
                </CardBody>
            </Card>
            </GridItem>
        </GridContainer>
        </div>
    );
}
