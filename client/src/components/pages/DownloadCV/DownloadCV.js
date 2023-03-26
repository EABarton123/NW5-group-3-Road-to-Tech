import React from "react";

const DownloadCV = ({ cvUrl }) => {
  const handleDownload = () => {
    window.open(cvUrl, "_blank");
  };

  return (
    <button onClick={handleDownload}>
      Download CV
    </button>
  );
};

export default DownloadCV;