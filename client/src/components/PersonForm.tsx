import React, { useState } from "react";
import axios from "axios";

const PersonForm: React.FC = () => {
  //keep track of what is being typed via useState hook
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  //handler when the form is submitted
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) : void => {
    // prevent default behavior of the submit
    e.preventDefault();

    //make a post request to create a new person
    axios
      .post("http://localhost:8000/api/people", {
        firstName,
        lastName,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <p>
        <label>First Name</label>
        <br />
        <input type="text" onChange={(e) => setFirstName(e.target.value)} />
      </p>
      <p>
        <label>Last Name</label>
        <br />
        <input type="text" onChange={(e) => setLastName(e.target.value)} />
      </p>
      <input type="submit" />
    </form>
  );
};

export default PersonForm;
