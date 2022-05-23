import React from "react";

function Content(props) {
  var a = 10;
  function ab() {
    return "asdf";
  }

  var arr = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <p>{a}</p>
      <p>{a + 10}</p>

      <p>{ab()}</p>
      {arr.map((item) => {
        return <p>{item}</p>;
      })}

      <p>{props.content}</p>
      <p>{props.name}</p>
    </div>
  );
}

export default Content;
