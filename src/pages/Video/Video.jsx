import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Video from 'plugins/Video';
import CodeAddr from 'components/CodeAddr/CodeAddr.jsx'
import Usage from "../../components/Usage/Usage";
const styles = theme => ({
    root: theme.mixins.gutters({
        padding: 0,
        width: '100%',
        height: 600,
    }),
});

class App extends React.Component {
    ended() {
        console.log('finshed');
    }

    pause() {
        this.refs.videopause.pause();
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <CodeAddr addr="Video/Video.jsx"/>
                <Usage>
{
`//first: installation
npm install video.js --save
//second: 点击代码地址,查看demo示例
`}
                </Usage>
                <Video
                    autoplay={true}
                    sources={[{src: 'https://vjs.zencdn.net/v/oceans.mp4', type: 'Video/mp4'}]}
                    onEnded={this.ended}
                    ref="videopause"
                />
            </div>
        );
    }
}

export default withStyles(styles)(App);
