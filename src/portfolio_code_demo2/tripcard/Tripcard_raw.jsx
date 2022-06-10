import * as React from 'react';
import ReactStars from 'react-stars';
import '../tripcard/Tripcard_raw.css';
import Card from '@mui/material/Card';
import styled from "styled-components";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import randyland from '../assets/IMG195.jpg';
import nightviewnown from '../assets/IMG196.jpg';
import roll from '../assets/IMG197.jpg';
import rockroll from '../assets/IMG198.jpg';
import chicago from '../assets/IMG199.jpg';
import rice from '../assets/IMG200.jpg';

export default function Trip() {

    const CardSection = styled.div`
        display: flex;
        justify-content: center;
        flex-flow: row wrap;
    `;

    const ratingChanged = (newRating) => {
        console.log(newRating)
      }

  return (
      <div>
        <CardSection>
            <Card sx={{ maxWidth: 380,  height: 550, m: 10, boxShadow: '0 26px 70px -12.125px rgba(0,0,0,0.3)'}} >
                <CardActionArea >
                    <CardMedia
                    component="img"
                    height="380"
                    image= {nightviewnown}
                    sx={{ boxShadow: 3 }}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style = {{fontWeight: 600}} align="center">
                        Pittsburgh's Night View in Mt. Washington
                        <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <ReactStars
                                count={7}
                                onChange={ratingChanged}
                                size={24}
                                color2={'#ffd700'} />
                            </div>
                    </Typography>
                    <Typography variant="body1" color="text.secondary" style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        Mt. Washington, Pittsburgh <br />
                        May 30, 2022
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 380,  height: 550, m: 10, boxShadow: '0 26px 70px -12.125px rgba(0,0,0,0.3)'}} >
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="380"
                    image= {randyland}
                    sx={{ boxShadow: 3 }}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style = {{fontWeight: 600}} align="center">
                        Roadside Pittsburgh Randyland 
                        <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <ReactStars
                                count={7}
                                onChange={ratingChanged}
                                size={24}
                                color2={'#ffd700'} />
                            </div>
                    </Typography>
                    <Typography variant="body1" color="text.secondary" style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        Randyland, Pittsburgh <br />
                        May 28, 2022
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 380,  height: 550, m: 10, boxShadow: '0 26px 70px -12.125px rgba(0,0,0,0.3)'}} align="center">
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="380"
                    image= {roll}
                    sx={{ boxShadow: 3 }}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style = {{fontWeight: 600}}>
                        Cleveland Rock & Roll Hall of Fame
                        <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <ReactStars
                                count={7}
                                onChange={ratingChanged}
                                size={24}
                                color2={'#ffd700'} />
                        </div>
                    </Typography>
                    <Typography variant="body1" color="text.secondary" style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        Cleveland, Ohio <br />
                        May 30, 2022
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 380,  height: 550, m: 10, boxShadow: '0 26px 70px -12.125px rgba(0,0,0,0.3)'}} align="center">
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="380"
                        image= {chicago}
                        sx={{ boxShadow: 3 }}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style = {{fontWeight: 600}}>
                        Balaban and Katz Chicago Theatre
                        <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <ReactStars
                                count={7}
                                onChange={ratingChanged}
                                size={24}
                                color2={'#ffd700'} />
                        </div>
                    </Typography>
                        <Typography variant="body1" color="text.secondary" style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            Chicago, Illinois <br />
                            November 25, 2021
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 380,  height: 550, m: 10, boxShadow: '0 26px 70px -12.125px rgba(0,0,0,0.3)'}} align="center">
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="380"
                        image= {rockroll}
                        sx={{ boxShadow: 3 }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style = {{fontWeight: 600}}>
                            Rock and Roll Hall of Fame (RRHOF)
                            <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <ReactStars
                                    count={7}
                                    onChange={ratingChanged}
                                    size={24}
                                    color2={'#ffd700'} />
                            </div>
                        </Typography>
                        <Typography variant="body1" color="text.secondary" style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            Cleveland, Ohio<br />
                            May 30, 2022
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 380,  height: 550, m: 10, boxShadow: '0 26px 70px -12.125px rgba(0,0,0,0.3)'}} align="center">
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="380"
                        image= {rice}
                        sx={{ boxShadow: 3 }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style = {{fontWeight: 600}}>
                            Rice University Academic Quad
                            <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <ReactStars
                                    count={7}
                                    onChange={ratingChanged}
                                    size={24}
                                    color2={'#ffd700'} />
                            </div>
                        </Typography>
                        <Typography variant="body1" color="text.secondary" style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            Houston, Texas <br />
                            November 5, 2021
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </CardSection>


  </div>
  );
}
