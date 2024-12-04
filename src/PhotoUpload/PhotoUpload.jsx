import { useState } from "react";
import axios from "axios";

const PhotoUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Set the selected file
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file); // Append the file with the key "file"

    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert(`File uploaded successfully: ${response.data.filePath}`);
    } catch (error) {
      alert(`Error: ${error.response?.data?.error || error.message}`);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Upload Photo</h2>
      <input
        type="file"
        onChange={handleFileChange}
        style={{ marginBottom: "10px" }}
      />
      <br />
      <button onClick={handleUpload} style={{ marginTop: "10px" }}>
        Upload
      </button>
    </div>
  );
};

export default PhotoUpload;
