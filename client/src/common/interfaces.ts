export interface Person {
  firstName: string;
  lastName: string;
}

export interface PersonListProps {
  people: Person[];
  removeFromDom: (personId: string) => void;
}

export interface PersonFormProps {
  initialFirstName: string,
  initialLastName: string,
  onSubmitProp: (_: any) => void;
}
export interface Person {
  _id?: string;
}
