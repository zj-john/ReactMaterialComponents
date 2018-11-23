import React, { Component } from 'react';
import Popconfirm from 'plugins/Popconfirm';
import { withStyles } from '@material-ui/core/styles';
import Button from 'plugins/Button';
import ButtonGroup from 'plugins/ButtonGroup';
import LocaleProvider, { LocaleConsumer } from 'plugins/LocaleProvider';
import CodeAddr from 'components/CodeAddr/CodeAddr.jsx';
import Usage from "../../components/Usage/Usage";

const radio = true;
const styles = theme => ({
  box: {
    marginBottom: theme.spacing.unit * 6,
  },
  label: {
    marginBottom: theme.spacing.unit * 2,
  },
});

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'are you sure to close it?',
    };
  }

  value = {
    en: {
      Popconfirm: {
        okText: 'I am OK',
      },
    },
    zh: {
      Popconfirm: {
        okText: '点我确认',
      },
    },
  };

  render() {
    const { classes } = this.props;

    const { content } = this.state;

    return (
      <div>
         <Usage>
                     {
`//first: installation
npm install deepmerge --save
npm install moment --save
npm install material-ui-pickers --save
//second: 点击代码地址,查看demo示例
`}
        </Usage>
      <CodeAddr addr="LocaleProvider/Basic.jsx"/>
      <div className={classes.box}>
        {/* with provider */}
        <LocaleProvider locale={'en-us'} value={this.value}>
          <Popconfirm content={content}>
            <Button>open</Button>
          </Popconfirm>
          <div className={classes.label}>Change locale of components:</div>
          <LocaleConsumer>
            {value => {
              const { locale, changeLocale } = value;
              return (
                <ButtonGroup>
                  <Button onClick={changeLocale('zh-cn')} variant="raised" color="primary">
                    中文
                  </Button>
                  <Button
                    onClick={changeLocale('en-us')}
                    radio={radio}
                    variant="raised"
                    color="primary"
                  >
                    EN
                  </Button>
                  <Button onClick={changeLocale('zh-tw')} variant="raised" color="primary">
                    繁体中文
                  </Button>
                </ButtonGroup>
              );
            }}
          </LocaleConsumer>
        </LocaleProvider>

        {/* without provider */}
        <Popconfirm content={content}>
          <Button>default locale</Button>
        </Popconfirm>
      </div>
      </div>
    );
  }
}

export default withStyles(styles)(MyComponent);
