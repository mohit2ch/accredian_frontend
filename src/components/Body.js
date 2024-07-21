import { Tabs, Tab, Box } from "@mui/material";
import { useState } from "react";

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default function Body(params) {
    const [value, setValue] = useState(0);

    function handleChange(event, newValue){
        console.log("Change", newValue);
        setValue(newValue);
        
    }
    return(
        <>
        <Box sx={{ borderColor: 'divider', margin:'auto', display: 'flex', justifyContent: 'center', color: '#fff' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" style={{color: 'white', background: '#EEEEEE', margin:'30px 0', borderRadius:'20px'}} variant="secondary">
          <Tab label="Refer" {...a11yProps(0)} id="tab-0" />
          <Tab label="Benefits" {...a11yProps(1)} id="tab-1" />
          <Tab label="FAQs" {...a11yProps(2)} id="tab-2" />
          <Tab label="Support" {...a11yProps(3)} id="tab-3"/>
        </Tabs>
      </Box>
        </>
    )
};
