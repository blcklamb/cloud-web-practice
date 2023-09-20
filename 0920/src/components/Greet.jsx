import { Message } from "./TextBox/Message";
import { Headline } from "./TextBox/Headline";
import { Description } from "./TextBox/Description";

const Greeting = ({ title, description }) => {
  return (
    <div>
      <Headline title={`${title} 세계에 오신 것을 환영합니다.`} />
      <Description description={description}></Description>
    </div>
  );
};

const Greet = () => {
  const REACT = {
    title: "리액트(React)",
    description:
      "React는 자바스크립트 라이브러리의 하나로서 사용자 인터페이스를 만들기 위해 사용",
  };
  const VUE = {
    title: "VueJS",
    description:
      "Vue는 자바스크립트 프레임워크로서 React처럼 사용자 인터페이스를 만들기 위해 사용. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.",
  };

  return (
    <>
      <Greeting {...REACT} />
      <Message title={VUE.title} description={VUE.description}></Message>
    </>
  );
};

export default Greet;
