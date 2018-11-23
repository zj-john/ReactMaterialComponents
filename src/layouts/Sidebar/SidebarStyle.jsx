const SidebarStyle = (theme) => ({
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: theme.custom.drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: "#323232",
    height: "100%"
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: {
    position: "relative",
    padding: "15px 15px",
    // zIndex: "4"
  },
  logo: {
    position: "relative",
    padding: "15px 15px",
    // "&:after": {
    //   content: '""',
    //   position: "absolute",
    //   bottom: "0",
    //
    //   height: "1px",
    //   right: "15px",
    //   width: "calc(100% - 30px)",
    //   backgroundColor: "rgba(180, 180, 180, 0.3)"
    // }
  },
  logoLink: {
    ...theme.custom.defaultFont,
    textTransform: "uppercase",
    padding: "2px 0",
    // display: "block",
    display: 'flex',
    fontSize: "18px",
    textAlign: "left",
    fontWeight: "400",
    lineHeight: "30px",
    textDecoration: "none",
    backgroundColor: "transparent",
    "&,&:hover": {
      color: "#FFFFFF"
    }
  },
  logoImage: {
    width: "30px",
    display: "inline-block",
    maxHeight: "30px",
    marginLeft: "10px",
    marginRight: "15px"
  },
  logoImageClose: {
    margin: "0px",
    // marginRight: "15px"
  },
  img: {
    height: "30px",
    position: "absolute",
    verticalAlign: "middle",
    border: "0"
  },
  logoText: {
    width: "150px",
    overflow: "hidden",
    textAlign: "center",
    // color: "black"
  },
  logoTextClose: {
    width: "0px"
  },
  divider: {
    backgroundColor: "white"
  },
  listItemIcon: {
    color: "white"
  },
  listItemText: {
    color: "white"
  },
  whiteFont: {
    color: "#FFFFFF"
  },
  itemLink: {
    width: "auto",
    transition: "all 300ms linear",
    // margin: "10px 15px 0",
    margin: "10px 0px",
    borderRadius: "3px",
    position: "relative",
    // display: "block",
    // padding: "10px 15px",
    backgroundColor: "transparent",
    ...theme.custom.defaultFont
  },
  item: {
    position: "relative",
    display: "block",
    textDecoration: "none",
    "&:hover,&:focus,&:visited,&": {
      color: "#FFFFFF"
    }
  },
  itemIcon: {
    // width: "24px",
    // height: "30px",
    float: "left",
    // marginRight: "15px",
    // textAlign: "center",
    // verticalAlign: "middle",
    color: "rgba(255, 255, 255, 0.8)"
  },
  itemText: {
    ...theme.custom.defaultFont,
    margin: "0",
    lineHeight: "30px",
    fontSize: "14px",
    color: "#FFFFFF"
  },
  active: {
    backgroundColor: theme.palette.primary.main,
    // boxShadow:
    //   "0 12px 20px -10px rgba(0,188,212,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(0,188,212,.2)",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      // boxShadow:
      //   "0 12px 20px -10px rgba(0,188,212,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(0,188,212,.2)"
    }
  },
});

export default SidebarStyle;
