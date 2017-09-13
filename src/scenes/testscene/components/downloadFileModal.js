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
        <Modal.Content>
          {' '}
          <div>
            <p>You can download a File!</p>
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button content="Cancel" />
          <Button
            positive
            icon="download"
            labelPosition="right"
            content="Download"
          />
        </Modal.Actions>
      </Modal>
    )
  }
}

export { DownloadFileModal }
export default DownloadFileModal
