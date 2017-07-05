import React from 'react'
import {
  Container,
  Icon,
  Message,
  Menu,
  Dropdown,
  Button,
  Breadcrumb
} from 'semantic-ui-react'

const branches = [
  { key: 'master', text: 'master', value: 'master' },
  { key: 'branch_test1', text: 'branch_test1', value: 'branch_test1' },
  { key: 'branch_test2', text: 'branch_test2', value: 'branch_test2' }
]

const testmain = () =>
  <Menu borderless>
    <Menu.Item content="Branches:" />
    <Dropdown basic options={branches} defaultValue="master" simple item />

    <Menu.Item disabled />

    <Menu.Item>
      <Breadcrumb>
        <Breadcrumb.Section link>user</Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section acitve>Repo1</Breadcrumb.Section>
      </Breadcrumb>
    </Menu.Item>

    <Menu.Menu position="right">
      <Button.Group floated="right">
        <Button basic>
          <Icon.Group>
            <Icon name="file" />
            <Icon corner name="plus" />
          </Icon.Group>
          {' create File'}
        </Button>
        <Button basic>
          <Icon.Group>
            <Icon name="folder" />
            <Icon corner name="plus" />
          </Icon.Group>
          {' create Folder'}
        </Button>
        <Button basic content="upload File" icon="upload" />
        <Button basic content="download" icon="download" />
      </Button.Group>
    </Menu.Menu>
  </Menu>

export { testmain }

export default testmain
