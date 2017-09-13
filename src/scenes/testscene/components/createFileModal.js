import React, { Component } from 'react'
import { Button, Modal, Icon, Form } from 'semantic-ui-react'

class CreateFileModal extends Component {
  render() {
    return (
      <Modal
        trigger={
          <Button basic>
            <Icon.Group>
              <Icon name="file" />
              <Icon corner name="plus" />
            </Icon.Group>
            Create File
          </Button>
        }
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
          <Button content="Cancel" />
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
