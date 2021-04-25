import React from "react";

export default function ContactForm({ name, number, handleSubmit, handleChange }) {
  return (
    <>
      <div className="inner_form">
        <form action="submit" onSubmit={handleSubmit} className="form">
          <label htmlFor="name" className="label">
            Name
          </label>
          <input type="text" name="name" onChange={handleChange} value={name} className="input" />
          <label htmlFor="number" className="label">
            Number
          </label>
          <input type="tel" name="number" onChange={handleChange} value={number} className="input" />
          <input type="submit" value="Add Contact" className="btn_form" />
        </form>
      </div>
    </>
  );
}
