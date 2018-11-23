import React, {Component} from 'react';
import PropTypes from 'prop-types';
import UploadBasic from './UploadBasic.jsx';
import UploadDrag from './UploadDrag.jsx';
import UploadImg from './UploadImg.jsx';
import UploadManual from './UploadManual.jsx';
import Usage from "../../components/Usage/Usage";

class App extends React.Component {
    render() {
        return (
            <div>
                <Usage>
                    {
                        `//first: installation
npm install react-dnd --save
npm install react-dnd-html5-backend --save
//second: 点击代码地址,查看demo示例
`}
                </Usage>
                <UploadManual />
                <UploadBasic />
                <UploadImg />
                <UploadDrag />
            </div>
        );
    }
}
export default App;
