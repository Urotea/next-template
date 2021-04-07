import {
  AppBar,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { NextPage } from 'next';
import * as React from 'react';
import Link from 'next/link';

const useStyles = makeStyles((theme: Theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const Index: NextPage = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            未ログイン状態
          </Typography>
        </Toolbar>
      </AppBar>
      <Link href="/test">
        <a>test</a>
      </Link>
    </>
  );
};

export default Index;
