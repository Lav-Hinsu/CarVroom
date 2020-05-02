import React from "react";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";

const DCinfo = (props) => {

    // get props from parent component

    var vehicle_no=props.vehicle_no
    var fuel_type = props.fuel_type
    var dis = props.dis
    var available = props.available
    var avail_text 
    var Icon
    if(available){
        avail_text = "available"
        Icon = <CheckIcon></CheckIcon>
    }
    else{
        avail_text = "Not Available"
        Icon = <ClearIcon></ClearIcon>
    }


    return (
        <div>
            <div>
                <span style={{ fontSize: "4vh", marginLeft: "3vw", color: "grey" }}>
                    Cars Details
                </span >
                <Divider style={{ marginTop: "3vh" }} />
            </div>
            <div style={{ fontSize: "4vh", marginLeft: "3vw", color: "grey", marginTop: "2vh" }}>
                <Button variant="contained" disabled color={"rgb(110, 96, 96)"}
                    endIcon={Icon}
                    style={{ backgroundColor: "rgb(110, 96, 96)", color: "white" }}>
                    {avail_text}
                    </Button>
            </div>
            <div style={{ marginLeft: "3vw", marginTop: "5vh" }}>
                <p>
                    Vehicle Number : {vehicle_no}
                </p>
                <p>
                    Fuel Type : {fuel_type}
                </p>
                <p>
                    Engine Details : {fuel_type + " engine"}
                    </p>
                <p>
                    More Description : {dis}
                    </p>
            </div>
        </div>

    );
}
export default DCinfo
