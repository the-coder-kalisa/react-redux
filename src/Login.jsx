import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./store";
import {useNavigate} from 'react-router-dom'
function Login() {
  const values = useSelector  (state  => state.auth);
  const dispactch = useDispatch();
  const navigate = useNavigate();
  const changeValues = (e) =>{
    e.target.name === "email" ? dispactch(actions.changeEmail(e.target.value)) : dispactch(actions.changePassword(e.target.value))
  }
  useEffect(()=>{
    console.log(values)
  },[values])
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <form onSubmit={() => (navigate('/home'))} className="flex flex-col rounded-md bg-green-800 py-3 px-5 items-center gap-2">
        <h1 className="font-bold text-xl text-white">Login</h1>
        <input
          type="text"
          placeholder="email"
          className="border-2 px-2 rounded-sm outline-none border-solid"
          name="email"
          onChange={changeValues}
        />
        <input
          type="text"
          placeholder="password"
          className="px-2 rounded-sm outline-none border-2 border-solid"
          onChange={changeValues}
          name="password"
        />
        <input
          className="text-white bg-blue-500 px-2 py-1 rounded-md cursor-pointer text-xl"
          type="submit"
          onChange={changeValues}
          value="Login"
        />
      </form>
    </div>
  );
}

export default Login;
