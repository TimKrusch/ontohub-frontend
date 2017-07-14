import React, { Component } from 'react'
import {
  Sidebar,
  Icon,
  Segment,
  Menu,
  Dropdown,
  Button,
  Breadcrumb,
  Header,
  state,
  toggleVisibility,
  List
} from 'semantic-ui-react'
import {Content} from '.'

const branches = [
  { key: 'master', text: 'master', value: 'master' },
  { key: 'branch_test1', text: 'branch_test1', value: 'branch_test1' },
  { key: 'branch_test2', text: 'branch_test2', value: 'branch_test2' }
]
class testmain extends Component {
  state = { visible: true }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div>
        {' '}<Menu borderless>
          <Button.Group>
            <Button
              basic
              onClick={this.toggleVisibility}
              content="Filebrowser"
              icon="sitemap"
            />
          </Button.Group>
          <Menu.Item content="Branches:" />
          <Dropdown
            basic
            options={branches}
            defaultValue="master"
            simple
            item
          />

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
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={List}
            animation="slide out"
            width="wide"
            visible={visible}
            icon="labeled"
            vertical
          >
            <List.Item>
              <List.Icon name="folder" />
              <List.Content>
                <List.Header>src</List.Header>
                <List.Description>Source files for project</List.Description>
                <List.List>
                  <List.Item>
                    <List.Icon name="folder" />
                    <List.Content>
                      <List.Header>site</List.Header>
                      <List.Description>Your site's theme</List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="folder" />
                    <List.Content>
                      <List.Header>themes</List.Header>
                      <List.Description>Packaged theme files</List.Description>
                      <List.List>
                        <List.Item>
                          <List.Icon name="folder" />
                          <List.Content>
                            <List.Header>default</List.Header>
                            <List.Description>
                              Default packaged theme
                            </List.Description>
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Icon name="folder" />
                          <List.Content>
                            <List.Header>my_theme</List.Header>
                            <List.Description>
                              Packaged themes are also available in this folder
                            </List.Description>
                          </List.Content>
                        </List.Item>
                      </List.List>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="file" />
                    <List.Content>
                      <List.Header>theme.config</List.Header>
                      <List.Description>
                        Config file for setting packaged themes
                      </List.Description>
                    </List.Content>
                  </List.Item>
                </List.List>
              </List.Content>
            </List.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment>
              <Content />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export { testmain }

export default testmain
