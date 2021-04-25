import React from "react";
import ContactForm from "./components/ContactForm/ContactFormContainer";
import Filter from "./components/Filter/FilterContainer";
import ContactList from "./components/ContactList/ContactListContainer";
import Loader from "./components/Loader/Loader";

import Notification from "./components/Notification/Notification";

export default function App({ isLoading, message }) {
  return (
    <>
      <h1 className="title">Phonebook</h1>

      <ContactForm />
      <Notification message={message} />
      <h2 className="title">Contacts</h2>
      <Filter />
      <ContactList />
      {isLoading && <Loader />}
    </>
  );
}
