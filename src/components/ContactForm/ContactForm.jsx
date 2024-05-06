import React from "react";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value;
    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form_container}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        className={css.form_field}
        required
      />
      <input
        type="number"
        name="number"
        placeholder="Number"
        className={css.form_field}
        required
      />
      <button type="submit" className={css.form_btn}>
        Add
      </button>
    </form>
  );
}
