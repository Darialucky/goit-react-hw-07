import css from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { deleteContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className={css.container}>
      <div className={css.text}>
        <div className={css.name}>
          <BsFillTelephoneFill />
          <p className={css.par}>{contact.name}</p>
        </div>
        <div className={css.number}>
          <IoPerson />
          <p className={css.par}>{contact.number}</p>
        </div>
      </div>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
