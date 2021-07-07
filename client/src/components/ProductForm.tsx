import React, { useState } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

const ProductForm: React.FC = () => {
  //keep track of what is being typed via useState hook
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState<string>("");

  //handler when the form is submitted
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    // prevent default behavior of the submit
    e.preventDefault();

    //make a post request to create a new product
    axios
      .post("http://localhost:8000/api/products", {
        title: title,
        price: price,
        description: description,
      })
      .then((res: AxiosResponse<any>) => console.log(res))
      .catch((err: AxiosError) => console.log(err));
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <p>
        <label>Title</label>
        <br />
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
      </p>
      <p>
        <label>Description</label>
        <br />
        <input
          type="number"
          onChange={(e) => setPrice(Number(e.target.value))}
        />
      </p>
      <p>
        <label>Description</label>
        <br />
        <input type="text" onChange={(e) => setDescription(e.target.value)} />
      </p>
      <input type="submit" />
    </form>
  );
};

export default ProductForm;
