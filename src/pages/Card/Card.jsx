import React from "react";

import {withStyles} from "@material-ui/core/styles";
import {Grid, Button} from "@material-ui/core";
import {Message} from "@material-ui/icons";

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CardIcon from "components/Card/CardIcon.jsx";

import avatar from "assets/img/reactlogo.png";
import CardStyle from "./CardStyle.jsx";
import CodeAddr from 'components/CodeAddr/CodeAddr.jsx';
function UserProfile(props) {
    const {classes} = props;
    return (
        <div>
        <CodeAddr addr="Card/Card.jsx"/>
        <Grid container spacing={8}>
            <Grid item xs={12} sm={12} md={4}>
                <Card>
                    <CardHeader color="primary" stats icon>
                        <CardIcon color="primary">
                            <Message/>
                        </CardIcon>
                        <p className={classes.cardCategory}>Used Space</p>
                        <h3 className={classes.cardTitle}>
                            49/50
                            <small>GB</small>
                        </h3>
                    </CardHeader>
                    <CardFooter stats>
                        <div className={classes.stats}>
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                Get more space
                            </a>
                        </div>
                    </CardFooter>
                </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>Card Header</h4>
                    </CardHeader>
                    <CardBody>
                        Card Body
                    </CardBody>
                    <CardFooter>
                        Card Footer
                    </CardFooter>
                </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
                <Card profile>
                    <CardAvatar profile>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img src={avatar} alt="..."/>
                        </a>
                    </CardAvatar>
                    <CardBody profile>
                        <h6 className={classes.cardCategory}>Author</h6>
                        <h4 className={classes.cardTitle}>ZJ John</h4>
                        <p className={classes.description}>
                            Welcome!
                        </p>
                        <Button variant={'raised'} color={'primary'}>
                            Follow
                        </Button>
                    </CardBody>
                </Card>
            </Grid>
        </Grid>
        </div>
    );
}

export default withStyles(CardStyle)(UserProfile);
