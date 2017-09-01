/*eslint linebreak-style: ["error", "windows"]*/
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
      isCxvisible: 0,
      visibleFB: { display: 'inline', flex: '2' },
      visibleC: { display: 'inline', flex: '8' },
      visibleCx: { display: 'none', flex: '4', name: 'add Context', icon1: 'window restore', icon2: 'plus' }
    }
  }

  toggle1(e) {
    if (this.state.isFBvisible === 1) {
      if (this.state.isCxvisible === 1) {
        this.setState({
          isFBvisible: 0,
          isCxvisible: 1,
          visibleFB: { display: 'none', flex: '1' },
          visibleC: { display: 'inline', flex: '7' },
          visibleCx: { display: 'inline', flex: '3', name: 'close Context', icon1: 'window close outline', icon2: 'null' }
        })
      } else {
        this.setState({
          isFBvisible: 0,
          isCxvisible: 0,
          visibleFB: { display: 'none', flex: '1' },
          visibleC: { display: 'inline', flex: '1' },
          visibleCx: { display: 'none', flex: '1', name: 'add Context', icon1: 'window restore', icon2: 'plus' }
        })
      }
    } else {
      if (this.state.isCxvisible === 1) {
        this.setState({
          isFBvisible: 1,
          isCxvisible: 1,
          visibleFB: { display: 'inline', flex: '2' },
          visibleC: { display: 'inline', flex: '5' },
          visibleCx: { display: 'inline', flex: '3', name: 'close Context', icon1: 'window close outline', icon2: 'null' }
        })
      } else {
        this.setState({
          isFBvisible: 1,
          isCxvisible: 0,
          visibleFB: { display: 'inline', flex: '2' },
          visibleC: { display: 'inline', flex: '8' },
          visibleCx: { display: 'none', flex: '1', name: 'add Context', icon1: 'window restore', icon2: 'plus' }
        })
      }
    }
  }

  toggle2(e) {
    if (this.state.isCxvisible === 0) {
      if (this.state.isFBvisible === 1) {
        this.setState({
          isFBvisible: 1,
          isCxvisible: 1,
          visibleFB: { display: 'inline', flex: '2' },
          visibleC: { display: 'inline', flex: '5' },
          visibleCx: { display: 'inline', flex: '3', name: 'close Context', icon1: 'window close outline', icon2: 'null' }
        })
      } else {
        this.setState({
          isFBvisible: 0,
          isCxvisible: 1,
          visibleFB: { display: 'none', flex: '1' },
          visibleC: { display: 'inline', flex: '7' },
          visibleCx: { display: 'inline', flex: '3', name: 'close Context', icon1: 'window close outline', icon2: 'null' }
        })
      }
    } else {
      if (this.state.isFBvisible === 1) {
        this.setState({
          isFBvisible: 1,
          isCxvisible: 0,
          visibleFB: { display: 'inline', flex: '2' },
          visibleC: { display: 'inline', flex: '8' },
          visibleCx: { display: 'none', flex: '1', name: 'add Context', icon1: 'window restore', icon2: 'plus' }
        })
      } else {
        this.setState({
          isFBvisible: 0,
          isCxvisible: 0,
          visibleFB: { display: 'none', flex: '1' },
          visibleC: { display: 'inline', flex: '10' },
          visibleCx: { display: 'none', flex: '1', name: 'add Context', icon1: 'window restore', icon2: 'plus' }
        })
      }
    }
  }

  render() {
    const { visibleFB } = this.state
    const { visibleC } = this.state
    const { visibleCx } = this.state
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
              <Button basic onClick={this.toggle2.bind(this)}>
                <Icon.Group>
                  <Icon name={visibleCx.icon1} />
                  <Icon corner name={visibleCx.icon2} />
                </Icon.Group>
                {visibleCx.name}
              </Button>

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
        <div style={{ display: 'flex' }}>
          <div style={visibleFB}>
            <Filebrowser />
          </div>
          <div style={visibleC}>
            <Content />
          </div>
          <div style={visibleCx}>Context</div>
        </div>
      </div>
    )
  }
}
export { testmain }

export default testmain
