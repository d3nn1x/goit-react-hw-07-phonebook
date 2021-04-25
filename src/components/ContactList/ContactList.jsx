import React from "react";

import ContactListItem from "../ContactListItem/ContactListItemContainer";

export default function ContactList({ contacts }) {
  return (
    <>
      <ul className="contact_list">
        {contacts.map((el) => {
          return <ContactListItem contact={el} key={el.id} />;
        })}
      </ul>
    </>
  );
}
