import styled from "styled-components";
import Button from "./Button";

const StyledComp = () => {
  return (
    <Container>
      <PComp>스타일드 컴포넌트</PComp>
      <Button bg="orange">스타일드 버튼</Button>
      <Button bg="indigo">스타일드 버튼</Button>
    </Container>
  );
};

export default StyledComp;

const Container = styled.div`
  width: 95%;
  margin: 0 auto;
`;

const PComp = styled.p`
  color: white;
`;
