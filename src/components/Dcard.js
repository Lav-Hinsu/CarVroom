import React from "react";

import { Grid, Box, Paper } from "@material-ui/core";
import Colorize from "@material-ui/icons/Colorize";
import AirlineSeatReclineNormalIcon from "@material-ui/icons/AirlineSeatReclineNormal";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

import "../css/details.css"

const Dcard = (props) => {
    const history = useHistory();

    // get props from parent component

    var url = props.url;
    var name = props.name;
    var color = props.color;
    var available = props.available;
    var seats = props.seats;
    var rent = props.rent;
    var avail_text
    if (available){
        avail_text = "available"
    }
    else{
        avail_text = "not Available";
    }

    return(
        <Box mx="38vh" borderRadius={10} >
                <Paper>
                    <Grid container spacing={3} alignItems="flex=start">
                        <Box>
                            <Grid item>
                                <img class="dimg" alt="carimage" src={url} />
                            </Grid>
                        </Box>
                        <Grid >
                            <Grid>
                                <p class="dcarname">
                                    {name}
                            </p>
                                <Grid container direction="row" justify="flex-start" alignItems="center" >
                                    <div class="dcardicon">
                                        <Grid item>
                                            <Colorize></Colorize>
                                        </Grid>
                                        <Grid item>
                                            <span style={{ fontWeight: "lighter" }}>
                                                {color}
                                    </span>
                                        </Grid>
                                        <Grid item style={{ marginLeft: "1vw" }}>
                                            <AirlineSeatReclineNormalIcon></AirlineSeatReclineNormalIcon>
                                        </Grid>
                                        <Grid item>
                                            <span style={{ fontWeight: "lighter" }}>
                                                {seats} seater
                                    </span>
                                        </Grid>
                                    </div>
                                </Grid>
                                <p class="drent">
                                    Rent per day : ₹ {rent}
                            </p>
                                <Button variant="contained" disabled={!available} style={{ backgroundColor: "rgb(110, 96, 96)", color: "white" }} onClick={()=>{
                                    history.push({
                                        pathname: "/form",
                                        state:{ carprops: props}
                                    })
                                }}>Book Now</Button>
                                <span class="cavail">
                                    {
                                        avail_text
                                    }
                            </span>
                            </Grid>
                        </Grid>
                    </Grid>


                </Paper>
            </Box>
    );

 }
export default Dcard