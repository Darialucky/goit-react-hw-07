import React from "react";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContacts } from "../../redux/contactsOps";

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value;
    dispatch(addContacts({ name, number }));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.formContainer}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        className={css.formField}
        required
      />
      <input
        type="number"
        name="number"
        placeholder="Number"
        className={css.formField}
        required
      />
      <button type="submit" className={css.formBtn}>
        Add
      </button>
    </form>
  );
}
