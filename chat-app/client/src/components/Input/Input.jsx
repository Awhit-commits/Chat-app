import React from "react";
import "./Input.css";

const Input = ({message,setMessage,sendMessage}) => {
  return (
    <form className="form" action="">
      <input
        type="text"
        name=""
        id=""
        className="input"
        placeholder="Type a message"
        onChange={event => setMessage(event.target.value)}
        onKeyPress={event =>
          event.key === "Enter" ? sendMessage(event) : null
        }
        value = {message}
      />
      <button className = "sendButton" onClick = {(event) => sendMessage(event)}>Send</button>
    </form>
  );
};
export default Input;


