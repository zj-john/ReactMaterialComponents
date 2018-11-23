import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core/styles";
import Carousel from 'plugins/Carousel';
import {Home, Grade, Lock} from '@material-ui/icons';
import CodeAddr from 'components/CodeAddr/CodeAddr.jsx';
import image1 from "./bike.jpg";
import image2 from "./mushroom.jpg";
import image3 from "./burgers.jpg";
import image4 from "./morning.jpg";

const style = {
    wrap: {
        width: '700px',
        height: '300px'
    }
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.IMAGE_DATA = [
            {
                src: image1,
                alt: 'images-1',
                url: 'http://baidu.com'
            }, {
                src: image2,
                alt: 'images-2'
            }, {
                src: image3,
                alt: 'images-3',
                url: 'http://douban.com'
            }, {
                src: image4,
                alt: 'images-4'
            }
        ];
    }

    render() {
        return (
            <div>
            <CodeAddr addr="Carousel/Carousel.jsx"/>
            <div style={style.wrap}>
                <Carousel items={this.IMAGE_DATA} speed={1.5} delay={2} pause={true} autoplay={true} dots={true} arrows={true}/>
            </div>
            </div>
        );
    }
}
export default App;
