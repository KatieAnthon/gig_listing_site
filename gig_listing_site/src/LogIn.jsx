import { useState } from "react";
import React from "react";



const LogIn = () => {
    // sets the initial state to nothing
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")

    // when a submission to the form is 
    //entered this function is triggered 
    // .target retrieves the element that triggered 
    // the event 
    // the value poroperty on the HTMLElement shows the
    // new value 
    const handleChange = (event) => {
        const inputEl = event.target;
        setUsername(inputEl.value);
    };

    const ValueCheck = (event) => {
        const inputElement = event.target;
        console.log(inputElement.value)
        setPassword(inputElement.value)

    };

    const handleLogin = (event) => {
        console.log(event.value)
        event.preventDefault();
        console.log("Form submitted")

        if (password.length < 8){
            setPasswordError("Password is too short!")
            return;
        }
        
        setPasswordError("");
    }

    //handle submit attaches to the form and will execute
    // once the submit button is pressed
    const handleSubmit = (event) => {
        // prevent default prevents default browser
        // - i.e. prevents GET instead of POST request 
        event.preventDefault();
        console.log("Form submitted")

        if (password.length < 8){
            setPasswordError("Password is too short!")
            return;
        }
        
        setPasswordError("");
    
        const submissionType = event.target.name
        
        if (submissionType === "submit_password") {
            console.log("password working")
            fetch("https://echo.zuplo.io/", {
                method: "POST",
                body: JSON.stringify({ password: password})
            });
            
            setPassword("");

        } else if (submissionType === "submit_username") {
            fetch("https://echo.zuplo.io/", {
            method: "POST",
            //we cant send JS objects in a HTTP request 
            // directly, so it needs to be converted to a string
            body: JSON.stringify({ username: username}),
        })


        }

        
    }
    return (
        <>
        <h2> Log In</h2>
    <form>
        <label>
            Enter your username:
            <input 
            type="username" 
            name="username" 
            value={username}
            // on change is the event handler
            onChange={(e) => setUsername(e.target.value)}
            />
        </label>
        <label>
            Submit
            <input type="submit" name="submit" />
            </label>
            <label>
                Enter your Password:
            <input 
            type ="password"
            name="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            </label>
            {passwordError && <p style={{ color: "red"}}> {passwordError}</p>}
            <label>
                <button onClick={handleLogin}>Login</button >
            </label>
    </form>
    <button> Don't have an account? Register here.</button>
    </>
    );
};

export default LogIn;