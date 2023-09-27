import "./App.css";

import Header from "./component/header/Header";
import Main from "./component/Main/Main";
import styles from "./App.module.css";
import styled from "styled-components";
import Button from "./component/Button";

function App() {
  return (
    <>
      <Header />
      <Main />
      <div className={styles["container"]}>
        <h1 className={styles.heading}>React 프로그래밍 Module css 실습 중</h1>
      </div>
      <Container>
        <PComp>스타일드 컴포넌트</PComp>
        <Button>스타일드 버튼</Button>
      </Container>
      <div className="main-div">App 컴포넌트 컨텐츠</div>
    </>
  );
}

export default App;

const Container = styled.div`
  width: 95%;
  margin: 0 auto;
`;

const PComp = styled.p`
  color: white;
`;
