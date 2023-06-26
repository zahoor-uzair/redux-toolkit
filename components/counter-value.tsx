import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Typography } from "@mui/material";

const CounterValue = () => {
  const count = useSelector((state: RootState) => state.counter);

  return (
    <>
      <Typography variant="h4">Counter: {count.value}</Typography>
    </>
  );
};

export default CounterValue;
