import React from "react";
import { useDispatch } from "react-redux";
import { reset } from "@/reducers/counter";
const CounterReset = () => {
  const dispatch = useDispatch();
  const handleReset = () => {
    // console.log("reset");
    dispatch(reset());
  };
  return (
    <>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default CounterReset;
