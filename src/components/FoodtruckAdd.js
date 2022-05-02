import { useContext } from "react";
import withAuth from "./withAuth";

function FoodtruckAdd({ eventYear, insertRecord, loggedInUser }) {

  if (!loggedInUser || loggedInUser.length === 0) return null;

  return (
    <a href="#" className="addSes">
      <i
        onClick={(e) => {
          e.preventDefault();
          const firstLast = window.prompt("Enter first and last name:", "");
          const firstLastArray = firstLast.split(" ");
          insertRecord({
            id: "99999",
            first: firstLastArray[0],
            last: firstLastArray[1], 
            bio: "Bio not entered yet",
            locations: [
              {
                id: "88888",
                title: `New location For ${firstLastArray[0]}`,
                room: {
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
