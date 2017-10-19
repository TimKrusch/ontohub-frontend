import React, { Component } from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react'

class UploadFileModal extends Component {
  constructor(props) {
    super()
    this.state = { modalOpen: false }
  }

  handleOpen(e) {
    this.setState({ modalOpen: true })
  }

  handleClose(e) {
    this.setState({ modalOpen: false })
  }

  render() {
    return (
      <Modal
        trigger={
          <Button basic onClick={this.handleOpen.bind(this)}>
            <Icon name="upload" />
            Upload File
          </Button>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose.bind(this)}
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
          <Button content="Cancel" onClick={this.handleClose.bind(this)} />
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
