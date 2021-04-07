import { Box, Container } from '@material-ui/core';
import React, { ReactNode } from 'react';

interface MainTemplateProps {
  appBar?: ReactNode;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ children, appBar }) => {
  return (
    <Box>
      {appBar}
      <Container>{children}</Container>
    </Box>
  );
};

export default MainTemplate;
