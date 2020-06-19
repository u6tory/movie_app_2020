import React from "react";
function Food(props) {
  return <h3> I like {props.fav}</h3>; // 혹은  props대신 {fav}
}

function App() {
  return (
    <div className="App">
      <h1>hello!</h1>
      <Food fav="kimchi" />
      <Food fav="삼겹살" />
      <Food fav="쭈꾸미" />
    </div>
  );
}

export default App;
