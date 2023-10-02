import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import moment from "moment";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function DashboardTab() {
  // const get the data from the database
  const contacts = useSelector((state) => state.contacts);

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "background.paper", width: "100%", marginTop: "10px" }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label={`Inbox (${contacts.length})`} {...a11yProps(0)} />
          <Tab label="Subcriber(12)" {...a11yProps(1)} />
          <Tab label="users" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div className="">
            {contacts.map((contact) => (
              <div
                className="w-full bg-green-400 my-2 rounded"
                key={contact._id}
              >
                <span className="p-2 font-bold text-red-900">
                  Time:{moment(contact.createdAt).fromNow()}
                </span>
                <div className="flex  rounded px-2 justify-between ">
                  <p className="py-4 my-2 font-bold text-red-500">
                    Name: {contact.name}
                  </p>
                  <p className="py-4 my-2">Email: {contact.email}</p>
                </div>
                <div className="flex  rounded px-2 my-2 justify-between ">
                  <p className="py-4 my-2">Phone: {contact.phone}</p>
                  <p className="py-4 my-2">Subject: {contact.subject}</p>
                </div>

                <p className="  rounded px-2 font-bold text-blue-800">
                  Message:
                </p>
                <p className="px-2 py-2 bg-green-500">{contact.message}</p>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
