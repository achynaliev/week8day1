import React, { useContext, useState } from "react";
import "./contactAdd.css";
import { contactContext } from "../context/ContactContext";
// const Context = createContext([],
//    addContact: (contact) => );

const ContactAdd = (props) => {
  const [firstname, setFname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  let { createContact } = useContext(contactContext);

  function saveContact() {
    let cont = {
      firstname,
      lastname,
      phone,
      email,
    };

    // props.addContact(cont);
    createContact(cont);
    setFname("");
    setLastname("");
    setPhone("");
    setEmail("");
  }

  return (
    <>
      <div className="addCardSpace">
        <div className="addCard">
          <label>Firstname</label>
          <input
            className="addFirstname"
            type="text"
            placeholder="add firstname"
            value={firstname}
            onChange={(e) => setFname(e.target.value)}
          ></input>
          <label>Lastname</label>
          <input
            className="addLastname"
            type="text"
            placeholder="add lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          ></input>
          <label>Phone number</label>
          <input
            className="addPhoneNumber"
            type="number"
            placeholder="add phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></input>
          <label>Email address</label>
          <input
            className="addEmail"
            type="email"
            placeholder="add email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br />
          <button
            className="btn btn-success addBtn"
            onClick={() => saveContact()}
          >
            Add Contact
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactAdd;
