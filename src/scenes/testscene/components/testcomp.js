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
  toggle1,
  toggle2,
  List
} from 'semantic-ui-react'
import { Content } from '.'
import { Filebrowser } from '.'
import styled from 'styled-components'

const branches = [
  { key: 'master', text: 'master', value: 'master' },
  { key: 'branch_test1', text: 'branch_test1', value: 'branch_test1' },
  { key: 'branch_test2', text: 'branch_test2', value: 'branch_test2' }
]

class testmain extends Component {
  constructor(props) {
    super()
    this.state = {
      isFBvisible: 1,
      visibleFB: { display: 'inline', width: '20%', float: 'left' },
      visibleC: { display: 'inline', width: '80%', float: 'right' }
    }
  }

  toggle1(e) {
    if (this.state.isFBvisible === 1) {
      this.setState({
        isFBvisible: 0,
        visibleFB: { display: 'none', width: '20%', float: 'left' },
        visibleC: { display: 'inline', width: '100%', float: 'right' }
      })
    } else {
      this.setState({
        isFBvisible: 1,
        visibleFB: { display: 'inline', width: '20%', float: 'left' },
        visibleC: { display: 'inline', width: '80%', float: 'right' }
      })
    }
  }

  render() {
    const { visibleFB } = this.state
    const { visibleC } = this.state
    return (
      <div>
        {' '}<Menu borderless>
          <Button.Group>
            <Button
              basic
              onClick={this.toggle1.bind(this)}
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
        <div style={visibleFB}>
          <Filebrowser />
        </div>
        <div style={visibleC}>
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
        </div>
      </div>
    )
  }
}
export { testmain }

export default testmain
