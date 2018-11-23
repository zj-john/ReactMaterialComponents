import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Chat, {renderStyle} from 'plugins/Chat';
import {withStyles} from '@material-ui/core/styles';
import image from "./remy.jpg";
import CodeAddr from 'components/CodeAddr/CodeAddr.jsx';
/*
 * Left & Right sided rectangle styles that can be customized.
*/
const styless = {
    customization: {
        fontSize: 15,
        fontFamily: 'calgary',
        borderRadius: 5,
        width: 200
    }
};

/*
 * Left & right parties' avatar sources.
*/
const avatars = {
    lAvatar: {
        src: image,
        alt: 'Test Portrait'
    },
    rAvatar: {
        src: image,
        alt: 'Remy Sharp'
    }
};

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {classes} = this.props;
        return(
          <div style={renderStyle}>
            <CodeAddr addr="Chat/Chat.jsx"/>
            <Chat avatar={< Avatar alt = {
                avatars.rAvatar.alt
            }
            src = {
                avatars.rAvatar.src
            }
            style = {{ marginLeft: 10 }}/>} isLeft={false} bubbleProps={{
                triSize: '12',
                bgColor: 'cyan',
                index: 0,
                classes: {
                    customization: classes.customization
                }
            }}>
                Hello, this is simply a test bubble dialog conversation.
            </Chat>
            <Chat avatar={< Avatar alt = {
                avatars.lAvatar.alt
            }
            src = {
                avatars.lAvatar.src
            }
            style = {{ marginRight: 10 }}/>} isLeft={true} bubbleProps={{
                triSize: '12',
                bgColor: 'yellow',
                index: 1,
                classes: {
                    customization: classes.customization
                }
            }}>
                Oh hi there. I see. So is there anything I can do for the test?
            </Chat>
            <Chat avatar={< Avatar alt = {
                avatars.lAvatar.alt
            }
            src = {
                avatars.lAvatar.src
            }
            style = {{ marginRight: 10 }}/>} isLeft={true} bubbleProps={{
                triSize: '12',
                bgColor: 'yellow',
                index: 2,
                classes: {
                    customization: classes.customization
                }
            }}>
                Or you're simply asking me to try it and offer some feedback?
            </Chat>
          </div>
        );
    }
}

export default withStyles(styless)(App);
