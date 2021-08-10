import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

// core components
import CustomInput from "components/CustomInput/CustomInput.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import customSelectStyle from "assets/jss/material-dashboard-pro-react/customSelectStyle.js";

const styles = {
  infoText: {
    fontWeight: "300",
    margin: "10px 0 30px",
    textAlign: "center",
  },
  ...customSelectStyle,
};

const useStyles = makeStyles(styles);

const Step3 = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const [simpleSelect, setsimpleSelect] = React.useState("");
  React.useImperativeHandle(ref, () => ({
    isValidated: () => {
      return isValidated();
    },
    sendState: () => {
      return sendState();
    },
    state: {
      simpleSelect,
    },
  }));
  const sendState = () => {
    return {
      simpleSelect,
    };
  };
  const isValidated = () => {
    return true;
  };
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12}>
        <h4 className={classes.infoText}>Are you living in a nice area?</h4>
      </GridItem>
      <GridItem xs={12} sm={7}>
        <CustomInput
          labelText="Street Name"
          id="streetname"
          formControlProps={{
            fullWidth: true,
          }}
        />
      </GridItem>
      <GridItem xs={12} sm={3}>
        <CustomInput
          labelText="Street No."
          id="streetno"
          formControlProps={{
            fullWidth: true,
          }}
        />
      </GridItem>
      <GridItem xs={12} sm={5}>
        <CustomInput
          labelText="City"
          id="city"
          formControlProps={{
            fullWidth: true,
          }}
        />
      </GridItem>
      <GridItem xs={12} sm={5}>
        <FormControl fullWidth className={classes.selectFormControl}>
          <InputLabel
            htmlFor="simple-select-step-3"
            className={classes.selectLabel}
          >
            Choose City
          </InputLabel>
          <Select
            MenuProps={{
              className: classes.selectMenu,
            }}
            classes={{
              select: classes.select,
            }}
            value={simpleSelect}
            onChange={(value) => {
              setsimpleSelect(value.target.value);
            }}
            inputProps={{
              name: "simpleSelect",
              id: "simple-select-step-3",
            }}
          >
            <MenuItem
              disabled
              classes={{
                root: classes.selectMenuItem,
              }}
            >
              Country
            </MenuItem>
            <MenuItem
              classes={{
                root: classes.selectMenuItem,
                selected: classes.selectMenuItemSelected,
              }}
              value="2"
            >
              France
            </MenuItem>
            <MenuItem
              classes={{
                root: classes.selectMenuItem,
                selected: classes.selectMenuItemSelected,
              }}
              value="3"
            >
              Romania
            </MenuItem>
          </Select>
        </FormControl>
      </GridItem>
    </GridContainer>
  );
});

Step3.displayName = "Step3";

export default Step3;
