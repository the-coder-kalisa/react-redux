import React, { useState, useEffect, useCallback } from "react";

function Thecoder() {
  const [unmout, setUnmout] = useState(false);
  const [todo, setTodo] = useState(null);
  const [id, setId] = useState(1)
  const great = useCallback(() => {
    console.log("hi");
    setTodo({ title: "hello" });
    setUnmout(true)
  }, [id]);
  useEffect(() => {
    great();
    return () => {
      setTodo(null);
      setUnmout(false)
    };
  }, [great]);
  const text = unmout ? "unmout" : "mount"
  return (
    <div>
      {/* <h1>{todo?.title}</h1> */}
      <input value={id} type="number" onChange={(e) => setId(e.target.value)}/>
      <div onClick={() => setUnmout(!unmout)}>mount</div>
      <button disabled={!unmout}>{text}</button>
    </div>
  );
}

export default Thecoder;
