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

  const removeFromDom = (personId: string): void => {
    setPeople(people.filter((person: Person) => person._id !== personId));
  };

  const createPerson = (person: any) => {
    axios.post("http://localhost:8000/api/person", person).then((res: AxiosResponse<any>) => {
      setPeople([...people, res.data]);
    });
  };

  return (
    <div>
      <PersonForm
        onSubmitProp={createPerson}
        initialFirstName=""
        initialLastName=""
      />
      <hr />
      {loaded && <PersonList people={people} removeFromDom={removeFromDom} />}
    </div>
  );
};

export default Main;
