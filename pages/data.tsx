import React from "react";
import CounterReset from "@/components/counter-reset";
import Link from "next/link";
import { Button } from "@mui/material";
import CounterValue from "@/components/counter-value";
const Data = () => {
  return (
    <>
      <Link href={"/"}>
        <Button variant="contained" sx={{ margin: 2 }}>
          Back
        </Button>
      </Link>
      <CounterValue />
      <CounterReset />
    </>
  );
};

export default Data;
