import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// type imports
import { Person, PersonListProps } from "../common/interfaces";

const PersonList: React.FC<PersonListProps> = ({ people, removeFromDom }) => {
  const deletePerson = (id: string) => {
    axios.delete("http://localhost:8000/api/people/" + id).then(() => {
      removeFromDom(id);
    });
  };
  return (
    <Fragment>
      <h2>All People:</h2>
      {people.map((person: Person, idx: number) => {
        return (
          <p key={idx}>
            <Link to={"/people/" + person._id}>
              {person.lastName}, {person.firstName}
            </Link>
            | <Link to={"/people/" + person._id + "/edit"}>Edit</Link>|
            <button
              onClick={() => {
                deletePerson(person._id!);
              }}
            >
              Delete
            </button>
          </p>
        );
      })}
    </Fragment>
  );
};

export default PersonList;
