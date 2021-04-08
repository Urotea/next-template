import { Box, Container, makeStyles, Theme } from '@material-ui/core';
import React, { ReactNode } from 'react';

interface MainTemplateProps {
  appBar?: ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    marginTop: theme.spacing(5),
  },
}));

const MainTemplate: React.FC<MainTemplateProps> = ({ children, appBar }) => {
  const classes = useStyles();
  return (
    <Box>
      {appBar}
      <Container className={classes.main}>{children}</Container>
    </Box>
  );
};

export default MainTemplate;
