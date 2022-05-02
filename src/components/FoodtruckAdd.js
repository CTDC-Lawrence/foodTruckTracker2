import { useContext } from "react";
import withAuth from "./withAuth";

function FoodtruckAdd({ eventYear, insertRecord, loggedInUser }) {

  if (!loggedInUser || loggedInUser.length === 0) return null;

  return (
    <a href="#" className="addSes">
      <i
        onClick={(e) => {
          e.preventDefault();
          const name = window.prompt("Enter name:", "");
          const nameArray = name.split(" ");
          insertRecord({
            id: "99999",
            name: nameArray[0],
            bio: "Bio not entered yet",
            locations: [
              {
                id: "88888",
                title: `New location For ${nameArray[0]}`,
                event: {
                  name: "Main Ball Room",
                },
                eventYear,
              },
            ],
          });
        }}
      >
        +
      </i>
    </a>
  );
}

export default withAuth(FoodtruckAdd);
