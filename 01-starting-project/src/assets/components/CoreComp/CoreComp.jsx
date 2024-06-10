import "./CoreComp.css";

export default function CoreConceptComp(props) {
  return (
    <div className="container">
      <img
        src={props.headerImage}
        alt="Stylized atom"
        width={200}
        height={200}
      />
      <h1 id="TitleText">{props.headerText}</h1>
      <p id="HelloText">{props.textForHello}</p>
      <span id="parase">{props.parase}</span>
    </div>
  );
}
