import React, { Component } from 'react';
import Mention from 'plugins/Mention';
import {withStyles} from "@material-ui/core/styles";
import MultiMention from "./MultiMention";
import AsyncMention from "./AsyncMention";
import DisabledMention from "./DisabledMention";
import FixNumMention from "./FixNumMention";
import IconMention from "./IconMention";
import Paper from "@material-ui/core/Paper";
import CodeAddr from "../../components/CodeAddr/CodeAddr";
import Usage from "../../components/Usage/Usage";
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});
const people = [
  'Aaron',
  'Ada',
  'Barbara',
  'Belinda',
  'Carey',
  'Cara',
  'Davina',
  'Daphne',
  'Fannie',
  'Madge',
  'Olivia',
  'Taylor',
];

class SimpleMentionTest extends Component {
  constructor() {
    super();
    this.state = {
      pageConfig: {
        page: 0,
        rowsPerPage: 4,
        count: 12,
      },
      selectedItem: [],
      dataSource: [],
      inputValue: '',
    };
  }

  inputChangeCb(filterOption, triggerOption) {
    let filteredData = people.filter(item => {
      return !filterOption || item.toLowerCase().indexOf(filterOption.toLowerCase()) !== -1;
    });
    this.setState({
      dataSource: filteredData,
      pageConfig: {
        ...this.state.pageConfig,
        count: filteredData.length,
      },
    });
  }
  onChange(value) {
    console.log(value);
    this.setState({
      inputValue: value,
    });
  }
  onSelect(items) {
    console.log(items);
    this.setState({
      selectedItem: items,
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
<Usage>
                {
`//first: installation
npm install formsy-react--save   (pagination中依赖的包)
npm install recompose --save  (pagination中依赖的包)
npm install keycode --save  (pagination中依赖的包)
//second: 点击代码地址,查看demo示例
`}
</Usage>
        <div style={{margin:"20px"}}>
        <CodeAddr addr="../plugins/Mention/Mention.js"/>
        <Mention
          placeholder={'input @ to Mention'}
          defaultValue={this.state.inputValue}
          selected={this.state.selectedItem}
          pageConfig={this.state.pageConfig}
          onSearchChange={this.inputChangeCb.bind(this)}
          onChange={this.onChange.bind(this)}
          onSelect={this.onSelect.bind(this)}
          dataSource={this.state.dataSource}
        />
        </div>
        <div style={{margin:"20px"}}>
        <CodeAddr addr="Mention/MultiMention.js"/>
        <MultiMention />
        </div>
        <div style={{margin:"20px"}}>
        <CodeAddr addr="Mention/AsyncMention.js"/>
        <AsyncMention />
        </div>
        <div style={{margin:"20px"}}>
        <CodeAddr addr="Mention/DisabledMention.js"/>
        <DisabledMention />
        </div>
        <div style={{margin:"20px"}}>
        <CodeAddr addr="Mention/FixNumMention.js"/>
        <FixNumMention />
        </div>
        <div style={{margin:"20px"}}>
        <CodeAddr addr="Mention/IconMention.js"/>
        <IconMention/>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(SimpleMentionTest);
