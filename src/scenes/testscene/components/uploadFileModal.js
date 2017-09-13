import React, { Component } from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react'

class UploadFileModal extends Component {
  render() {
    return (
      <Modal
        trigger={
          <Button basic>
            <Icon name="upload" />
            Upload File
          </Button>
        }
      >
        <Modal.Header>Upload a File</Modal.Header>
        <Modal.Content>
          <div style={{}}>
            <div style={{ float: 'left' }}>You can upload a File!</div>
            <div style={{ float: 'right' }}>
              <input type="file" />
            </div>
            <div style={{ clear: 'left' }} />
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button content="Cancel" />
          <Button
            positive
            icon="upload"
            labelPosition="right"
            content="Upload"
          />
        </Modal.Actions>
      </Modal>
    )
  }
}

export { UploadFileModal }
export default UploadFileModal
