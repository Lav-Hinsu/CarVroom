import React from "react";


import PageSplitter from "../components/PageSplitter"
import CardHead from "../components/CardHeader"
import CustomCard from "../components/CustomCard"
import Footer from "../components/Footer"


import "../css/dashboard.css"

const Dashboard = (props) => {

    // since we do not have a API here, I assume we would use a api in the actual app. the response
    // would then be stored in the list_cars object

    var list_cars = [{
        "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDB-cL-RAxvDvp4cfrr9RNRfhC0irTC_s_rbF-xaiZDQbkvzTM&usqp=CAU",
        "name": "Toyota Indus c",
        "color": "White",
        "seats": "4",
        "rent": "250",
        "available": true,
        "vehicle_no": "gj 02 0202",
        "fuel_type": "petrol",
        "dis": "good car",
        "booking": []
    },
    {
        "url": "https://imgd.aeplcdn.com/370x208/cw/ec/35455/Hyundai-Venue-Right-Front-Three-Quarter-169804.jpg?wm=0&art=6",
        "name": "Hyundai Venue",
        "color": "blue",
        "seats": "8",
        "rent": "400",
        "available": true,
        "vehicle_no": "gj 01 0101",
        "fuel_type": "petrol",
        "dis": "better car",
        "booking": []
    },
    {
        "url": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Tesla/Tesla-Model-S/4615/1551164231212/front-left-side-47.jpg",
        "name": "Tesla Model S",
        "color": "Red",
        "seats": "4",
        "rent": "9000",
        "available": true,
        "vehicle_no": "gj 03 0303",
        "fuel_type": "Electric",
        "dis": "excellent car",
        "booking": []
    },
    {
        "url": "https://static.autox.com/uploads/2020/04/Volkswagen-T-Cross-Image-1--500x261.jpg",
        "name": "Volkswagen TC",
        "color": "White",
        "seats": "4",
        "rent": "700",
        "available": true,
        "vehicle_no": "gj 04 0404",
        "fuel_type": "Diesel",
        "dis": "best car",
        "booking": []
    }
    ]
    // here we check if the car is available or not from the state that is passed onto the Dashboard
    // Component using the state in the state in the history from useHistory() by react-router-dom 
    if (props.location.state != null) {
        var bookings_list = props.location.state.booking;
        for (var i = 0; i < bookings_list.length; i++) {
            var car_name = props.location.state.booking[i].car_name;
            for (var j = 0; j < list_cars.length; j++) {
                if (list_cars[j]["name"] === car_name) {
                    list_cars[j]["available"] = false;
                }
                list_cars[j]["booking"] = props.location.state.booking;

            }
        }
    }

    return (
        //render cards based on number of items
        <div>
            <header>
                <p>RENT</p>
                <span>VROOM</span>
            </header>
            <PageSplitter></PageSplitter>
            <CardHead></CardHead>
            {list_cars.map((item) =>
                <CustomCard
                    url={item["url"]}
                    name={item["name"]}
                    color={item["color"]}
                    seats={item["seats"]}
                    rent={item["rent"]}
                    available={item["available"]}
                    vehicle_no={item["vehicle_no"]}
                    fuel_type={item["fuel_type"]}
                    dis={item["dis"]}
                    booking={item["booking"]}
                />

            )}
            <Footer></Footer>
        </div>

    );
}
export default Dashboard;

