import "./App.css";
import SCSSComp from "./component/scssPractice/SCSSComp";
import ModuleComp from "./component/modulePractice/ModuleComp";
import StyleSheetComp from "./component/styleSheetPractice/StyleSheetComp";
import StyledComp from "./component/styledCompPractice/StyledComp";

function App() {
  return (
    <>
      <SCSSComp />
      <ModuleComp />
      <StyledComp />
      <StyleSheetComp />
      <div className="main-div">App 컴포넌트 컨텐츠</div>
    </>
  );
}

export default App;
