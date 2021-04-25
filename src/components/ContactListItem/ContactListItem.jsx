import React from "react";

const ContactListItem = ({ contact, removeContact }) => {
  return (
    <li className="contact_list_item">
      {contact.name}:
      <div>
        {" "}
        <span className="contact_name">{contact.number}</span>
        <button type="button" onClick={() => removeContact(contact.id)} className="btn">
          X
        </button>
      </div>
    </li>
  );
};

export default ContactListItem;
