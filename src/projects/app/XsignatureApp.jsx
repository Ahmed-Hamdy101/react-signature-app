import React from "react";
import Title from "../components/Title";
// import { useState } from "react";
export default function XsignatureApp() {
  const inputStyle = {
    border: "none",
    borderBottom: "2px solid",
    outline: "none",
    padding: "0.35rem 0 ",
    background: "transparent",
    textAlign: "center",
    fontFamily: "track",
    fontSize: "16px",
  };
  // const [state, setstate] = useState(initialState)
  return (
    <div className="container text-center">
      <Title text={"Name"} classes={"title"} />
      <Title text={"Date"} classes={"main-title mb-4"} />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam atque
        dicta autem, numquam, quas error itaque cupiditate iure tenetur aliquid
        voluptates excepturi nobis natus accusantium voluptatem recusandae ex
        quisquam vel?344
      </p>
      <section>
        <fieldset
          className="d-flex"
          style={{
            padding: "2rem",
            margin: "1rem",
            borderRadius: "6px",
            justifyContent: "space-around",
            position: "relative",
            top: "46px",
          }}
        > <label htmlFor="">Date</label>
          <input type="date" style={inputStyle} name="username" />
          <label htmlFor=""> Name</label>
          <input type="text" style={inputStyle} />
        </fieldset>
      </section>
    </div>
  );
}
