/*eslint linebreak-style: ["error", "windows"]*/
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
        <Modal.Content>You can upload a File! </Modal.Content>
      </Modal>
    )
  }
}

export { UploadFileModal }
export default UploadFileModal
