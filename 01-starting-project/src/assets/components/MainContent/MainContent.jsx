import { CORE_CONCEPTS } from "../../data.js";
import CoreConceptComp from "../CoreComp/CoreComp.jsx";
import "./MainContent.css";

export default function MainContent() {
  const headers = CORE_CONCEPTS.map((concept, index) => (
    <div className="container" key={index}>
      <CoreConceptComp
        headerText={concept.title}
        textForHello={concept.textForHello}
        headerImage={concept.image}
        parase={concept.description}
      />
    </div>
  ));

  return (
    <>
      <h1 id="mainH1">React Practice Project</h1>
      <div className="header-container">{headers}</div>
    </>
  );
}
