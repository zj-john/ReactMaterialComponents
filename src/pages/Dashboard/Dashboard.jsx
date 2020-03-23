import React from "react";

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <article>
                <h3>官网文档</h3>
                <div><a href="https://material.io/tools/icons/?style=baseline" target="_blank" rel="noopener noreferrer">ICON CONF</a></div>
                <div><a href="https://material-ui.com" target="_blank"  rel="noopener noreferrer">Component CONF</a></div>
            </article>
            <article>
                <h3>补充组件</h3>
                <div>
                    本项目中添加了30多种常用的component，每个component页中展示了组件的效果，具体使用的代码，以及使用需要的依赖。
                </div>
            </article>
            </div>
        );
    }
}

export default Dashboard;
