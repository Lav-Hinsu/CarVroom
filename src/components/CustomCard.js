import React from "react";
import { Container, Grid, Box } from "@material-ui/core";
import Colorize from "@material-ui/icons/Colorize";
import AirlineSeatReclineNormalIcon from "@material-ui/icons/AirlineSeatReclineNormal";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";



const CustomCard = (props) => {
    const history = useHistory();

    // get props from parent component
    
    var url = props.url;
    var name = props.name;
    var color = props.color;
    var available = props.available;
    var seats = props.seats;
    var rent = props.rent;
    var btncolor = "rgb(110, 96, 96)";
    // selective property rendering based on the prop passed.
    if (available === false) {
        btncolor = "red";
    }
    else {
        btncolor = "rgb(110, 96, 96)";
    }


    return (
        <div>
            <Box mx="20vh"  mt={2} ml={15} mr={15}>
                <Container>
                    <Grid container spacing={4} alignItems="center">
                        <Grid item >
                            <Box >
                                <img class="img" alt="complex" src={url} />
                            </Box>
                        </Grid>
                        <Grid>
                            <Grid item style={{ marginRight: "17vw" }} >
                                <p class="carname">
                                    {name}
                                </p>
                            </Grid>
                            <div class="cardicon">
                                <Grid container direction="row" >
                                    <Grid item>
                                        <Colorize></Colorize>
                                    </Grid>
                                    <Grid item>
                                        <span style={{ fontWeight: "lighter" }}>
                                            {color}
                                        </span>
                                    </Grid>
                                    <Grid item style={{ marginLeft: "4vw" }}>
                                        <AirlineSeatReclineNormalIcon></AirlineSeatReclineNormalIcon>
                                    </Grid>
                                    <Grid item>
                                        <span style={{ fontWeight: "lighter" }}>
                                            {seats} seater
                                        </span>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item style={{ marginRight: "7vw" }}>
                            <p>₹ {rent}</p>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" disabled={!available} style={{ backgroundColor: btncolor, color: "white" }} onClick={()=>{
                                history.push({
                                    pathname: "/form",
                                    state: { carprops: props }
                                });
                            }}>
                                Book Now</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" style={{ backgroundColor: "white", color: "grey" }} onClick={()=>{
                                // pass data between pages using state in the history object
                                history.push({
                                    pathname: "/details",
                                    state: { carprops: props }
                                });
                            }}>
                                Details</Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    );

}
export default CustomCard;