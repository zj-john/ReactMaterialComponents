import React from 'react';
import NavBar from 'plugins/NavBar';
import Button from 'plugins/Button';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Icon from '@material-ui/core/Icon';
import {withStyles} from '@material-ui/core/styles';
import HorizontalNavBar from "./HorizontalNavBar";
import MenuBar from "./MenuBar";
import LightNavBar from "./LightNavBar";
import EasyNavBar from "./EasyNavBar";
import FlatNavBar from "./FlatNavBar";
import CodeAddr from "../../components/CodeAddr/CodeAddr";
import Usage from "../../components/Usage/Usage";

const styles = theme => ({
    root: {
        width: 400,
        background: '#fff',
    },
});
const SubNavBar = NavBar.SubNavBar;
const NavItem = NavBar.Item;
const ItemGroup = NavBar.ItemGroup;

class Test extends React.Component {
    onClick(info) {
        console.log('click ', info.item.props.path);
    }

    state = {
        collapsed: true,
    };
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    getMenu() {
        return (
            <div>
                <Button
                    variant="raised"
                    color="primary"
                    onClick={this.toggleCollapsed}
                    style={{marginBottom: 16}}
                >
                    <Icon>{this.state.collapsed ? 'trending_flat' : 'menu'} </Icon>
                </Button>
                <NavBar
                    onClick={this.onClick}
                    mode="inline"
                    inlineCollapsed={this.state.collapsed}
                    theme={'dark'}
                    // defaultSelectedKeys={["1-1"]}
                    // defaultOpenKeys={['sub1']}
                >
                    <SubNavBar
                        key="1"
                        title={
                            <span>
                <i className="material-icons">accessibility</i>
                <span>Navigation One</span>
              </span>
                        }
                    >
                        <NavItem path="/l/o" key="1-1" selected>
                            <InboxIcon />
                            item1-1
                        </NavItem>
                        <NavItem key="1-2">
                            <i className="material-icons">accessibility</i>
                            item1-2
                        </NavItem>
                    </SubNavBar>
                    <SubNavBar
                        key="sub1"
                        title={
                            <span>
                <InboxIcon />
                <span>Navigation One</span>
              </span>
                        }
                    >
                        <ItemGroup key="g1" title="Item 1">
                            <NavBar.Item key="g1-1">Option 1</NavBar.Item>
                            <NavBar.Item key="g1-2">Option 2</NavBar.Item>
                        </ItemGroup>
                        <ItemGroup key="g2" title="Item 2">
                            <NavBar.Item key="g2-3">Option 3</NavBar.Item>
                            <NavBar.Item key="g2-4">Option 4</NavBar.Item>
                        </ItemGroup>
                    </SubNavBar>
                    <SubNavBar
                        key="2"
                        title={
                            <span>
                <i className="material-icons">accessibility</i>
                <span>SubNavBar2</span>
              </span>
                        }
                    >
                        <NavItem key="2-1">item2-1</NavItem>
                        <NavItem key="2-2">
                            <i className="material-icons">accessibility</i>
                            item2-2
                        </NavItem>
                        <SubNavBar key="2-3" title="SubNavBar2-3">
                            <NavItem key="2-3-1">item2-3-1</NavItem>
                            <NavItem key="2-3-2">item2-3-2</NavItem>
                        </SubNavBar>
                        <NavItem key="2-4">item2-4</NavItem>
                    </SubNavBar>
                </NavBar>
            </div>
        );
    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                 <Usage>
                {
`//first: installation
npm install deepmerge --save
//second: 点击代码地址,查看demo示例
`}
                 </Usage>

                <div className={classes.root}>
                    <CodeAddr addr="NavBar/NavBar.js"/>
                    {this.getMenu()}
                    </div>
                <div style={{marginTop: "30px"}}>
                    <CodeAddr addr="NavBar/HorizontalNavBar.js"/>
                    <HorizontalNavBar/>
                </div>
                <div style={{marginTop: "30px"}}>
                    <CodeAddr addr="NavBar/MenuBar.js"/>
                    <MenuBar/>
                </div>
                <div style={{marginTop: "30px"}}>
                    <CodeAddr addr="NavBar/LightNavBar.js"/>
                    <LightNavBar/>
                </div>
                <div style={{marginTop: "30px"}}>
                    <CodeAddr addr="NavBar/EasyNavBar.js"/>
                    <EasyNavBar/>
                </div>
                <div style={{marginTop: "30px"}}>
                    <CodeAddr addr="NavBar/FlatNavBar.js"/>
                    <FlatNavBar/>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Test);
