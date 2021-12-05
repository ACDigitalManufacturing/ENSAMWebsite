import { useState } from "react";
import { AllowedTypesForCover } from "types/api";
import axios from "axios";
import { toast } from "react-toastify";

// eslint-disable-next-line
const UploadCover = ({ onSuccess }: any): JSX.Element => {
  const allowedTypesForCover = Object.values(AllowedTypesForCover).join();

  const BACKEND_URI: string =
    process.env.REACT_APP_BACKEND || "http://localhost:5000";
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
    axios
      .put(`${BACKEND_URI}`, data)
      .then((response) => {
        toast.success("Image uploaded successfully");
        onSuccess(response.data);
      })
      // eslint-disable-next-line
      .catch((error) => {
        toast.error("Cannot upload this file.");
      });
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Upload Your File </label>
        <input
          type="file"
          onChange={onInputChange}
          accept={allowedTypesForCover}
        />
      </div>

      <button>Submit</button>
    </form>
  );
};

export default UploadCover;
