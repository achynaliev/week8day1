import React, { useReducer } from "react";
import axios from "axios";
export const contactContext = React.createContext();
const API = "http://localhost:8000/contacts/";

const INIT_STATE = {
  contacts: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CONTACTS":
      return { ...state, contacts: action.payload };
    default:
      return state;
  }
};

const ContactsContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getAllContacts = async () => {
    try {
      let { data } = await axios(API);
      dispatch({
        type: "ADD_CONTACTS",
        payload: data,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const createContact = async (contact) => {
    try {
      await axios.post(API, contact);
      getAllContacts();
    } catch (e) {
      console.log(e);
    }
  };

  const updateContact = async (contact, id) => {
    try {
      await axios.put(API + id, contact);
      getAllContacts();
    } catch (e) {
      console.log(e);
    }
  };

  const deleteContact = async (id) => {
    try {
      await axios.delete(API + id);
      getAllContacts();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <contactContext.Provider
      value={{
        getAllContacts,
        createContact,
        updateContact,
        deleteContact,
        contacts: state.contacts,
      }}
    >
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactsContextProvider;
