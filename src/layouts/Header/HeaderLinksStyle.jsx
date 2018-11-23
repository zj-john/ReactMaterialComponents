const HeaderLinksStyle = (theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%"
  },
  left: {
    order:0,
  },
  right: {
    order:1,
    display: "flex",
    alignItems: "center"
  },
  linkText: {
    ...theme.custom.defaultFont,
    fontSize: "14px",
    margin: "0px"
  },
  cssUnderline: {
    '& input::placeholder': {
      color: "white"
    },
    '&:before': {
      borderBottomColor: "white",
    },
    '&:after': {
      borderBottomColor: "white",
    },
  },
  buttonWhite: {
    color: "white"
  },
  notifications: {
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      top: "2px",
      border: "1px solid #FFF",
      right: "4px",
      fontSize: "9px",
      background: theme.custom.dangerColor,
      color: "#FFFFFF",
      minWidth: "16px",
      height: "16px",
      borderRadius: "10px",
      textAlign: "center",
      lineHeight: "16px",
      verticalAlign: "middle",
      display: "block"
    },
    [theme.breakpoints.down("sm")]: {
      ...theme.custom.defaultFont,
      fontSize: "14px",
      marginRight: "8px"
    }
  }
});

export default HeaderLinksStyle;
