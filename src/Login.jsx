import React from "react";

function Login() {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <form className="flex flex-col rounded-md bg-green-800 py-3 px-5 items-center gap-2" >
          <h1 className="font-bold text-xl text-white">Login</h1>
          <input type="text" placeholder="email" className="border-2 px-2 rounded-sm outline-none border-solid" name="email"/>
          <input type="text" placeholder="password" className="px-2 rounded-sm outline-none border-2 border-solid" name="password"/>
          <input className="text-white bg-blue-500 px-2 py-1 rounded-md cursor-pointer text-xl" type="submit" value="Login"/>
      </form>
    </div>
  );
}

export default Login;
