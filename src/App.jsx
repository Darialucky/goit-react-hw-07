import ContactList from "./components/ContactList/ContactList";
import { useSelector } from "react-redux";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { fetchContacts } from "./redux/contactsOps";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import "./App.css";
import Loader from "./components/Loader/loader";
import { selectError, selectIsLoading } from "./redux/selectors";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {error && <b>❌ Something went wrong</b>}
      <ContactList />
    </div>
  );
}

export default App;
