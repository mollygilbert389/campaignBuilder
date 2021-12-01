import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
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
    console.log("value", value)
    console.log("suggested tags", suggestedTags)
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
      <div className="tagsArea centeredItems">
        {suggestedTags.map((item, idx) => (
          <ButtonGroup key={idx} className="factionButtons">
            <Button name={item}>{item.option}</Button>
            <Button name={item.option} onClick={handleRemove}>
              X
            </Button>
          </ButtonGroup>
        ))}
      </div>
      <div className="inputAndBtn factionButtons">
        <input
          className="factionInput"
          placeholder="Language"
          type="text"
          value={value.option}
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
