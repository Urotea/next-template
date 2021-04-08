import {
  AppBar,
  Avatar,
  Box,
  Button,
  Drawer,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React, { ReactNode } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MainMenu from './MainMenu';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: 240,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  list: {
    width: 250,
  },
}));

interface Props {
  title?: string;
}

const MenuAppBar: React.FC<Props> = ({ children, title }) => {
  const classes = useStyles();
  const [isOpen, setOpen] = React.useState(false);
  const handleDrawerClose = () => setOpen(false);
  const handleDrawerOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <Box className={classes.root}>
      <AppBar position="static">
        <Drawer open={isOpen} onClose={onClose} className={classes.drawer}>
          <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={handleDrawerClose}>
              {isOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </Box>
          <MainMenu width={240} />
        </Drawer>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <Avatar>H</Avatar>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MenuAppBar;
