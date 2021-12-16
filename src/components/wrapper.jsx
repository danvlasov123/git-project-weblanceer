import React from "react";

const Wrapper = ({ children }) => {
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {children}
    </main>
  );
};
export default Wrapper;
