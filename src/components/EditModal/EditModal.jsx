import React, { useState, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { contactContext } from "../../context/ContactContext";

import "./editmodal.css";

const EditModal = (props) => {
  const [firstname, setFname] = useState(props.contact.firstname);
  const [lastname, setLastname] = useState(props.contact.lastname);
  const [phone, setPhone] = useState(props.contact.phone);
  const [email, setEmail] = useState(props.contact.email);
  let { updateContact } = useContext(contactContext);

  function saveContact() {
    let cont = {
      firstname,
      lastname,
      phone,
      email,
    };

    updateContact(cont, props.id);
    props.handleClose();
  }

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit contact</Modal.Title>
      </Modal.Header>
      <Modal.Body className="Modalbody">
        <label>Firstname</label>
        <br />
        <input
          className="addFirstname"
          type="text"
          placeholder="add firstname"
          value={firstname}
          onChange={(e) => setFname(e.target.value)}
        ></input>
        <br />
        <label>Lastname</label>
        <br />
        <input
          className="addLastname"
          type="text"
          placeholder="add lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        ></input>
        <br />
        <label>Phone number</label>
        <br />
        <input
          className="addPhoneNumber"
          type="number"
          placeholder="add phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        ></input>
        <br />
        <label>Email address</label>
        <br />
        <input
          className="addEmail"
          type="email"
          placeholder="add email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => saveContact()}>
          Update Contact
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
