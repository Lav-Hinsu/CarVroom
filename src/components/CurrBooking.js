import React from "react";
import Divider from "@material-ui/core/Divider";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";


const CurrBooking = (props) => {

    // get props from parent component

    var Name = props.name;
    var Phone = props.phone;
    var Idate = props.Idate;
    var Rdate = props.Rdate;


    return (
        <div>
            <div style={{ marginTop: "10vh" }}>
                <span style={{ fontSize: "4vh", marginLeft: "3vw", color: "grey" }}>
                    Current Booking
                </span>
                <Divider style={{ marginTop: "3vh" }} />
            </div>
            <div style={{ marginLeft: "3vw", marginRight: "3vw" }}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="center">Phone Number</TableCell>
                                <TableCell align="center">Issue Date</TableCell>
                                <TableCell align="center">Return date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow key={Name}>
                                <TableCell component="th" scope="row">
                                        {Name}
                                </TableCell>
                                <TableCell align="center">{Phone}</TableCell>
                                <TableCell align="center">{Idate}</TableCell>
                                <TableCell align="center">{Rdate}</TableCell>
                                </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );

}

export default CurrBooking