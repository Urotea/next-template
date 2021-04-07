import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { NextPage } from 'next';
import React from 'react';

const Test: NextPage = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">ログイン状態</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Test;
