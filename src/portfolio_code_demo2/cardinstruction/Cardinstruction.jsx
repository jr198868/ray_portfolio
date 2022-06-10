import * as React from 'react';
import '../cardinstruction/Cardinstruction.css'
import ReactStars from 'react-stars';
import Card from '@mui/material/Card';
import styled from "styled-components";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import OverlayTrigger from 'react-overlay-trigger';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import randyland from '../assets/IMG195.jpg';

import Button from '@mui/material/Button';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';



export default function Cardinstruction() {

    const ratingChanged = (newRating) => {
        console.log(newRating)
      }

    const CardSection = styled.div`
      display: flex;
      justify-content: center;
      flex-flow: row wrap;
    `;


    return (
        <div>
        <div className ='description' style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            Card consists of various elements like card photo area,  card name,  star rating, and text box.
        </div>
        <div className ='description' style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            It can construct different card as based on different requirements. Hover over the card to see each component instruction.
        </div>
        
        <CardSection>
        
            <Card sx={{ maxWidth: 380,  height: 550, m: 10, boxShadow: '0 26px 70px -12.125px rgba(0,0,0,0.3)'}} >            
            
                <CardActionArea>
                <div className="img-brightness">
                <Tooltip title={<h2 style={{ color: "lightblue" }}>Card Photo Area: <br /> By default, a background image of a tourist attraction is the major content of the card photo area</h2>} placement="left" >
                    
                        <CardMedia
                        component="img"
                        height="380"
                        image= {randyland}
                        sx={{ boxShadow: 3 }}
                        />
                    
                </Tooltip>
                </div>
                    <CardContent>
                    <Tooltip title={<h2 style={{ color: "lightblue" }}>Card Name: <br /> It is usually a tourist attraction in different states in USA</h2>} placement="right">
                    <Typography gutterBottom variant="h5" component="div" style = {{fontWeight: 600, alignItems: 'center', justifyContent: 'center'}}>
                        <div className="cardname-brightness" align="center">
                            Roadside Pittsburgh Randyland 
                        </div>
                        <Tooltip title={<h2 style={{ color: "lightblue" }}>Star Rating: <br /> A simple star rating component with half stars and custom characters</h2>} placement="left">
                        
                            <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}} className="start-brightness">
                                <ReactStars
                                    count={7}
                                    onChange={ratingChanged}
                                    size={24}
                                    color2={'#1c7fee'}                                 
                                    />
                            </div> 
    
                        </Tooltip>
                    </Typography>
                    </Tooltip>
                    <Tooltip title={<h2 style={{ color: "lightblue" }}>Text Box: <br /> Location information and date</h2>} placement="right">
                        <div className="text-brightness" style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <Typography variant="body1" color="text.secondary">
                                Randyland, Pittsburgh <br />
                                May 28, 2022
                            </Typography>
                        </div>
                    </Tooltip>
                    </CardContent>
                </CardActionArea>
                
            </Card>

        </CardSection>
        
    </div>
    )
}