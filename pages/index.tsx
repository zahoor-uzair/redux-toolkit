import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, setStep } from "../reducers/counter";
import { RootState } from "../store";
import CounterValue from "@/components/counter-value";
import Link from "next/link";
import { Button, TextField, Typography, Box, Paper } from "@mui/material";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  const handleStepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newStep = parseInt(event.target.value);
    dispatch(setStep(newStep));
  };
  return (
    <>
      <Head>
        <title>Redux Toolkit</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <Paper
          elevation={3}
          sx={{ padding: 3, marginY: 6, maxWidth: 550, marginX: "auto" }}
        >
          <Box>
            <Link href={"/data"}>
              <Button sx={{ margin: 2 }} variant="contained">
                Data
              </Button>
            </Link>
            <Typography variant="h4">Hello from redux toolkit</Typography>
            <Button
              sx={{ margin: 2 }}
              variant="contained"
              onClick={() => dispatch(increment())}
            >
              +
            </Button>
            <Button
              sx={{ margin: 2 }}
              variant="contained"
              onClick={() => dispatch(decrement())}
            >
              -
            </Button>
            <TextField
              type="number"
              value={count.step}
              onChange={handleStepChange}
              size="small"
              sx={{ margin: 2 }}
            />
            <CounterValue />
          </Box>
        </Paper>
      </main>
    </>
  );
}
