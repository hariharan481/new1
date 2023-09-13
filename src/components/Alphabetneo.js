import { Box, Stack, Tab, Tabs, TextField } from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";
import "../App.css";
import "../styles/Main.css";

import Neoplasm2 from "./Neoplasm2";
import Neoplasm1 from "./Neoplasm1";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export const Alphabetneo= ({ setSelectedCode }) => {
  const [value, setValue] = useState(0);
  const [showTable, setShowTable] = useState(false);
  const [showIndx, setShowIndex] = useState(false);
  const [showDrug, setShowdrug] = useState(false);
  const [activeBtn, setActiveBtn] = useState(null);
  const [search, setSearch] = useState("");
  const [results1, setResults1] = useState([]); // Define result1 state here
  const [selectedCodeDetails, setSelectedCodeDetails] = useState(null);
  const tabLabels = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const handleChange = (event, newValue) => {
    setValue(newValue);
    const clickedTabLabel = tabLabels[newValue];
    console.log("Tab clicked: ", clickedTabLabel);
    global.clickedTab1 = clickedTabLabel;
  };
  console.log(global.clickedTab1);

  const handleNavBtnClick = (btnId) => {
    setActiveBtn(btnId);
    setShowIndex(!showIndx);
    setShowTable(false);
    setShowdrug(false);
  };

  console.log(search);
  global.searches = search;
  const handleCodeDetailsUpdate = (details) => {
    setSelectedCodeDetails(details);
  };
  return (

    
    <div>
 
      <Stack direction={"column"} ml={20} mt={1.5} sx={{ width: "5px" }}>
        <Box
          sx={{
            height: "300px",
            width: "100%",
            gap: "0px",
          }}
        >
          <Box
            sx={{
              height: "30px",
              width: "49.9vw",
              background:
                "linear-gradient(to right, #E9F8FF,#90B2D8 , #C1E3FF)",

              color: "black",
              fontFamily: "sans-serif",
              fontSize: "13px",
ml:"-187px",
mt:"60px"
            
            
            }}
          >
            <Stack direction={"row"} gap={"0px"} ml={5}>
              <Box sx={{ width: "100%" }}>
                <Box sx={{ marginTop: "-10px" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="basic tabs example"
                    className="tabs"
                    sx={{ marginLeft: "-25px" }}
                    TabIndicatorProps={{
                      style: {
                        backgroundColor: "#4185d2",
                        width: "20px",
                        marginLeft: "38px",
                        marginBottom: "10px",
                      },
                    }}
                  >
                    <Tab
                      disableFocusRipple
                      disableRipple
                      disableTouchRipple
                      sx={{
                        cursor: "pointer",
                        variant: "subtitle1",
                        fontWeight: "700px",
                        color: "#4185D2",
                        textTransform: "none",
                        width: "1px",
                        marginLeft: "-20px",
                      }}
                      label="a"
                      {...a11yProps(0)}
                    />
                    <Tab
                      disableFocusRipple
                      disableRipple
                      disableTouchRipple
                      sx={{
                        cursor: "pointer",
                        variant: "subtitle1",
                        fontWeight: "700px",
                        color: "#4185D2",
                        textTransform: "none",
                        width: "1px",
                      }}
                      variant="subtitle1"
                      fontWeight={"700"}
                      label="b"
                      {...a11yProps(1)}
                    />
                    <Tab
                      disableFocusRipple
                      disableRipple
                      disableTouchRipple
                      sx={{
                        cursor: "pointer",
                        variant: "subtitle1",
                        fontWeight: "700px",
                        color: "#4185D2",
                        textTransform: "none",
                        width: "1px",
                      }}
                      variant="subtitle1"
                      fontWeight={"700"}
                      label="c"
                      {...a11yProps(2)}
                    />
                    <Tab
                      disableFocusRipple
                      disableRipple
                      disableTouchRipple
                      sx={{
                        cursor: "pointer",
                        variant: "subtitle1",
                        fontWeight: "700px",
                        color: "#4185D2",
                        textTransform: "none",
                        width: "1px",
                      }}
                      variant="subtitle1"
                      fontWeight={"700"}
                      label="d"
                      {...a11yProps(3)}
                    />
                    <Tab
                      disableFocusRipple
                      disableRipple
                      disableTouchRipple
                      sx={{
                        cursor: "pointer",
                        variant: "subtitle1",
                        fontWeight: "700px",
                        color: "#4185D2",
                        textTransform: "none",
                        width: "1px",
                      }}
                      variant="subtitle1"
                      fontWeight={"700"}
                      label="e"
                      {...a11yProps(4)}
                    />
                    <Tab
                      disableFocusRipple
                      disableRipple
                      disableTouchRipple
                      sx={{
                        cursor: "pointer",
                        variant: "subtitle1",
                        fontWeight: "700px",
                        color: "#4185D2",
                        textTransform: "none",
                        width: "1px",
                      }}
                      variant="subtitle1"
                      fontWeight={"700"}
                      label="f"
                      {...a11yProps(5)}
                    />
                    <Tab
                      disableFocusRipple
                      disableRipple
                      disableTouchRipple
                      sx={{
                        cursor: "pointer",
                        variant: "subtitle1",
                        fontWeight: "700px",
                        color: "#4185D2",
                        textTransform: "none",
                        width: "1px",
                      }}
                      variant="subtitle1"
                      fontWeight={"700"}
                      label="g"
                      {...a11yProps(6)}
                    />
                    <Tab
                      disableFocusRipple
                      disableRipple
                      disableTouchRipple
                      sx={{
                        cursor: "pointer",
                        variant: "subtitle1",
                        fontWeight: "700px",
                        color: "#4185D2",
                        textTransform: "none",
                        width: "1px",
                      }}
                      variant="subtitle1"
                      fontWeight={"700"}
                      label="h"
                      {...a11yProps(7)}
                    />
                    <Tab
                      disableFocusRipple
                      disableRipple
                      disableTouchRipple
                      sx={{
                        cursor: "pointer",
                        variant: "subtitle1",
                        fontWeight: "700px",
                        color: "#4185D2",
                        textTransform: "none",
                        width: "1px",
                      }}
                      variant="subtitle1"
                      fontWeight={"700"}
                      label="i"
                      {...a11yProps(8)}
                    />
                    <Tab
                      disableFocusRipple
                      disableRipple
                      disableTouchRipple
                      sx={{
                        cursor: "pointer",
                        variant: "subtitle1",
                        fontWeight: "700px",
                        color: "#4185D2",
                        textTransform: "none",
                        width: "1px",
                      }}
                      variant="subtitle1"
                      fontWeight={"700"}
                      label="j"
                      {...a11yProps(9)}
                    />
                    <Tab
                      disableFocusRipple
                      disableRipple
                      disableTouchRipple
                      sx={{
                        cursor: "pointer",
                        variant: "subtitle1",
                        fontWeight: "700px",
                        color: "#4185D2",
                        textTransform: "none",
                        width: "1px",
                      }}
                      variant="subtitle1"
                      fontWeight={"700"}
                      label="k"
                      {...a11yProps(10)}
                    />
                    <Tab
                      disableFocusRipple
                      disableRipple
                      disableTouchRipple
                      sx={{
                        cursor: "pointer",
                        variant: "subtitle1",
                        fontWeight: "700px",
                        color: "#4185D2",
                        textTransform: "none",
                        width: "1px",
                      }}
                      variant="subtitle1"
                      fontWeight={"700"}
                      label="l"
                      {...a11yProps(11)}
                    />
                    <Tab
                      disableFocusRipple
                      disableRipple
                      disableTouchRipple
                      sx={{
                        cursor: "pointer",
                        variant: "subtitle1",
                        fontWeight: "700px",
                        color: "#4185D2",
                        textTransform: "none",
                        width: "1px",
                      }}
                      variant="subtitle1"
                      fontWeight={"700"}
                      label="m"
                      {...a11yProps(12)}
                    />
                    <Tab
                      disableFocusRipple
                      disableRipple
                      disableTouchRipple
                      sx={{
                        cursor: "pointer",
                        variant: "subtitle1",
                        fontWeight: "700px",
                        color: "#4185D2",
                        textTransform: "none",
                        width: "1px",
                      }}
                      variant="subtitle1"
                      fontWeight={"700"}
                      label="n"
                      {...a11yProps(13)}
                    />
                    <Tab
                      disableFocusRipple
                      disableRipple
                      disableTouchRipple
                      sx={{
                        cursor: "pointer",
                        variant: "subtitle1",
                        fontWeight: "700px",
                        color: "#4185D2",
                        textTransform: "none",
                        width: "1px",
                      }}
                      variant="subtitle1"
                      fontWeight={"700"}
                      label="o"
                      {...a11yProps(14)}
                    />
                    <Tab
                      disableFocusRipple
                      disableRipple
                      disableTouchRipple
                      sx={{
                        cursor: "pointer",
                        variant: "subtitle1",
                        fontWeight: "700px",
                        color: "#4185D2",
                        textTransform: "none",
                        width: "1px",
                      }}
                      variant="subtitle1"
                      fontWeight={"700"}
                      label="p"
                      {...a11yProps(15)}
                    />
                    <Tab
                      disableFocusRipple
                      disableRipple
                      disableTouchRipple
                      sx={{
                        cursor: "pointer",
                        variant: "subtitle1",
                        fontWeight: "700px",
                        color: "#4185D2",
                        textTransform: "none",
                        width: "1px",
                      }}
                      variant="subtitle1"
                      fontWeight={"700"}
                      label="q"
                      {...a11yProps(16)}
                    />
                    <Tab
                      disableFocusRipple
                      disableRipple
                      disableTouchRipple
                      sx={{
                        cursor: "pointer",
                        variant: "subtitle1",
                        fontWeight: "700px",
                        color: "#4185D2",
                        textTransform: "none",
                        width: "1px",
                      }}
                      variant="subtitle1"
                      fontWeight={"700"}
                      label="r"
                      {...a11yProps(17)}
                    />
                    <Tab
                      disableFocusRipple
                      disableRipple
                      disableTouchRipple
                      sx={{
                        cursor: "pointer",
                        variant: "subtitle1",
                        fontWeight: "700px",
                        color: "#4185D2",
                        textTransform: "none",
                        width: "1px",
                      }}
                      variant="subtitle1"
                      fontWeight={"700"}
                      label="s"
                      {...a11yProps(18)}
                    />
                    <Tab
                      disableFocusRipple
                      disableRipple
                      disableTouchRipple
                      sx={{
                        cursor: "pointer",
                        variant: "subtitle1",
                        fontWeight: "700px",
                        color: "#4185D2",
                        textTransform: "none",
                        width: "1px",
                      }}
                      variant="subtitle1"
                      fontWeight={"700"}
                      label="t"
                      {...a11yProps(19)}
                    />
                    <Tab
                      disableFocusRipple
                      disableRipple
                      disableTouchRipple
                      sx={{
                        cursor: "pointer",
                        variant: "subtitle1",
                        fontWeight: "700px",
                        color: "#4185D2",
                        textTransform: "none",
                        width: "1px",
                      }}
                      variant="subtitle1"
                      fontWeight={"700"}
                      label="u"
                      {...a11yProps(20)}
                    />
                    <Tab
                      disableFocusRipple
                      disableRipple
                      disableTouchRipple
                      sx={{
                        cursor: "pointer",
                        variant: "subtitle1",
                        fontWeight: "700px",
                        color: "#4185D2",
                        textTransform: "none",
                        width: "1px",
                      }}
                      variant="subtitle1"
                      fontWeight={"700"}
                      label="v"
                      {...a11yProps(21)}
                    />
                    V
                    <Tab
                      disableFocusRipple
                      disableRipple
                      disableTouchRipple
                      sx={{
                        cursor: "pointer",
                        variant: "subtitle1",
                        fontWeight: "700px",
                        color: "#4185D2",
                        textTransform: "none",
                        width: "1px",
                      }}
                      variant="subtitle1"
                      fontWeight={"700"}
                      label="w"
                      {...a11yProps(22)}
                    />
                    <Tab
                      disableFocusRipple
                      disableRipple
                      disableTouchRipple
                      sx={{
                        cursor: "pointer",
                        variant: "subtitle1",
                        fontWeight: "700px",
                        color: "#4185D2",
                        textTransform: "none",
                        width: "1px",
                      }}
                      variant="subtitle1"
                      fontWeight={"700"}
                      label="x"
                      {...a11yProps(23)}
                    />
                    <Tab
                      disableFocusRipple
                      disableRipple
                      disableTouchRipple
                      sx={{
                        cursor: "pointer",
                        variant: "subtitle1",
                        fontWeight: "700px",
                        color: "#4185D2",
                        textTransform: "none",
                        width: "1px",
                      }}
                      variant="subtitle1"
                      fontWeight={"700"}
                      label="y"
                      {...a11yProps(24)}
                    />
                    <Tab
                      disableFocusRipple
                      disableRipple
                      disableTouchRipple
                      sx={{
                        cursor: "pointer",
                        variant: "subtitle1",
                        fontWeight: "700px",
                        color: "#4185D2",
                        textTransform: "none",
                        width: "1px",
                      }}
                      variant="subtitle1"
                      fontWeight={"700"}
                      label="z"
                      {...a11yProps(25)}
                    />
                  </Tabs>
                </Box>
                <div
                  className="tabpanels"
                  style={{
                    height: "60vh",
                    width: "49.9vw",
                  

                  
                    marginTop: "-36px",
                    marginLeft: "-46px",

                    display: "flex",
                  }}
                >
                  {" "}
                  <CustomTabPanel value={value} index={0}>
                    <Neoplasm1 onCodeClick={setSelectedCode} />
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={1}>
                    <Neoplasm2 onCodeClick={setSelectedCode} />
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={2}>
                    <Neoplasm2 onCodeClick={setSelectedCode} />
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={3}>
                    <Neoplasm2 onCodeClick={setSelectedCode} />
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={4}>
                    <Neoplasm2 onCodeClick={setSelectedCode} />
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={5}>
                    <Neoplasm2 onCodeClick={setSelectedCode} />
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={6}>
                    <Neoplasm2 onCodeClick={setSelectedCode} />
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={7}>
                    <Neoplasm2 onCodeClick={setSelectedCode} />
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={8}>
                    <Neoplasm2 onCodeClick={setSelectedCode} />
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={9}>
                    <Neoplasm2 onCodeClick={setSelectedCode} />
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={10}>
                    <Neoplasm2 onCodeClick={setSelectedCode} />
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={11}>
                    <Neoplasm2 onCodeClick={setSelectedCode} />
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={12}>
                    <Neoplasm2 onCodeClick={setSelectedCode} />
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={13}>
                    <Neoplasm2 onCodeClick={setSelectedCode} />
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={14}>
                    <Neoplasm2 onCodeClick={setSelectedCode} />
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={15}>
                    <Neoplasm2 onCodeClick={setSelectedCode} />
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={16}>
                    <Neoplasm2 onCodeClick={setSelectedCode} />
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={17}>
                    <Neoplasm2 onCodeClick={setSelectedCode} />
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={18}>
                    <Neoplasm2 onCodeClick={setSelectedCode} />
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={19}>
                    <Neoplasm2 onCodeClick={setSelectedCode} />
                  </CustomTabPanel>
                 
                  <CustomTabPanel value={value} index={20}>
                    <Neoplasm2 onCodeClick={setSelectedCode} />
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={21}>
                    <Neoplasm2 onCodeClick={setSelectedCode} />
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={22}>
                    <Neoplasm2 onCodeClick={setSelectedCode} />
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={23}>
                    <Neoplasm2 onCodeClick={setSelectedCode} />
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={24}>
                    <Neoplasm2 onCodeClick={setSelectedCode} />
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={25}>
                    <Neoplasm2 onCodeClick={setSelectedCode} />
                  </CustomTabPanel>
                </div>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </div>
  );
};
