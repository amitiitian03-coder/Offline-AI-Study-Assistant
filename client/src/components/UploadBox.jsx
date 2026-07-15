import { useState } from "react";

function UploadBox({ onGenerate }) {
  const [file, setFile] = useState(null);

  function handleGenerate() {
    if (!file) {
      alert("Please upload a PDF first.");
      return;
    }

    onGenerate(
      `Summary of "${file.name}"

This document discusses important concepts related to Artificial Intelligence, Machine Learning, Data Science and modern computing technologies.

Key Points:
• Artificial Intelligence
• Machine Learning
• Deep Learning
• Neural Networks
• Data Analysis`
    );
  }

  return (
    <div className="upload-box">
      <h2>Upload PDF</h2>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br /><br />

      <button className="btn" onClick={handleGenerate}>
        Generate Summary
      </button>
    </div>
  );
}

export default UploadBox;