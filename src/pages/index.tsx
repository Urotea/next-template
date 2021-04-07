import { Box, Button, makeStyles, Theme } from '@material-ui/core';
import { NextPage } from 'next';
import * as React from 'react';
import Link from 'next/link';
import MainTemplate from '../presentation/template/MainTemplate';
import MenulessAppBar from '../presentation/organisms/MenulessAppBar';

const useStyles = makeStyles((theme: Theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  main: {
    marginTop: theme.spacing(5),
  },
}));

const Index: NextPage = () => {
  const classes = useStyles();

  return (
    <MainTemplate
      appBar={<MenulessAppBar className={classes.title} title="未ログイン" />}
    >
      <Box
        display="flex"
        width="auto"
        justifyContent="center"
        className={classes.main}
      >
        <Link href="/main">
          <Button variant="contained" color="primary">
            ログイン
          </Button>
        </Link>
      </Box>
    </MainTemplate>
  );
};

export default Index;
