import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './registration.css';
const Registration = () => {
    function savedata() {
        var name = document.getElementById("name").value;
        var phone = document.getElementById("phone").value;
        var password = document.getElementById("password").value;
        var email = document.getElementById("email").value;
        var affiliation = document.getElementById("affiliation").value;
        var role = document.getElementById("role").value;


        axios.post('http://localhost:8089/user', {
            "name": name,
            "phno": phone,
            "email": email,
            "password": password,
            "affiliation": affiliation,
            "role": role,

        }).then((response) => { window.alert(response.data); })
            .catch((error) => { window.alert(error); });
    }

    return (
        <div className="registration-wrapper">
            <div className="registration-panel">
                <h2 className="registration-title">Journal Management System</h2>
                <h3 className="registration-subtitle">User Registration</h3>


                {/* First Name and Last Name fields */}
                <div className="form-field half-width">
                    <label htmlFor="firstName">Full Name</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                    />

                </div>


                {/* Email field */}
                <div className="form-row">

                    <div className="form-field half-width">
                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                        />

                    </div>
                    <div className="form-field half-width">
                        <label htmlFor="lastName">Phone</label>
                        <input
                            id="phone"
                            type="text"
                            placeholder="Enter your phone number"
                        />

                    </div>
                </div>

                {/* Password and Confirm Password fields */}
                <div className="form-row">
                    <div className="form-field half-width">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Password"
                        />

                    </div>
                    <div className="form-field half-width">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirm password"
                        />

                    </div>
                </div>

                {/* Affiliation field */}
                <div className="form-field">
                    <label htmlFor="affiliation">Affiliation</label>
                    <input
                        id="affiliation"
                        type="text"
                        placeholder="e.g., University of Science"
                    />

                </div>

                {/* User Role Selection */}
                <div className="form-field">
                    <label htmlFor="role">Register As</label>
                    <select
                        id="role"
                    >
                        <option value="">Select your role</option>
                        <option value="Author">Author</option>
                        <option value="Reviewer">Reviewer</option>
                    </select>
                    <div className="error-text"></div>
                </div>

                {/* Privacy Policy Checkbox */}
                <div className="form-field checkbox-field">
                    <input
                        id="agreedToPolicy"
                        type="checkbox"
                    />
                    <label htmlFor="agreedToPolicy">I agree to the <a href="/privacy-policy" target="_blank">Privacy Policy</a></label>
                    <div className="error-text"></div>
                </div>

                <button className="btn-register" onClick={() => {
                    const name = document.getElementById("name").value;
                    const phone = document.getElementById("phone").value;
                    const password = document.getElementById("password").value;
                    const email = document.getElementById("email").value;
                    const affiliation = document.getElementById("affiliation").value;
                    const role = document.getElementById("role").value;
                    if (!name || !phone || !password || !email || !affiliation || !role) {
                        window.alert("Please fill all the fields");
                        return;
                    }
                    savedata();
                }}>Register
                </button>

            </div>
        </div>
    );
};

export default Registration;