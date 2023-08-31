import React from "react";
import Title from "../components/Title";
import { useState } from "react";
export default function XsignatureApp() {
  const [name, setName] = useState("")
  const [date, setDate] = useState("")
  const handleNameChange = (e)=>{
      // console.log(e.target.value);
      setName((prev)=>({...prev,[e.target.id]: e.target.value}))
  }
  const handleDate= (e)=>{
      // console.log(e.target.value);
      setDate((prev)=>({...prev,[e.target.id]: e.target.value}))
  }
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
  return (
    <div className="container text-center">
      <Title text={name} classes={"title"} />
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
          <input type="text" style={inputStyle} value={name} onChange={handleNameChange}/>
        </fieldset>
      </section>
    </div>
  );
}
