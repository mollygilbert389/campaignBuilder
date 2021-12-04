import React from "react";
import { Button } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { QUERY_NAME_DATA } from "../../utils";
import "../home.css";

const GenerateBtn = ({ name, index, handleGenerate }) => {
  const { data, loading, error } = useQuery(QUERY_NAME_DATA);
  
  const generateName = () => {
    const firstNames = data?.names.filter((item) => item.type === "firstName");
    const lastNames = data?.names.filter((item) => item.type === "lastName");
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const finalName = `${firstName.option} ${lastName.option}`;
    handleGenerate(finalName, name, index);
  }

  if (loading || data === undefined) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>ERROR</div>;
  } else {
    return (
      <Button
        style={{ marginLeft: 5 }}
        variant="outline-primary"
        onClick={generateName}>
        Generate
      </Button>
    );
  }
};

export default GenerateBtn;
