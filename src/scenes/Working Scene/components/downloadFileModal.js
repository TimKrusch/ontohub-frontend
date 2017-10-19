import React, { Component } from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react'

class DownloadFileModal extends Component {
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
            <Icon name="download" />
            Download File
          </Button>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose.bind(this)}
      >
        <Modal.Header>Download a File</Modal.Header>
        <Modal.Content>
          {' '}
          <div>
            <p>You can download a File!</p>
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button content="Cancel" onClick={this.handleClose.bind(this)} />
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
