/*eslint linebreak-style: ["error", "windows"]*/
import React, { Component } from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react'

class CreateFolderModal extends Component {
  render() {
    return (
      <Modal
        trigger={
          <Button basic>
            <Icon.Group>
              <Icon name="folder" />
              <Icon corner name="plus" />
            </Icon.Group>
            Create Folder
          </Button>
        }
      >
        <Modal.Header>Create a Folder</Modal.Header>
        <Modal.Content>You can create a new Folder!</Modal.Content>
      </Modal>
    )
  }
}

export { CreateFolderModal }
export default CreateFolderModal
