const cardIconStyle = (theme) => ({
    cardIcon: {
        "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
            borderRadius: "3px",
            backgroundColor: "#999",
            padding: "0px",
            marginTop: "-20px",
            marginRight: "15px",
            float: "left"
        }
    },
    primaryCardHeader: theme.custom.primaryCardHeader
});

export default cardIconStyle;
