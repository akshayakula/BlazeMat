import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory} from 'react-router-dom'
// react plugin for creating charts
// import ChartistGraph from "react-chartist";
// react plugin for creating vector maps
// import { VectorMap } from "react-jvectormap";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
// import ContentCopy from "@material-ui/icons/ContentCopy";
// import InfoOutline from "@material-ui/icons/InfoOutline";
// import Warning from "@material-ui/icons/Warning";
// import DateRange from "@material-ui/icons/DateRange";
// import LocalOffer from "@material-ui/icons/LocalOffer";
// import Update from "@material-ui/icons/Update";
// import ArrowUpward from "@material-ui/icons/ArrowUpward";
// import AccessTime from "@material-ui/icons/AccessTime";
import Refresh from "@material-ui/icons/Refresh";
import Edit from "@material-ui/icons/Edit";
import Place from "@material-ui/icons/Place";
import ArtTrack from "@material-ui/icons/ArtTrack";
// import Language from "@material-ui/icons/Language";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Table from "components/Table/Table.js";
import Button from "components/CustomButtons/Button.js";
// import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import axios from "axios"

// import {
//   dailySalesChart,
//   emailsSubscriptionChart,
//   completedTasksChart,
// } from "variables/charts";

import styles from "assets/jss/material-dashboard-pro-react/views/dashboardStyle.js";

import priceImage1 from "assets/img/card-2.jpeg";
import priceImage2 from "assets/img/card-3.jpeg";
import priceImage3 from "assets/img/card-1.jpeg";
import { UserContext } from "UserContext";
import { HeadsetMic } from "@material-ui/icons";

// const us_flag = require("assets/img/flags/US.png").default;
// const de_flag = require("assets/img/flags/DE.png").default;
// const au_flag = require("assets/img/flags/AU.png").default;
// const gb_flag = require("assets/img/flags/GB.png").default;
// const ro_flag = require("assets/img/flags/RO.png").default;
// const br_flag = require("assets/img/flags/BR.png").default;

// var mapData = {
//   AU: 760,
//   BR: 550,
//   CA: 120,
//   DE: 1300,
//   FR: 540,
//   GB: 690,
//   GE: 200,
//   IN: 200,
//   RO: 600,
//   RU: 300,
//   US: 2920,
// };

const useStyles = makeStyles(styles);
const api_url = process.env.REACT_APP_API_URL;


export default function Dashboard() {
  
  const {info, listings, setListings} = useContext(UserContext)
  const classes = useStyles();
  let history = useHistory()

  const [item1, setItem1] = useState(listings.dataRows[0])
  const [item2, setItem2] = useState(listings.dataRows[1])
  const [item3, setItem3] = useState(listings.dataRows[2])

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
        tempListing.push(element.info.ImgUrls[0])
        tempListing.push(element.info.ImgUrls[1])
        tempListing.push(element.info.ImgUrls[2])
        tempListing.push(element.info.ImgUrls[3])
        tempListing.push(element.info.ImgUrls[4])
        // console.log(tempListing)
        arrListings.push(tempListing)
    })

    const newListings = listings
    newListings.dataRows = arrListings
    setListings(newListings)
  }
  
  useEffect( () => {
    
    setItem1(listings.dataRows[0])
    setItem2(listings.dataRows[1])
    setItem3(listings.dataRows[2])
    fetchUserListings()
  })

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={6} lg={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>leaderboard</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Active Listings</p>
              <h3 className={classes.cardTitle}>{info.active_listings}</h3>
            </CardHeader>
            <CardFooter stats></CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Icon>account_balance</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Account Balance</p>
              <h3 className={classes.cardTitle}>${info.balance}</h3>
            </CardHeader>
            <CardFooter stats></CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>local_fire_department</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Ranking</p>
              <h3 className={classes.cardTitle}>{info.ranking}</h3>
            </CardHeader>
            <CardFooter stats></CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Icon>account_balance_wallet</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Lifetime Earnings</p>
              <h3 className={classes.cardTitle}>${info.lifetime_earnings}</h3>
            </CardHeader>
            <CardFooter stats></CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <h3>Recent Listings</h3>
      <br />
      <GridContainer>
      {item1 ? null :
        <GridItem xs={12} sm={12} md={12}>
          <Card product className={classes.cardHover}>
            <CardBody>
              <h4 className={classes.cardProductTitle}>
                <Link to="/admin/add">
                  Click here to Add a Listing
                </Link>
              </h4>
            </CardBody>
          </Card>
        </GridItem>
      }

        <GridItem xs={12} sm={12} md={4}>
          {item1 ? <Card product className={classes.cardHover}>
            <CardHeader image className={classes.cardHeaderHover}>
              <a href={item1[5]} onClick={(e) => e.preventDefault()}>
                <img src={item1[5]} alt="..." />
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
                  {item1[0]}
                </a>
              </h4>
              <p className={classes.cardProductDesciprion}>
                {item1[3] ? `Estimated Time to Ship: ${item1[3]}` : null}
              </p>
            </CardBody>
            <CardFooter product>
              <div className={classes.price}>
                <h4>${item1[1]}</h4>
              </div>
              <div className={`${classes.stats} ${classes.productStats}`}>
              {item1[2]}
              </div>
            </CardFooter>
          </Card> : null}
          
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          
          {item2 ? <Card product className={classes.cardHover}>
            <CardHeader image className={classes.cardHeaderHover}>
              <a href={item2[5]} onClick={(e) => e.preventDefault()}>
                <img src={item2[5]} alt="..." />
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
                  {item2[0]}
                </a>
              </h4>
              <p className={classes.cardProductDesciprion}>
              {item2[3] ? `Estimated Time to Hold: ${item2[3]}` : null}
              </p>
            </CardBody>
            <CardFooter product>
              <div className={classes.price}>
                <h4>${item2[1]}</h4>
              </div>
              <div className={`${classes.stats} ${classes.productStats}`}>
               {item2[2]}
              </div>
            </CardFooter>
          </Card> : null}
          
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          {item3 ? <Card product className={classes.cardHover}>
            <CardHeader image className={classes.cardHeaderHover}>
              <a href={item3[5]} onClick={(e) => e.preventDefault()}>
                <img src={item3[5]} alt="..." />
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
                  {item3[0]}
                </a>
              </h4>
              <p className={classes.cardProductDesciprion}>
              {item3[3] ? `Estimated Time to Ship: ${item3[3]}` : null}
              </p>

            </CardBody>
            <CardFooter product>
              <div className={classes.price}>
                <h4>${item3[1]}</h4>
              </div>
              <div className={`${classes.stats} ${classes.productStats}`}>
              {item3[2]}
              </div>
            </CardFooter>
          </Card> : null}
        </GridItem>
      </GridContainer>
    </div>
  );
}
