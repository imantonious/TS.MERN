import React, { FormEvent, useState } from "react";
import axios, { AxiosResponse } from "axios";

// type imports
import { Person } from "../common/interfaces";
import { PersonFormProps } from "../common/interfaces";

const PersonForm: React.FC<PersonFormProps> = (props) => {
  //keep track of what is being typed via useState hook
  const { initialFirstName, initialLastName, onSubmitProp } = props;
  const [firstName, setFirstName] = useState<string>(initialFirstName);
  const [lastName, setLastName] = useState<string>(initialLastName);

  //handler when the form is submitted
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    // prevent default behavior of the submit
    e.preventDefault();
    onSubmitProp({ firstName, lastName });

    //make a post request to create a new person
    axios
      .post("http://localhost:8000/api/people", {
        firstName,
        lastName,
      })
      .then((res: AxiosResponse<Person>) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <p>
        <label>First Name</label>
        <br />
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </p>
      <p>
        <label>Last Name</label>
        <br />
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </p>
      <input type="submit" />
    </form>
  );
};

export default PersonForm;
