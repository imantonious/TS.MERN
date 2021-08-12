import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios, { AxiosResponse } from "axios";

// type imports
import { Person } from "../common/interfaces";

// css imports
import '../styles/detail.css';

const Detail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [person, setPerson] = useState<Person>({
    firstName: "",
    lastName: "",
  });

  const fetchPersonData = (id: string): void => {
    axios
      .get("http://localhost:8000/api/people/" + id)
      .then((res: AxiosResponse<Person>) => {
        console.log(res);
        setPerson({
          ...res.data,
        });
      });
  };

  useEffect(() => {
    fetchPersonData(id);
  }, [id]);

  return (
    <div>
      <a className="top-corner" href="/people/">go back</a>
      <p>First Name: {person.firstName}</p>
      <p>Last Name: {person.lastName}</p>
    </div>
  );
};

export default Detail;
