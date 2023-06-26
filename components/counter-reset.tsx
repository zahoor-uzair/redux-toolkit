import React from "react";
import { useDispatch } from "react-redux";
import { reset } from "@/reducers/counter";
import { Button } from "@mui/material";
const CounterReset = () => {
  const dispatch = useDispatch();
  const handleReset = () => {
    dispatch(reset());
  };
  return (
    <>
      <Button variant="outlined" sx={{ margin: 2 }} onClick={handleReset}>
        Reset
      </Button>
    </>
  );
};

export default CounterReset;
