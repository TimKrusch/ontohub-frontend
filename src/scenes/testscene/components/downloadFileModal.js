/*eslint linebreak-style: ["error", "windows"]*/
import React, { Component } from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react'

class DownloadFileModal extends Component {
  render() {
    return (
      <Modal
        trigger={
          <Button basic>
            <Icon name="download" />
            Download File
          </Button>
        }
      >
        <Modal.Header>Download a File</Modal.Header>
        <Modal.Content>You can download a File!</Modal.Content>
      </Modal>
    )
  }
}

export { DownloadFileModal }
export default DownloadFileModal
