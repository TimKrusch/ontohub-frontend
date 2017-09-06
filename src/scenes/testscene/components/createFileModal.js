/*eslint linebreak-style: ["error", "windows"]*/
import React, { Component } from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react'

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
        <Modal.Content>You can create a new File!</Modal.Content>
      </Modal>
    )
  }
}

export { CreateFileModal }
export default CreateFileModal
