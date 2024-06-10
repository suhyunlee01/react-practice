import "./Button.css";

export default function Button1(props) {
  let { content, className, onclick } = props;

  return (
    <>
      <button className={className} onClick={onclick}>
        {content}
      </button>
    </>
  );
}
