import TabElements from "./TabElements";
import Button1 from "./Button";
import { useState } from "react";
import { BUTTON_DESCRIPTION } from "../data";

export default function Tab() {
  const [selectedButton, setSelectedButton] = useState("components");

  let tabContents = <div id="tab-content">Click A Button!</div>;

  function handleClick(nameOfTheSelectedBtns) {
    setSelectedButton(nameOfTheSelectedBtns);
  }

  if (selectedButton != "components") {
    tabContents = (
      <div id="tab-content">
        <h2>{BUTTON_DESCRIPTION[selectedButton].title}</h2>
        <span>{BUTTON_DESCRIPTION[selectedButton].description}</span>
        <pre>
          <code>{BUTTON_DESCRIPTION[selectedButton].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <>
      <TabElements
        ButtonsContainer="div"
        buttons={
          <>
            <Button1
              className={selectedButton === "jsx" ? "activated" : "deactivated"}
              onclick={() => handleClick("jsx")}
              content={"JSX"}
            />
            <Button1
              className={
                selectedButton === "props" ? "activated" : "deactivated"
              }
              onclick={() => handleClick("props")}
              content={"PROPS"}
            />
            <Button1
              className={
                selectedButton === "state" ? "activated" : "deactivated"
              }
              onclick={() => handleClick("state")}
              content={"STATE"}
            />
          </>
        }
        tabContents={tabContents}
      />
    </>
  );
}
