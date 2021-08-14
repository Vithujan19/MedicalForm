import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Grid, Typography } from '@material-ui/core';
import cover from '../assets/doctor.svg';
import './Form.css';

const Form = () => {

    return (
        <div>

            <Grid container style={{ padding: 40 }}>
                <Grid items xs={12} sm={6} direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start">
                        <Typography variant="h5" style={{paddingBottom:"20px"}}>Appointment Request Form</Typography>
                    <div className="container">
                        <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">

                            <input type="hidden" name="oid" value="00D4L00000119SG" />
                            <input type="hidden" name="retURL" value="https://hospitalmanagementsyst.herokuapp.com/" />

                            <Grid container style={{paddingBottom:10}}>
                                <Grid xs={4} sm={3} style={{ textAlign:"left"}}>
                                    <label for="salutation">Salutation</label>
                                </Grid>
                                <Grid xs={4} sm={3} style={{paddingLeft:30}}>
                                    <select id="salutation" name="salutation">
                                        <option value="">--None--</option>
                                        <option value="Mr.">Mr.</option>
                                        <option value="Ms.">Ms.</option>
                                        <option value="Mrs.">Mrs.</option>
                                        <option value="Dr.">Dr.</option>
                                        <option value="Prof.">Prof.</option>
                                    </select>
                                    <br />
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid xs={4} sm={4} style={{ paddingTop: 10 ,textAlign:"left"}}>
                                    <label for="first_name">First Name</label>
                                </Grid>
                                <Grid xs={8} sm={8}>
                                    <input id="first_name" maxlength="40" name="first_name" size="20" type="text" />
                                    <br />
                                </Grid>
                            </Grid>

                            <Grid container>
                                <Grid xs={4} sm={4} style={{ paddingTop: 10 ,textAlign:"left"}}>
                                    <label for="last_name">Last Name</label>
                                </Grid>
                                <Grid xs={8} sm={8}>
                                    <input id="last_name" maxlength="80" name="last_name" size="20" type="text" />
                                    <br />
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid xs={4} sm={4} style={{ paddingTop: 10 ,textAlign:"left"}}>
                                    <label for="email">Email</label>
                                </Grid>
                                <Grid xs={8} sm={8}>
                                    <input id="email" maxlength="80" name="email" size="20" type="text" />
                                    <br />
                                </Grid>
                            </Grid><Grid container>
                                <Grid xs={4} sm={4} style={{ paddingTop: 10 ,textAlign:"left"}}>
                                    <label for="phone">Phone</label>
                                </Grid>
                                <Grid xs={8} sm={8}>
                                    <input id="phone" maxlength="40" name="phone" size="20" type="text" />
                                    <br />
                                </Grid>
                            </Grid><Grid container>
                                <Grid xs={4} sm={4} style={{ paddingTop: 10 ,textAlign:"left"}}>
                                    Symptoms:
                                </Grid>
                                <Grid xs={8} sm={8}>
                                    <textarea id="00N5g00000KjF2E" name="00N5g00000KjF2E" rows="5" type="text" wrap="soft"></textarea><br />
                                </Grid>
                            </Grid>

                            <Grid container>
                                <Grid xs={4} sm={4} style={{ paddingTop: 10 ,textAlign:"left"}}>
                                    <label for="company">Company</label>
                                </Grid>
                                <Grid xs={8} sm={8}>
                                    <input id="company" maxlength="40" name="company" size="20" type="text" /><br />
                                </Grid>
                            </Grid>

                            <Grid container>
                                <Grid xs={4} sm={4} style={{ paddingTop: 10 ,textAlign:"left"}}>
                                    <label for="street">Street</label>
                                </Grid>
                                <Grid xs={8} sm={8}>
                                    <textarea name="street"></textarea><br />
                                </Grid>
                            </Grid>

                            <Grid container>
                                <Grid xs={4} sm={4} style={{ paddingTop: 10 ,textAlign:"left"}}>
                                    <label for="city">City</label>
                                </Grid>
                                <Grid xs={8} sm={8}>
                                    <input id="city" maxlength="40" name="city" size="20" type="text" /><br />
                                </Grid>
                            </Grid>

                            <Grid container>
                                <Grid xs={4} sm={4} style={{ paddingTop: 10 ,textAlign:"left"}}>
                                    <label for="state">State/Province</label>
                                </Grid>
                                <Grid xs={8} sm={8}>
                                    <input id="state" maxlength="20" name="state" size="20" type="text" /><br />
                                </Grid>
                            </Grid>

                            <input type="submit" name="submit" className="btn"/>

                        </form>
                    </div>
                </Grid>
                <Grid items xs={12} sm={6} >
                    <img src={cover} alt="" style={{ height: "auto", width: "80%" ,paddingTop:"70px"}} />
                </Grid>
            </Grid>
        </div>
    )

}

export default Form;