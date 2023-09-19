import React from "react";
import { useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState();
  const handleChange = (e) => {
    if (e.target.files) {
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  };
  return (
    <div style={{ marginBottom: "3rem" }}>
      <h3> 이미지 업로드하기 전 미리보기</h3>
      <input type="file" onChange={handleChange} />
      <br />
      {file && <img width="50%" src={file} alt="uploadedImage" />}
    </div>
  );
};

export default FileUpload;
