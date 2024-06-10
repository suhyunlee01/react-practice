import Button1 from "./Button";

export default function TabButtons(props) {
  let { handleClick, selectedButton } = props;

  return (
    <div className="button-container">
      <Button1
        className={selectedButton === "jsx" ? "activated" : "deactivated"}
        onclick={() => handleClick("jsx")}
        content={"JSX"}
      />
      <Button1
        className={selectedButton === "props" ? "activated" : "deactivated"}
        onclick={() => handleClick("props")}
        content={"PROPS"}
      />
      <Button1
        className={selectedButton === "state" ? "activated" : "deactivated"}
        onclick={() => handleClick("state")}
        content={"STATE"}
      />
    </div>
  );
}
