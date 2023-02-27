import { useState, useEffect } from "react";
import MeetupLIst from "../components/meetups/Meetuplist";

function AllMeetUpsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetUp, setLoadedMeetup] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://react-dummydb-default-rtdb.firebaseio.com//meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetup(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupLIst meetups={loadedMeetUp} />
    </section>
  );
}

export default AllMeetUpsPage;
