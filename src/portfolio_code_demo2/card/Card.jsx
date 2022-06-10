import * as React from 'react';
import Cardinstruction from '../cardinstruction/Cardinstruction';
import styled from "styled-components";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Trip from '../tripcard/Tripcard_raw'



export default function Card_page() {

    const CardSection = styled.div`
        display: flex;
        justify-content: center;
        flex-flow: row wrap;
    `;

    const ratingChanged = (newRating) => {
        console.log(newRating)
      }
      
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

  return (
      <div>
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example" style={{background: 'white'}}>
                    <Tab label="Card Instruction" value="1" />
                    <Tab label="Card Gallery" value="2" />
                </TabList>
            </Box>
            <TabPanel value="1" style={{background: 'white'}}>
                <Cardinstruction />
            </TabPanel>
            <TabPanel value="2" style = {{background: '#282c34'}}>
                <Trip />
            </TabPanel>
        </TabContext>

  </div>
  );
}
