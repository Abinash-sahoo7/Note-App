import React from "react";

function Header({setSwitchMode}) {
  return (
    <div className="Header">
      <h1>Note App</h1>

      <label className="switch" >
        <input type="checkbox"
          onClick={() => setSwitchMode((previousSatet) => !previousSatet)}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
}

export default Header;
