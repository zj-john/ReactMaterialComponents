import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Transfer from 'plugins/Transfer';
import CodeAddr from 'components/CodeAddr/CodeAddr.jsx';
import Usage from 'components/Usage/Usage'

const styles = theme => ({
  root: {
    width: "50%"
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      targetKeys: [
        { name: 'this is right one', id: 'r1' },
        { name: 'and this is right two', id: 'r2' },
        { name: 'right three is here', id: 'r3' },
      ],
      dataSource: [
        { name: 'left one is left one ', id: 'l1' },
        { name: 'show the left two', id: 'l2' },
        { name: 'you get left three', id: 'l3' },
      ],
      pageConfig: {
        page: 0,
        rowsPerPage: 3,
        count: 3,
      },
    };
  }
  subSet = (arr1, arr2) => {
    var set1 = new Set(arr1);
    var set2 = new Set(arr2);

    var subset = [];

    for (let item of set1) {
      if (!set2.has(item)) {
        subset.push(item);
      }
    }

    return subset;
  };

  changeListTest = (dataSource, targetKeys) => {
    console.log(dataSource, targetKeys);
    this.setState({
      dataSource: dataSource,
      targetKeys: targetKeys,
    });
    // if(direction=='left'){
    //    this.setState(function(prevState, props){
    //     return {
    //       targetKeys: targetKeys,
    //       dataSource:[].concat(prevState.dataSource,moveKeys)
    //     }
    //  });
    // }else{
    //   this.setState(function(prevState, props){
    //     return {
    //       targetKeys: targetKeys,
    //       dataSource:this.subSet(prevState.dataSource,moveKeys)
    //     }
    //  });
    // }
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <CodeAddr addr="Transfer/TransferInput.jsx"/>
                <Usage>
            {`
//first: installation
npm install react-dnd --save (trasfer 依賴)
npm install react-dnd-html5-backend --save (trasfer 依賴)
npm install deepmerge --save (Button 依賴)
npm install formsy-react--save   (SyncSelect中依賴的包)
npm install recompose --save  (SyncSelect中依賴的包)
npm install keycode --save  (selectInput中依賴的包)
//second: 点击代码地址,查看demo示例
            `}
        </Usage>
        <Transfer
          dataSource={this.state.dataSource}
          targetKeys={this.state.targetKeys}
          filterOption={true}
          paginationOption={true}
          pageConfig={this.state.pageConfig}
          onChange={this.changeListTest.bind(this)}
          showSearch={true}
          classes={{
            root: classes.root,
          }}
        />
      </div>
    );
  }
}
export default withStyles(styles)(App);
