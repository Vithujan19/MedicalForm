import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';


// validation method 1
// const validate = values =>{
//     var errors={}
//     if(!values.name){
//         errors.name = "Name is required"
//     }else if(values.name.length > 15){
//         errors.name = "Maximum 15 characters only"
//     }else if(values.name.length < 3){
//         errors.name = "Minimum 3 characters required"
//     }

//     return errors;
// }

const Form = () => {

    const formik = useFormik({
        initialValues: {
            salutation: '',
            first_name: '',
            last_name: '',
            nic: '',
            email: '',
            phone: '',
            gender: '',
            dob: '',
            street: '',
            symptoms: '',
        },
        // validationSchema: yup.object({
        //     fname: yup.string()
        //         .required("Name is required")
        //         .strict()
        //         .trim()
        //         .min(5, "Minimum 5 characters required")
        //         .max(15, "Maximum 15 characters only"),
        //     lname: yup.string()
        //         .required("Name is required")
        //         .strict()
        //         .trim()
        //         .min(5, "Minimum 5 characters required")
        //         .max(15, "Maximum 15 characters only"),
        //     email: yup.string()
        //         .email()
        //         .required("Email is required"),
        //     list: yup.string()
        //         .required("List is required"),
        //     password: yup.string()
        //         .required("Password is required"),
        //     confirmPassword: yup.string()
        //         .oneOf([yup.ref('password'), null], "Password and confirm password must be same")
        //         .required("Confirm Password List is required")
        // }),
        // validate,
        onSubmit: (userInputData) => {
            console.log(userInputData);
        }
    })

    return (
        <div className="container">
            <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">

<input type="hidden" name="oid" value="00D5g000000Kk8Z"/>
<input type="hidden" name="retURL" value="http://www.google.com"/>


<label for="salutation">Salutation</label><select  id="salutation" name="salutation"><option value="">--None--</option><option value="Mr.">Mr.</option>
<option value="Ms.">Ms.</option>
<option value="Mrs.">Mrs.</option>
<option value="Dr.">Dr.</option>
<option value="Prof.">Prof.</option>
</select><br/>

<label for="first_name">First Name</label><input  id="first_name" maxlength="40" name="first_name" size="20" type="text" /><br/>

<label for="last_name">Last Name</label><input  id="last_name" maxlength="80" name="last_name" size="20" type="text" /><br/>

<label for="email">Email</label><input  id="email" maxlength="80" name="email" size="20" type="text" /><br/>

<label for="phone">Phone</label><input  id="phone" maxlength="40" name="phone" size="20" type="text" /><br/>

Symptoms:<textarea  id="00N5g00000KjF2E" name="00N5g00000KjF2E" rows="10" type="text" wrap="soft"></textarea><br/>

<label for="company">Company</label><input  id="company" maxlength="40" name="company" size="20" type="text" /><br/>

<label for="street">Street</label><textarea name="street"></textarea><br/>

<label for="city">City</label><input  id="city" maxlength="40" name="city" size="20" type="text" /><br/>

<label for="state">State/Province</label><input  id="state" maxlength="20" name="state" size="20" type="text" /><br/>

<input type="submit" name="submit"/>

</form>
        </div>
    )

}

export default Form;