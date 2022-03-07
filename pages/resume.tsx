import React from "react";

const resume = () => {
  if (typeof window === "undefined") return <p>loading...</p>;
  return (
    <iframe
      src="https://drive.google.com/file/d/1TdARTQPqUFXAXzvlao-MXkrxppz-AX61/preview"
      width="80%"
      height={0.8 * window.innerHeight}
      allow="autoplay"
    ></iframe>
  );
};

export default resume;
