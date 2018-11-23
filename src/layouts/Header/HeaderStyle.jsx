const HeaderStyle = (theme) => ({
  appBar: {
    width: `calc(100% - 72px)`,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: theme.custom.drawerWidth,
    width: `calc(100% - ${theme.custom.drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbar: {
    paddingLeft: "0px"
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
    color: 'white'
  },
  collapse: {
    transform: 'rotate(90deg)',
    webkitTransform: 'rotate(90deg)',
    mozTransform: 'rotate(90deg)'
  },
  hide: {
    display: 'none',
  }
});

export default HeaderStyle;
