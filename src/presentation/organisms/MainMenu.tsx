import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import React from 'react';

interface Props {
  width?: number;
}

const MainMenu: React.FC<Props> = ({ children, width }) => {
  return (
    <Box width={width == null ? 240 : width}>
      <List>
        <ListItem button key={'Mail'}>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary={'Mail'} />
        </ListItem>
      </List>
      <Divider />
    </Box>
  );
};

export default MainMenu;
