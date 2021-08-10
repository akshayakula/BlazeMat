import React, { useEffect, useState, useMemo } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect, useHistory } from "react-router-dom";

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";

import "assets/scss/material-dashboard-pro-react.scss?v=1.10.0";
import { UserContext }  from "./UserContext"
import { dataTable } from "./variables/general"
import Terms from "./views/Terms"
import Landing from "./Landing"
import { AuthContext } from "AuthContext";
import axios from 'axios'
const api_url = process.env.REACT_APP_API_URL;


export const App = () => {

    let history = useHistory();

    const baseInfo = {
        "username": "",
        "ranking": "Ember",
        "createdAt": "2021-08-03T15:46:38.598Z",
        "zip_code": "",
        "lifetime_earnings": "0",
        "userId": "oZZEoqFdg1fxGKJACMHw3fj7HgB2",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/blazesell-84604.appspot.com/o/Logo.png?alt=media&token=5c8d0fca-868e-4c71-a99f-894b89054bae",
        "tutorial": true,
        "active_listings": "0",
        "balance": "0",
        "email": "",
        "firstName": "",
        "lastName": "",
        "street": "",
        "city": ""
    }
    const [token, setToken] = useState("")
    const [info, setInfo] = useState(baseInfo)
    const [AppTrigger, setAppTrigger] = useState(false)
    const [listings, setListings] = useState({
        headerRow: ["Name", "Price Target", "Status", "Time Estimate", "Actions"],
        footerRow: ["Name", "Price Target", "Status", "Time Estimate", "Actions"],
        dataRows: [
                ]
    })

    const fetchUserInfo = async () => {
        console.log("FETCHING INFO")

  
        const headers = {
            headers: {
              'Authorization': localStorage.getItem('BSIdToken')
            }
        }

        let r;
        try{
            r = await axios.get(`${api_url}/userInfo`,headers)
            
            
        }
        catch(err){
            console.log('Session Expired Info Fetch failed')
            //localStorage.removeItem('BSIdToken')
            return;
        }
        console.log('Fetching User Info')
        //console.log(r.data)
        setInfo(r.data)
        setAppTrigger(true)
    }

    const fetchUserListings = async () => {
        console.log("FETCHING Listings")

  
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
            console.log('Session Expired Info Fetch failed')
            //localStorage.removeItem('BSIdToken')
            // history.replace('/auth/login', "Session Expired")
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
            // console.log(tempListing)
            arrListings.push(tempListing)
        })

        const newListings = listings
        newListings.dataRows = arrListings
        setListings(newListings)
        setAppTrigger(true)
    }

    useEffect( ()=>{
        console.log("TOKEN CHANGED! - Lets Fetch some Data")
        fetchUserInfo()
        fetchUserListings()
        //console.log(listings)

    }, [token])

    return(
        <BrowserRouter>
            <Switch>
                {/* <AuthContext.Provider value={{token, setToken}}> */}
                    <UserContext.Provider value={{info, setInfo,listings, setListings, token, setToken}}>
                        <Route path="/auth" component={AuthLayout} />
                        <Route path="/admin" component={AdminLayout} />
                        <Route path='/terms' exact component={Terms} />
                        <Route path='/' exact component = {Landing} />
                        {/* <Redirect from="*" to='/auth/login' /> */}
                    </UserContext.Provider>
                {/* </AuthContext.Provider> */}
            </Switch>
        </BrowserRouter>
    )
}