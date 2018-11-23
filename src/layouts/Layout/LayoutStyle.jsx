const LayoutStyle = (theme) => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  hide: {
    display: 'none',
  },
  content: {
    marginTop: "64px",
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    paddingBottom: "0px",
    minHeight: "calc(100vh - 88px)",
  },
  container: {
    ...theme.custom.container,
    minHeight: "calc(100vh - 143px)",
  }
});

export default LayoutStyle;
