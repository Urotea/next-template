import type { NextPage } from "next";
import { Box, Button, TextField } from "@mui/material";
import { ChangeEvent, useCallback, useState } from "react";
import helloRequest from "@/client/helloRequest";
import searchRequest from "@/client/searchRequest";

const Home: NextPage = () => {
  const [searchWord, setSearchWord] = useState("");

  const onClickHello = useCallback(async () => {
    const res = await helloRequest();
    console.log(res);
  }, []);

  const onClickSearch = useCallback(async () => {
    const res = await searchRequest(searchWord);
    console.log(res);
  }, [searchWord]);

  const onChangeSearchWord = useCallback((event: ChangeEvent<HTMLInputElement>) => setSearchWord(event.target.value), []);

  return (
    <Box textAlign="center" mt="10px">
      <Box>
        <Button variant="contained" onClick={onClickHello}>Hello World</Button>
      </Box>
      <Box mt="10px" alignItems="center" justifyContent="center" display="flex">
        <TextField label="Search" size="small" value={searchWord} onChange={onChangeSearchWord} />
        <Button variant="outlined" onClick={onClickSearch}>Search</Button>
      </Box>
    </Box>
  );
};

export default Home;
