import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React, { ReactNode } from 'react';

interface Props {
  title?: string;
  className?: string;
}

const MenulessAppBar: React.FC<Props> = ({ children, title, className }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={className}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default MenulessAppBar;
