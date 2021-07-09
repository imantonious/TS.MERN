import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

// component imports
import PersonForm from "../components/PersonForm";
import PersonList from "../components/PersonList";

// type imports
import { Person } from "../common/interfaces";

const Main: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  const fetchPeopleData = (): void => {
    axios
      .get("http://localhost:8000/api/people")
      .then((res: AxiosResponse<Person[]>) => {
        setPeople(res.data);
        setLoaded(true);
      });
  };

  useEffect(() => {
    fetchPeopleData();
  }, []);

  return (
    <div>
      <PersonForm />
      <hr />
      {loaded && <PersonList people={people} />}
    </div>
  );
};

export default Main;
