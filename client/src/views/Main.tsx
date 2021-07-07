import React from "react";

// component imports
import PersonForm from "../components/PersonForm";
import ProductForm from "../components/ProductForm";


const Main: React.FC = () => {
  return (
    <div>
      <PersonForm />
      <ProductForm/>
    </div>
  );
};

export default Main;
