import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Upload } from 'plugins/Upload';
import Button, { StatusButton } from 'plugins/Button';
import FileUpload from '@material-ui/icons/CloudUpload';
import classNames from 'classnames';
import CodeAddr from 'components/CodeAddr/CodeAddr.jsx'
const styles = theme => ({
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
});
class UploadManual extends React.Component {
  actionFunc = data => {
    let _promise = new Promise(function(resolve, reject) {
      fetch('//jsonplaceholder.typicode.com/posts/', {
        method: 'POST',
        body: data,
      }).then(
        function(res) {
          resolve('success');
        },
        function(err) {
          reject('error');
        },
      );
    });
    return _promise;
  };
  render() {
    const classes = this.props.classes;
    return (
      <div>
      <CodeAddr addr="Upload/UploadManual.jsx"/>
      <Upload
        type="manual"
        acceptType="image/*"
        actionFunc={this.actionFunc}
        multiple={true}
        disabled={false}
      >
        <Button variant="raised" component="span" color="default" className={classes.button}>
          上传文件
          <FileUpload className={classes.rightIcon} />
        </Button>
        <div>开始上传</div>
      </Upload>
      </div>
    );
  }
}
export default withStyles(styles)(UploadManual);
