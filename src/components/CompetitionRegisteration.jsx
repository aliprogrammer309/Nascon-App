import { Button } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CompetitionRegisteration = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const competitionTitle = location.state?.competitionTitle;
  const numberOfPlayers = location.state?.numberOfPlayers;

  const tags = [];

  for (let i = 0; i < numberOfPlayers; i++) {
    tags.push(
      <div
        key={i}
        className="input-cell"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Player Name"
          style={{ width: "150px" }}
          // onChange={(e) => {
          //   setName(e.target.value);
          // }}
        />
        <input type="text" placeholder="CNIC" style={{ width: "350px" }} />
      </div>
    );
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("testing");
    // console.log(first);
    // console.log(name, email, phone);
    // try {
    //   await addDoc(collection(db, "EventParticipants"), {
    //     name: name,
    //     email: email,
    //     phone: phone,
    //     cnic: cnic,
    //     eventName: eventTitle,
    //     status: "pending",
    //   });
    //   navigate("/");
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <>
      <form className="event-registeration-container" onSubmit={handleSubmit}>
        <h2>Register Your Team For {competitionTitle}</h2>
        <div className="input-cell">
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Team Name"
            // onChange={(e) => {
            //   setName(e.target.value);
            // }}
          />
        </div>
        {tags}
        <Button
          variant="outlined"
          type="submit"
          size="medium"
          color="secondary"
        >
          Register Now
        </Button>
      </form>
    </>
  );
};

export default CompetitionRegisteration;
