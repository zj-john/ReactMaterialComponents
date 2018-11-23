import React from 'react';
import { Upload } from 'plugins/Upload';
import CodeAddr from 'components/CodeAddr/CodeAddr.jsx'

class App extends React.Component {
  uploadFunc = data => {
    console.log(data);
  };
  render() {
    return (
      <div>
      <CodeAddr addr="Upload/UploadImg.jsx"/>
      <Upload
        type="img"
        uploadFunc={this.uploadFunc}
        disabled={false}
        uploadImgText={'upload'}
        multiple={false}
      />
      </div>
    );
  }
}
export default App;

//<Upload type={'img'} uploadFunc={this.uploadFunc} disabled={false} uploadImgText={'Upload'}/>
