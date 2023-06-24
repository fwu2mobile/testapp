import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

import {BrowserRouter as Router, Switch, Route, Routes}
 from "react-router-dom"
import Layout from "./Layout"

ReactDOM.render(
<div><Router>
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route  index element = {<App.Home />}/>
            <Route  path ="menu" element = {<App.Menu />}/>
            <Route path="about" element = {<App.About />}/>
            
        </Route>
        
    </Routes>
</Router>

<h1>h1 section</h1>
</div>



,    document.getElementById("root"));

//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.
