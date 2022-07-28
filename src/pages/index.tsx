import type { NextPage } from "next";
import { Box, TextField } from "@mui/material";
import useLibraries from "@/hooks/useLibraries";

const Home: NextPage = () => {
  const { data } = useLibraries();

  const names = data?.libraries
    ?.flatMap((library) => library.books)
    .map((book) => book.author)
    .map((author) => author.name);

  return (
    <Box textAlign="center" mt="10px">
      {names?.map((name) => (
        <Box
          key={name}
          mt="10px"
          alignItems="center"
          justifyContent="center"
          display="flex"
        >
          <TextField label="Search" size="small" value="a" />
        </Box>
      ))}
    </Box>
  );
};

export default Home;
