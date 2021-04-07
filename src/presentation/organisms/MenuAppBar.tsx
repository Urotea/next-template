import {
  AppBar,
  Box,
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
  className?: string;
}

const MenuAppBar: React.FC<Props> = ({ children, title, className }) => {
  const classes = useStyles();
  const [isOpen, setOpen] = React.useState(false);
  const handleDrawerClose = () => setOpen(false);
  const handleDrawerOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
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
        <Typography variant="h6" className={className}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default MenuAppBar;
