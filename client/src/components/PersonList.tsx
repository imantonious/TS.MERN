import React, { Fragment } from "react";
import { Link } from "react-router-dom";

// type imports
import { Person, PersonListProps } from "../common/interfaces";

const PersonList: React.FC<PersonListProps> = ({ people }) => {
  return (
    <>
      {people.map((person: Person, idx: number) => {
        return (
          <Fragment key={idx}>
            <Link to={"/people/" + person._id}>
              {person.lastName}, {person.firstName}
            </Link>
            <br />
          </Fragment>
        );
      })}
    </>
  );
};

export default PersonList;
