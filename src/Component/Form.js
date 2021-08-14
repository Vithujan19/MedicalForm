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
                    <Typography variant="h5" style={{ paddingBottom: "20px" }}>Appointment Request Form</Typography>
                    <div className="container">
                        <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">

                            <input type="hidden" name="oid" value="00D4L00000119SG" />
                            <input type="hidden" name="retURL" value="https://hospitalmanagementsyst.herokuapp.com/" />

                            <Grid container style={{ paddingBottom: 10 }}>
                                <Grid xs={4} sm={4} style={{ paddingTop: 15, textAlign: "left" }}>
                                    <label for="salutation">Salutation</label>
                                </Grid>
                                <Grid xs={8} sm={8} >
                                    <select id="salutation" name="salutation"><option value="">--None--</option><option value="Mr.">Mr.</option>
                                        <option value="Ms.">Ms.</option>
                                        <option value="Mrs.">Mrs.</option>
                                        <option value="Dr.">Dr.</option>
                                        <option value="Prof.">Prof.</option>
                                    </select>
                                    <br />
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid xs={4} sm={4} style={{ paddingTop: 10, textAlign: "left" }}>
                                    <label for="first_name">First Name</label>
                                </Grid>
                                <Grid xs={8} sm={8}>
                                    <input id="first_name" maxlength="40" name="first_name" size="20" type="text" />
                                    <br />
                                </Grid>
                            </Grid>

                            <Grid container>
                                <Grid xs={4} sm={4} style={{ paddingTop: 10, textAlign: "left" }}>
                                    <label for="last_name">Last Name</label>
                                </Grid>
                                <Grid xs={8} sm={8}>
                                    <input id="last_name" maxlength="80" name="last_name" size="20" type="text" />
                                    <br />
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid xs={4} sm={4} style={{ paddingTop: 10, textAlign: "left" }}>
                                    <label for="email">Email</label>
                                </Grid>
                                <Grid xs={8} sm={8}>
                                    <input id="email" maxlength="80" name="email" size="20" type="text" />
                                    <br />
                                </Grid>
                            </Grid><Grid container>
                                <Grid xs={4} sm={4} style={{ paddingTop: 10, textAlign: "left" }}>
                                    <label for="phone">Phone</label>
                                </Grid>
                                <Grid xs={8} sm={8}>
                                    <input id="mobile" maxlength="40" name="mobile" size="20" type="text" /><br />
                                </Grid>
                            </Grid>

                            <Grid container>
                                <Grid xs={4} sm={4} style={{ paddingTop: 10, textAlign: "left" }}>
                                    Birth Date:
                                </Grid>
                                <Grid xs={8} sm={8}>
                                    <span class="dateInput dateOnlyInput"><input id="00N4L000009O3w0" name="00N4L000009O3w0" size="12" type="date" /></span><br />
                                </Grid>
                            </Grid>

                            <Grid container style={{paddingTop:10}}>
                                <Grid xs={4} sm={4} style={{ paddingTop: 10, textAlign: "left" }}>
                                    Gender:
                                </Grid>
                                <Grid xs={8} sm={8}>
                                    <select id="00N4L000009O3wF" name="00N4L000009O3wF" title="Gender"><option value="">--None--</option><option value="Female">Female</option>
                                        <option value="Male">Male</option>
                                        <option value="Other">Other</option>
                                    </select><br />
                                </Grid>
                            </Grid>

                            <Grid container>
                                <Grid xs={4} sm={4} style={{ paddingTop: 10, textAlign: "left" }}>
                                    Symptoms:
                                </Grid>
                                <Grid xs={8} sm={8}>
                                    <textarea id="00N4L000009O3wA" name="00N4L000009O3wA" type="text" wrap="soft"></textarea><br />
                                </Grid>
                            </Grid>

                            <Grid container>
                                <Grid xs={4} sm={4} style={{ paddingTop: 10, textAlign: "left" }}>
                                    Address:
                                </Grid>
                                <Grid xs={8} sm={8}>
                                    <textarea id="00N4L000009O3w5" name="00N4L000009O3w5" type="text" wrap="soft"></textarea><br />
                                </Grid>
                            </Grid>

                            <input type="submit" name="submit" className="btn" />

                        </form>
                    </div>
                </Grid>
                <Grid items xs={12} sm={6} >
                    <img src={cover} alt="" style={{ height: "auto", width: "80%", paddingTop: "70px" }} />
                </Grid>
            </Grid>
        </div>
    )

}

export default Form;