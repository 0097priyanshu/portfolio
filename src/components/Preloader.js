import React from "react";
import { TailSpin } from "react-loader-spinner";

function Preloader({ load }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: load ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <TailSpin
        visible={true}
        height="100"
        width="100"
        color="#0d6efd"
        ariaLabel="tail-spin-loading"
      />
    </div>
  );
}

export default Preloader;