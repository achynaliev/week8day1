import "./App.css";
import Counter from "./components/Counter";
import Receipts from "./components/Receipts";
import Login from "./components/Login";
import ContactsContextProvider from "./context/ContactContext";
import ContactAdd from "./components/AddContacts.jsx";
import ContactList from "./components/ContactList/ContactList";

function App() {
  return (
    <ContactsContextProvider>
      <div className="App">
        <Counter />
        <Receipts />
        <Login />
        <ContactAdd />
        <ContactList />
      </div>
    </ContactsContextProvider>
  );
}

export default App;
