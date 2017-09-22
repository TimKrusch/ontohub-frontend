import React, { Component } from 'react'
import { Button, Modal, Icon, Form } from 'semantic-ui-react'

class CreateFileModal extends Component {
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
            <Icon.Group>
              <Icon name="file" />
              <Icon corner name="plus" />
            </Icon.Group>
            Create File
          </Button>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose.bind(this)}
      >
        <Modal.Header>Create a File</Modal.Header>
        <Modal.Content>
          <div>
            <Form>
              <Form.Input
                label="You can create a new File! Just type in the Name:"
                placeholder="File-Name"
              />
            </Form>
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button content="Cancel" onClick={this.handleClose.bind(this)} />
          <Button
            positive
            icon="checkmark"
            labelPosition="right"
            content="Create"
          />
        </Modal.Actions>
      </Modal>
    )
  }
}

export { CreateFileModal }
export default CreateFileModal
