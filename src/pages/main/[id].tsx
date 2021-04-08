import { Box } from '@material-ui/core';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import MenuAppBar from '../../presentation/organisms/MenuAppBar';
import ServerPaginationGrid from '../../presentation/pages/main/ServerPaginationGrid';
import MainTemplate from '../../presentation/template/MainTemplate';

const UserDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (typeof id !== 'string') {
    console.error('path paramがstringではありません。');
    return null;
  }

  return (
    <MainTemplate appBar={<MenuAppBar title={id} />}>
      <Box display="flex" width="auto" justifyContent="center">
        <ServerPaginationGrid />
      </Box>
    </MainTemplate>
  );
};

export default UserDetail;
