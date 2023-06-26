import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const CounterValue = () => {
  const count = useSelector((state: RootState) => state.counter);

  return (
    <>
      <h1>Counter: {count.value}</h1>
    </>
  );
};

export default CounterValue;
