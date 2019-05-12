import React from "react";

function Joke(props) {
  return (
    <div>
      <h3 style={{display: !props.question && "none"}}>Question: {props.question}</h3>
      <h3>Answer: {props.punchLine}</h3>
    </div>

  )
}

export default Joke;
