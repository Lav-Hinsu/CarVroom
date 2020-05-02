import React from "react";
import Twitter from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Grid } from "@material-ui/core";
const Footer = () => {

    return (
        <div>
            <div class="footer">
                <h2 > Rent Vroom </h2>
                <p class="footertext">
                    RentVroom Pvt. ltd.
            </p>
                <p class="footertext">
                    No: 296, 3rd Cross Road, Jakkasandra, 1st Block, Kormangla
            </p>
                <p class="footertext">
                    Bengaluru, karnataka 560034
            </p>
            </div>
            <Grid container direction="row">
                <Grid Item>
                    <div class="footericon">
                        <Twitter></Twitter>
                    </div>
                </Grid>
                <Grid Item>
                    <div class="footericon">
                        <InstagramIcon></InstagramIcon>
                    </div>
                </Grid>
                <Grid Item>
                    <div class="footericon">
                        <LinkedInIcon></LinkedInIcon>
                    </div>
                </Grid>
            </Grid>
            <div >
                <span class="bottomnav">
                    Home
            </span>
                <span class="bottomnav" >
                    Contact
            </span>
                <span class="bottomnav">
                    About
            </span>
                <span class="privacy">
                    Privacy Policy
            </span>
                <span class="tos">
                    Terms of service
            </span>
            </div>


        </div>

    );
}
export default Footer