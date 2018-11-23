const FooterStyle =  (theme) => ({
  left: {
    float: "left",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    fontSize: "14px",
    float: "right"
  },
  footer: {
    bottom: "0",
    borderTop: "1px solid #e7e7e7",
    padding: "0 0",
    ...theme.custom.defaultFont
  },
  container: theme.custom.container,
});
export default FooterStyle;
