import "./App.css";
import Image from "./component/imagePractice/Image";
import Table from "./component/Table";
import FileUpload from "./component/imagePractice/FileUpload";
import MultiImage from "./component/imagePractice/MultiImage";
import ClassComp from "./component/ClassComp";
import Person from "./component/Person";
import Layout from "./component/Layout";

function App() {
  return (
    <div className="App">
      <Layout />
      <Person />
      <Person />
      <Person />
      <ClassComp />
      <MultiImage />
      <FileUpload />
      <Image />
      <Table />
    </div>
  );
}

export default App;
