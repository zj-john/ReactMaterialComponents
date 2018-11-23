import React from 'react';
import { Upload } from 'plugins/Upload';
import CodeAddr from 'components/CodeAddr/CodeAddr.jsx'

class UploadDrag extends React.Component {
  uploadFunc = data => {
    console.log(data);
  };
  deleteFunc = fileToDelete => {
    console.log(fileToDelete);
  };

  render() {
    return (
      <div>
      <CodeAddr addr="Upload/UploadDrag.jsx"/>
      <Upload
        type="drag"
        acceptType="*"
        uploadFunc={this.uploadFunc}
        disabled={false}
        multiple={true}
        deleteFile={this.deleteFunc}
        beforeDragMention={'Drag file here'}
        onDragMention={'Release to drop'}
      />
      </div>
    );
  }
}
export default UploadDrag;
