import { useHistory } from "react-router-dom";
import NewMeetupForms from "../components/meetups/NewMeetupForms";

function NewMeetUpsPage() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch("https://react-dummydb-default-rtdb.firebaseio.com//meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetups</h1>
      <NewMeetupForms onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetUpsPage;
