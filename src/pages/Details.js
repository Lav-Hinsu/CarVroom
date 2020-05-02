import React from "react";



import Footer from "../components/Footer.js"
import Dcard from "../components/Dcard"
import DCinfo from "../components/DCinfo"
import CurrBooking from "../components/CurrBooking"

import "../css/details.css"

const Details = (props) => {


    //get state details from the card that called the details page

    var cname = props.location.state.carprops.name;
    var url = props.location.state.carprops.url;
    var color = props.location.state.carprops.color;
    var available = props.location.state.carprops.available;
    var seats = props.location.state.carprops.seats;
    var rent = props.location.state.carprops.rent;
    var vehicle_no = props.location.state.carprops.vehicle_no;
    var fuel_type = props.location.state.carprops.fuel_type;
    var dis = props.location.state.carprops.dis;
    var booking = props.location.state.carprops.booking;

    var name;
    var phone_no;
    var issue_date;
    var return_date;

    var match = false;
    for(var i = 0;i<booking.length;i++){
        var car_name = booking[i].car_name;
        if(cname===car_name){
            match = true;
            name = booking[i]["name"];
            phone_no = booking[i]["phone_no"];
            issue_date = booking[i]["issue_date"];
            return_date = booking[i]["return_date"];
            break;
        }
    }

    if(booking.length===0 || match===false){
        name = "";
        phone_no = "";
        issue_date = "";
        return_date = "";
    }
    return (
        <div>
            <header>
                <p>RENT</p>
                <span>VROOM</span>
            </header>

            <Dcard
                url={url}
                name={cname}
                color={color}
                seats={seats}
                rent={rent}
                available={available}
                booking={booking}
            />

            <div style={{ marginTop: "10vh" }}>
                <DCinfo
                    vehicle_no={vehicle_no}
                    fuel_type={fuel_type}
                    dis={dis}
                    available={available}
                />
                <CurrBooking
                    name={name}
                    phone={phone_no}
                    Idate={issue_date}
                    Rdate={return_date}
                />
            </div>
            <Footer>
            </Footer>
        </div>

    );

}
export default Details;