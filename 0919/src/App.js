import "./App.css";
import Image from "./component/Image";
import Table from "./component/Table";
import FileUpload from "./component/FileUpload";
import MultiImage from "./component/MultiImage";

function App() {
  return (
    <div className="App">
      <MultiImage />
      <FileUpload />
      <Image />
      <Table />
    </div>
  );
}

export default App;
