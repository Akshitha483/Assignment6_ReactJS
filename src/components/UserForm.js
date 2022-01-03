import React, { useState } from "react";
import './style.css';

function UserForm(props) {

    const [userData, setuserData] = useState({
        email:'',
        firstName: '',
        lastName: '',
        password: ''
    })

    const [emailError, setemailError] = useState("");


    const validateEmail = ()=>
    {
        if(userData.email){
            let regex = /^\S+@\S+$/;
            if(regex.test(userData.email)){
                setemailError("");
                return true;
            } else {
                setemailError("entet valid email id");
            }}
            else{
                setemailError("email id is required");
            }
        return false
    };

    
    const [firstNameError, setfirstNameError] = useState("");


    const validatefirstName = ()=>
    {
        if(userData.firstName){
            let regex = /^[a-zA-Z]+$/;
            if(regex.test(userData.firstName)){
                setfirstNameError("");
                return true;
            } else {
                setfirstNameError("enter valid  First Name");
            }}
            else{
                setfirstNameError("First name is required");
            }
        return false
    };

    const [lastNameError, setlastNameError] = useState("");


    const validatelastName = ()=>
    {
        if(userData.lastName){
            let regex = /^[a-zA-Z]+$/;
            if(regex.test(userData.lastName)){
                setlastNameError("");
                return true;
            } else {
                setlastNameError("enter valid Last Name");
            }}
            else{
                setlastNameError("Last name is required");
            }
        return false
    };

    const [passwordError, setpasswordError] = useState("");


    const validatepassword = ()=>
    {
        if(userData.password){
            let regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
            if(regex.test(userData.password)){
                setpasswordError("");
                return true;
            } else {
                setpasswordError("enter valid password");
            }}
            else{
                setpasswordError("Password is required");
            }
        return false
    };

    //console.log(userData);
    let updateUserData = (event) => {
        setuserData({
            ...userData,
            [event.target.name]: event.target.value,
        })
    }


    let saveData=()=>{
        //validation
        validateEmail();
        validatefirstName();
        validatelastName();
        validatepassword();
        if(validateEmail() && validatefirstName() && validatefirstName() && validatelastName() && validatepassword()){
        props.getUserData(userData);
        setuserData({
            email:'',
            firstName:'',
            lastName:'',
            password:'',
        });
    }
};

    return (
        <div className='container'>
            <h2>Login Form</h2>

            <div className='mb-3'>
                    <input name='email' type="email" className="form-control" placeholder="Enter Email" 
                    value={userData.email} onChange={(event)=>{updateUserData(event)}}/>
                {emailError && <div className="errorMsg">{emailError}</div>}
                
                
                </div>
            
                <div className='mb-3'>
                    <input name='firstName' type="text" className="form-control" placeholder="Enter Firstname" 
                    value={userData.firstName} onChange={(event)=>{updateUserData(event)}}/>
                {firstNameError && <div className="errorMsg">{firstNameError}</div>}
                </div>

                <div className='mb-3'>
                    <input name='lastName' type="text" className="form-control" placeholder="Enter Lastname" 
                    value={userData.lastName} onChange={(event)=>{updateUserData(event)}}/>
                {lastNameError && <div className="errorMsg">{lastNameError}</div>}
                </div>

                <div className='mb-3'>
                    <input name='password' type="password" className="form-control" placeholder="Enter Password" 
                    value={userData.password} onChange={(event)=>{updateUserData(event)}}/>
                {passwordError && <div className="errorMsg">{passwordError}</div>}
                </div>
            
                <button type="submit" class="btn btn-primary" onClick={saveData}>Save</button>
            
        </div>
    );
}

export default UserForm
