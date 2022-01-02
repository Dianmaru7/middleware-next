import React from "react";

function Login() {
  return (
    <div>
      <button
        onClick={() => {
          document.cookie = "token=123123; path=/";
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default Login;
