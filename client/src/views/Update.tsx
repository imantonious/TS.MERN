import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios, { AxiosResponse } from "axios";

// component imports
import PersonForm from "../components/PersonForm";

// types imports
import { Person } from "../common/interfaces";

const Update: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [loaded, setLoaded] = useState<boolean>(false);

  const fetchPersonData = (id: string): void => {
    axios
      .get("http://localhost:8000/api/people/" + id)
      .then((res: AxiosResponse<Person>) => {
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setLoaded(true);
      });
  };

  useEffect(() => {
    fetchPersonData(id);
  }, [id]);

  const updatePerson = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(e);

    axios
      .put("http://localhost:8000/api/people/" + id, {
        firstName,
        lastName,
      })
      .then((res: AxiosResponse<Person>) => console.log(res));
  };

  return (
    <div>
      <h1>Update a Person</h1>
      {loaded && (
        <PersonForm
          onSubmitProp={updatePerson}
          initialFirstName={firstName}
          initialLastName={lastName}
        />
      )}
      {/* <form onSubmit={updatePerson}>
        <p>
          <label>First Name</label>
          <br />
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </p>
        <p>
          <label>Last Name</label>
          <br />
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </p>
        <input type="submit" />
      </form> */}
    </div>
  );
};

export default Update;
