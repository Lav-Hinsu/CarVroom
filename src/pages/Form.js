import React, { useState } from "react";

import MuiPhoneInput from "material-ui-phone-number";
import TextField from "@material-ui/core/TextField";
import Modal from "@material-ui/core/Modal";
import { Grid } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import "date-fns"
import Button from "@material-ui/core/Button"
import isAfter from "date-fns/isAfter"
import { useHistory} from "react-router-dom";
import { getDate, getMonth, getYear } from "date-fns/"
import { makeStyles } from "@material-ui/core/styles";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from "@material-ui/pickers";

import "../css/form.css"


const Form = (props) => {
    const history = useHistory();
    

    //using the context API in the react, i use state. 

    const [selectedDate, setSelectedDate] = useState(new Date("2020-04-30"));
    const [selectedRDate, setSelectedRDate] = useState(new Date("2020-05-1"));
    const [phoneNumber, setPhoneNumber] = useState();
    const [name, setName] = useState();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);


    };
    const handlePhoneChange = (value) => {
        if (value.length < 3)
            setPhoneNumber(null);
        else
            setPhoneNumber(value);
    }

    const handleRDateChange = (date) => {
        setSelectedRDate(date);

    }

    const handleNameChange = (name) => {
        setName(name);
    }

    const Validate = () => {
        if (name == null || phoneNumber == null) {
            alert("Name or phone no. cannot be empty");
            return false;
        }
        else if (name.length === 0 || phoneNumber.length !== 15) {
            alert("Invalid name or phone no.")
            return false;
        }
        var bool = isAfter(selectedRDate, selectedDate)
        if (bool === false) {
            alert("Return date invalid")
            return false
        }
        return true;
    }

    // set style used for the modal below


    const useStyles = makeStyles((theme) => ({
        paper: {
            position: "relative",
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: "2px solid black",
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }));
    const classes = useStyles();

    function getModalStyle() {
        const top = 50;
        const left = 50;

        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }

    // method called upon user clicking continue button on the modal

    const SubmitForm = () => {

        handleClose();
        var list_months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var issuedate = getDate(selectedDate) + " " + list_months[getMonth(selectedDate)] + " " + getYear(selectedDate);
        var returndate = getDate(selectedRDate) + " " + list_months[getMonth(selectedRDate)] + " " + getYear(selectedRDate);
        var booking = props.location.state.carprops.booking;
        var dictionary = {
            "car_name": props.location.state.carprops.name,
            "name": name,
            "phone_no": phoneNumber,
            "issue_date": issuedate,
            "return_date": returndate
        };
        booking.push(dictionary);
        history.push({
            pathname: "/",
            state: {
                "booking": booking
            }
        })
    }


    // called when user clicks the modal
    
    
    const BeginSubmitProcess = () => {
        if (Validate()) {
            //Routing
            handleOpen(); 
        }
        else {
        }
    }

    return (
        //below are UI elements, including a modal. 
        <div>
            
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                disableBackdropClick={true}
            >

                <div style={modalStyle} class={classes.paper}>
                    <h2 id="simple-modal-title">Booking Confirmed!</h2>
                    <p id="simple-modal-description">
                        You have booked : {props.location.state.carprops.name}
                    </p>
                    <p>
                        For the Duration : {getDate(selectedDate) + "/" + (getMonth(selectedDate) + 1) + "/" + getYear(selectedDate)} - {getDate(selectedRDate) + "/" + (getMonth(selectedRDate) + 1) + "/" + getYear(selectedRDate)}
                    </p>
                    <Button onClick={SubmitForm} >
                        continue
                    </Button>
                </div>
            </Modal>
            <Grid container direction="row" justify="flex-start" alignItems="stretch" >
                <Grid item direction="row" >
                    <div class="fimg" />
                </Grid>

                <Grid item>
                    <header style={{ whiteSpace: "normal", marginLeft: "4vw", marginTop: "15vh" }}>
                        <span style={{ fontWeight: "normal", fontSize: "xx-large", marginRight: "35vw" }}> Booking details </span>
                        <p style={{ color: "black" }}>RENT</p>
                        <text style={{ display: "inline-block", color: "cornflowerblue" }}>VROOM</text>
                    </header>
                    <Grid item >
                        <form action="submit">
                            <div class="ftext">
                                <div>
                                    <TextField
                                        id="name-field"
                                        required label="Name"
                                        placeholder="Jane Doe"
                                        value={name}
                                        onChange={(event) => { handleNameChange(event.target.value) }}
                                    />
                                </div>
                                <div class="cont_no">

                                    <MuiPhoneInput
                                        id="phone-field"
                                        label="Contact Number"
                                        required defaultCountry="in"
                                        onlyCountries={["in"]}
                                        regions={"asia"}
                                        value={phoneNumber}
                                        onChange={(value) => { handlePhoneChange(value) }}
                                    />
                                </div>
                            </div>
                            <div class="fdate" >
                                <div>
                                    <Grid item >
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <KeyboardDatePicker
                                                required
                                                margin="normal"
                                                id="date-picker-dialog-i"
                                                label="Issue Date"
                                                value={selectedDate}
                                                autoOk
                                                onChange={(value) => { handleDateChange(value) }}
                                                format="dd/MM/yyyy"
                                                KeyboardButtonProps={{
                                                    "aria-label": "change date",
                                                }}
                                            />
                                        </MuiPickersUtilsProvider>
                                    </Grid>
                                </div>
                                <div class="rdate">
                                    <Grid item >
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <KeyboardDatePicker
                                                required
                                                margin="normal"
                                                id="date-picker-dialog-r"
                                                label="Return Date"
                                                value={selectedRDate}
                                                onChange={handleRDateChange}
                                                autoOk
                                                format="dd/MM/yyyy"
                                                KeyboardButtonProps={{
                                                    "aria-label": "change date",
                                                }}
                                            />
                                        </MuiPickersUtilsProvider>
                                    </Grid>
                                </div>
                            </div>


                            <div class="fdate">
                                <div>
                                    <Button href="/">Back</Button>
                                </div>
                                <div class="bcar">
                                    <Button variant="contained" onClick={BeginSubmitProcess} style={{ backgroundColor: "rgb(110, 96, 96)", color: "white" }}>Book Car</Button>
                                </div>
                            </div>
                        </form>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
export default Form;