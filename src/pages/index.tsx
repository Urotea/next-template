import type { NextPage } from "next";
import { Box, TextField, Typography } from "@mui/material";
import useLibraries from "@/hooks/useLibraries";

const Home: NextPage = () => {
  const { data } = useLibraries();

  const libraries = data?.libraries.map((library) => {
    return (
      <Box
        key={library.branch}
        mt="10px"
        alignItems="center"
        justifyContent="center"
      >
        <Typography>branch: {library.branch}</Typography>
        <Box>
          {library.books.map((book) => {
            return (
              <Box key={book.title}>
                <Typography>book title: {book.title}</Typography>
                <Typography>book author: {book.author.name}</Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    );
  });

  return (
    <Box textAlign="center" mt="10px">
      {libraries}
    </Box>
  );
};

export default Home;
