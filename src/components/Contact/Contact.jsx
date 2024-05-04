import styles from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { deleteContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p className={styles.name}>
          <BsFillTelephoneFill /> {name}
        </p>
        <p className={styles.number}>
          <IoPerson />
          {number}
        </p>
      </div>
      <button className={styles.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
