import { useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

import { AllowedTypesForCover } from "types/api";

// eslint-disable-next-line
const UploadCover = ({ onSuccess }: any): JSX.Element => {
  const allowedTypesForCover = Object.values(AllowedTypesForCover).join();

  const [file, setFile] = useState([]);
  console.log(file);

  // eslint-disable-next-line
  const onInputChange = (e: any) => {
    setFile(e.target.files);
  };

  // eslint-disable-next-line
  const onSubmit = (e: any) => {
    e.preventDefault();

    const data = new FormData();

    console.log(data);
  };

  return (
    <form method="post" action="#" id="#" onSubmit={onSubmit}>
      <div className="form-group files">
        <label>Upload Your File </label>
        <input
          type="file"
          onChange={onInputChange}
          className="form-control"
          accept={allowedTypesForCover}
        />
      </div>

      <button>Submit</button>
    </form>
  );
};

export default UploadCover;
