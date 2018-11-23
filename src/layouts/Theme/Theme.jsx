import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#00acc1"
        },
        background:{
             default: "rgba(0, 0, 0, 0)"
        }
    },
    custom: {
        drawerWidth: 260,
        transition: {
            transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
        },
        container: {
            paddingRight: "15px",
            paddingLeft: "15px",
            marginRight: "auto",
            marginLeft: "auto"
        },
        boxShadow: {
            boxShadow: "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
        },
        defaultFont: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: "300",
            lineHeight: "1.5em"
        },
        defaultBoxShadow: {
            border: "0",
            borderRadius: "3px",
            boxShadow: "0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
            padding: "10px 0",
            transition: "all 150ms ease 0s"
        },
        primaryBoxShadow: {
            boxShadow: "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
        },
        primaryColor: "#9c27b0",
        warningColor: "#ff9800",
        dangerColor: "#f44336",
        successColor: "#4caf50",
        infoColor: "#00acc1",
        cardCategory: {
          color: "#999999",
          margin: "0",
          fontSize: "14px",
          marginTop: "0",
          paddingTop: "10px",
          marginBottom: "0"
        },
        cardTitle: {
          color: "#3C4858",
          marginTop: "0px",
          minHeight: "auto",
          fontWeight: "300",
          fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
          marginBottom: "3px",
          textDecoration: "none",
          "& small": {
              color: "#777",
              fontSize: "65%",
              fontWeight: "400",
              lineHeight: "1"
          }
        },
        stats: {
          color: "#999999",
          display: "inline-flex",
          fontSize: "12px",
          lineHeight: "22px",
          "& svg": {
              top: "4px",
              width: "16px",
              height: "16px",
              position: "relative",
              marginRight: "3px"
          }
        },
        primaryCardHeader: {
          background: "linear-gradient(60deg, #ab47bc, #8e24aa)",
          boxShadow: "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
        }
    }
});
export default theme;
