import React from "react";
import { Button, ButtonGroup, FloatingLabel, Form } from "react-bootstrap";
import "../home.css";

const Languages = ({
  setReduxLanguages,
  value,
  setValue,
  suggestedTags,
  setSuggestedTags,
}) => {
  const handleRemove = (e) => {
    const removedTag = suggestedTags.filter((item) => item.option !== e.target.name);
    setSuggestedTags(removedTag);
    setReduxLanguages(removedTag);
  };

  const handleAddLanguage = () => {
    const newArr = [...suggestedTags]
    newArr.push(value)
    setSuggestedTags(newArr);
    setReduxLanguages(newArr)
    setValue({});
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddLanguage();
    }
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <br />
      <p>
        We have a few languages suggestions here. Feel free to add and remove as
        many or as little as you want.
      </p>
      <div style={{ width: 500 }} className="centeredItems">
        {suggestedTags.map((item, idx) => (
          <ButtonGroup key={idx} style={{ margin: 2 }}>
            <Button name={item}>{item.option}</Button>
            <Button name={item.option} onClick={handleRemove}>
              X
            </Button>
          </ButtonGroup>
        ))}
      </div>
      <div style={{ margin: 2 }} className="inputAndBtn">
      <FloatingLabel label="Language">
        <Form.Control type="text" placeholder="Language" />
      </FloatingLabel>
        <input
          style={{ border: "none", width: 300 }}
          placeholder="Language"
          type="text"
          value={value?.option || ""}
          onChange={(e) => setValue({id: suggestedTags.length, option: e.target.value})}
          onKeyUp={(e) => onKeyDown(e)}/>
        <Button size="sm" variant="outline-success" onClick={handleAddLanguage}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Languages;
