import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Upload } from 'plugins/Upload';
import Button from 'plugins/Button';
import FileUpload from '@material-ui/icons/CloudUpload';
import classNames from 'classnames';
import CodeAddr from 'components/CodeAddr/CodeAddr.jsx'

const styles = theme => ({
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});
class UploadBasic extends React.Component {
  uploadFunc = data => {
    console.log(data);
  };
  deleteFunc = fileToDelete => {
    console.log(fileToDelete);
  };
  render() {
    const classes = this.props.classes;
    return (
      <div>
      <CodeAddr addr="Upload/UploadBasic.jsx"/>
      <Upload
        type="basic"
        acceptType="image/*"
        uploadFunc={this.uploadFunc}
        disabled={false}
        multiple={true}
        deleteFile={this.deleteFunc}
      >
        <Button variant="raised" component="span" color="default">
          上传文件
          <FileUpload className={classes.rightIcon} />
        </Button>
      </Upload>
      </div>
    );
  }
}
export default withStyles(styles)(UploadBasic);
