import { makeStyles, Theme } from '@material-ui/core';
import { NextPage } from 'next';
import React from 'react';
import MenuAppBar from '../presentation/organisms/MenuAppBar';

const Main: NextPage = () => {
  return <MenuAppBar title="ログイン済" />;
};

export default Main;
