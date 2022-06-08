import React from "react";

function Login() {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <form className="flex flex-col gap-2" >
          <h1>Login</h1>
          <input type="text" name="email"/>
          <input type="text" name="password"/>
          <input type="submit" />
      </form>
    </div>
  );
}

export default Login;
