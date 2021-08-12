import Buttons from "views/Components/Buttons.js";
import Calendar from "views/Calendar/Calendar.js";
import Charts from "views/Charts/Charts.js";
import Dashboard from "views/Dashboard/Dashboard.js";
import ErrorPage from "views/Pages/ErrorPage.js";
import ExtendedForms from "views/Forms/ExtendedForms.js";
import GridSystem from "views/Components/GridSystem.js";
import Icons from "views/Components/Icons.js";
import LockScreenPage from "views/Pages/LockScreenPage.js";
import LoginPage from "views/Pages/LoginPage.js";
import Notifications from "views/Components/Notifications.js";
import Panels from "views/Components/Panels.js";
import PricingPage from "views/Pages/PricingPage.js";

import ReactTables from "views/Tables/ReactTables.js";
import RegisterPage from "views/Pages/RegisterPage.js";
import RegularForms from "views/Forms/RegularForms.js";
import SweetAlert from "views/Components/SweetAlert.js";
import TimelinePage from "views/Pages/Timeline.js";
import Contact from "views/Pages/Contact.js"
import Typography from "views/Components/Typography.js";
import UserProfile from "views/Pages/UserProfile.js";
import ValidationForms from "views/Forms/ValidationForms.js";
import Widgets from "views/Widgets/Widgets.js";
import Wizard from "views/Forms/Wizard.js";
import AddListing from "views/Pages/AddListing";
// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DateRange from "@material-ui/icons/DateRange";
import GridOn from "@material-ui/icons/GridOn";
import Image from "@material-ui/icons/Image";
import Timeline from "@material-ui/icons/Timeline";
import WidgetsIcon from "@material-ui/icons/Widgets";
import InfoIcon from "@material-ui/icons/Info";
import HelpIcon from "@material-ui/icons/HelpOutline";
import AddIcon from "@material-ui/icons/Add";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

var dashRoutes = [
  {
    path: "/add",
    name: "Add Listing",
    icon: AddIcon,
    component: AddListing,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: DashboardIcon,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: AccountCircleIcon,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/listings",
    name: "All Listings",
    icon: GridOn,
    component: ReactTables,
    layout: "/admin",
  },
  {
    path: "/info",
    name: "How does it Work",
    icon: InfoIcon,
    component: TimelinePage,
    layout: "/admin",
  },
  {
    path: "/contact",
    name: "Contact Us",
    icon: HelpIcon,
    component: Contact,
    layout: "/admin",
  },
  // {
  //   collapse: true,
  //   name: "Pages",
  //   icon: Image,
  //   state: "pageCollapse",
  //   views: [
  //     {
  //       path: "/pricing-page",
  //       name: "Pricing Page",
  //       mini: "PP",
  //       component: PricingPage,
  //       layout: "/auth",
  //     },
  //     {
  //       path: "/timeline-page",
  //       name: "Timeline Page",
  //       mini: "T",
  //       component: TimelinePage,
  //       layout: "/admin",
  //     },
      {
        path: "/login-page",
        name: "Login Page",
        mini: "L",
        component: LoginPage,
        layout: "/auth",
      },
      {
        path: "/register-page",
        name: "Register Page",
        mini: "R",
        component: RegisterPage,
        layout: "/auth",
      },
  //     {
  //       path: "/lock-screen-page",
  //       name: "Lock Screen Page",
  //       mini: "LS",
  //       component: LockScreenPage,
  //       layout: "/auth",
  //     },

  //     {
  //       path: "/error-page",
  //       name: "Error Page",
  //       mini: "E",
  //       component: ErrorPage,
  //       layout: "/auth",
  //     },
  //   ],
  // },
  {
    collapse: true,
    name: "Components",
    icon: Apps,
    state: "componentsCollapse",
    views: [
      {
        collapse: true,
        name: "Multi Level Collapse",
        mini: "MC",
        state: "multiCollapse",
        views: [
          {
            path: "#sample-path",
            name: "Example",
            mini: "E",
            component: () => {},
            layout: "#sample-layout",
          },
        ],
      },
      {
        path: "/buttons",
        name: "Buttons",
        mini: "B",
        component: Buttons,
        layout: "/admin",
      },
      {
        path: "/grid-system",
        name: "Grid System",
        mini: "GS",
        component: GridSystem,
        layout: "/admin",
      },
      {
        path: "/panels",
        name: "Panels",
        mini: "P",
        component: Panels,
        layout: "/admin",
      },
      {
        path: "/sweet-alert",
        name: "Sweet Alert",
        mini: "SA",
        component: SweetAlert,
        layout: "/admin",
      },
      {
        path: "/notifications",
        name: "Notifications",
        mini: "N",
        component: Notifications,
        layout: "/admin",
      },
      {
        path: "/icons",
        name: "Icons",
        mini: "I",
        component: Icons,
        layout: "/admin",
      },
      {
        path: "/typography",
        name: "Typography",
        mini: "T",
        component: Typography,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Forms",
    icon: "content_paste",
    state: "formsCollapse",
    views: [
      {
        path: "/regular-forms",
        name: "Regular Forms",
        mini: "RF",
        component: RegularForms,
        layout: "/admin",
      },
      {
        path: "/extended-forms",
        name: "Extended Forms",
        mini: "EF",
        component: ExtendedForms,
        layout: "/admin",
      },
      {
        path: "/validation-forms",
        name: "Validation Forms",
        mini: "VF",
        component: ValidationForms,
        layout: "/admin",
      },
      {
        path: "/wizard",
        name: "Wizard",
        mini: "W",
        component: Wizard,
        layout: "/admin",
      },
    ],
  },
  {
    path: "/widgets",
    name: "Widgets",
    icon: WidgetsIcon,
    component: Widgets,
    layout: "/admin",
  },
  {
    path: "/charts",
    name: "Charts",
    icon: Timeline,
    component: Charts,
    layout: "/admin",
  },
  {
    path: "/calendar",
    name: "Calendar",
    icon: DateRange,
    component: Calendar,
    layout: "/admin",
  },
];
export default dashRoutes;
