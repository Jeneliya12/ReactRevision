import React, { useState } from "react";
function Test() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"}
        Text
      </button>
      {isVisible && <p>Text</p>}
    </>
  );
}
export default Test;
