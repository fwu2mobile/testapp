import React from "react";
import Card from "./Card";
import contacts from "../contacts"
import NavBar from "./NavBar";

function CreateCard(contact) {

  return <Card 
    key = {contact.id}
    name = {contact.name}
    img = {contact.imgURL }
    tel = {contact.phone}
    email = {contact.email}
  />
}

function App() {

  return (
    <div>
      <h1 className="heading">蛋糕</h1>
      
      <NavBar />

      {contacts.map(CreateCard)}
      
      

    </div>
  );
}

export default App;
