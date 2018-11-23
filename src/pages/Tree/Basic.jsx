import React from 'react';
import Tree from 'plugins/Tree';
import { withStyles } from '@material-ui/core/styles';
import CodeAddr from 'components/CodeAddr/CodeAddr.jsx';
import Usage from 'components/Usage/Usage'

const TreeNode = Tree.TreeNode;
class Demo extends React.Component {
  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };
  onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };
  render() {
    return (
      <div style={{ width: '100%' }}>
        <CodeAddr addr="Tree/Basic.jsx"/>
        <Usage>
            {`
//first: installation
npm install rc-tree --save
npm install css-animation --save
//second: 点击代码地址,查看demo示例
            `}
        </Usage>
        <Tree
          checkable
          defaultExpandedKeys={['0-0-0', '0-0-1']}
          defaultSelectedKeys={['0-0-0', '0-0-1']}
          defaultCheckedKeys={['0-0-0', '0-0-1']}
          onSelect={this.onSelect}
          onCheck={this.onCheck}
        >
          <TreeNode title="parent 1" key="0-0">
            <TreeNode title="parent 1-0" key="0-0-0" disabled>
              <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
              <TreeNode title="leaf" key="0-0-0-1" />
            </TreeNode>
            <TreeNode title="parent 1-1" key="0-0-1">
              <TreeNode title={<span style={{ color: '#1890ff' }}>sss</span>} key="0-0-1-0" />
            </TreeNode>
          </TreeNode>
        </Tree>
      </div>
    );
  }
}

export default withStyles()(Demo);
