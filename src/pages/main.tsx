import { Box, makeStyles, Theme } from '@material-ui/core';
import { NextPage } from 'next';
import { Router, useRouter } from 'next/router';
import React from 'react';
import MenuAppBar from '../presentation/organisms/MenuAppBar';
import ServerPaginationGrid from '../presentation/pages/main/ServerPaginationGrid';
import MainTemplate from '../presentation/template/MainTemplate';

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    marginTop: theme.spacing(5),
  },
}));

const Main: NextPage = () => {
  const classes = useStyles();
  const router = useRouter();
  const onRowClick = (id: string) => {
    router.push(`/main/${id}`);
  };

  return (
    <MainTemplate appBar={<MenuAppBar title="ログイン済" />}>
      <Box
        display="flex"
        width="auto"
        justifyContent="center"
        className={classes.main}
      >
        <ServerPaginationGrid onRowClick={onRowClick} />
      </Box>
    </MainTemplate>
  );
};

export default Main;
