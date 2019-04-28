import React from "react";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
    </header>
  )
}

const headerStyle = {
  background: "#696969",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
}


export default Header;