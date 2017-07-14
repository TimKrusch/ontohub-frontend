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
  List,
  Rail,
  Tab,
  handleItemClick
} from 'semantic-ui-react'


export default class Content extends React.Component {
    state = { activeItem: 'details' };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
    const { activeItem } = this.state

    return(
      <div>
        <Menu attached='top' size="mini">
          <Menu.Item name="details" active={activeItem === 'details'} >
            <Button name="details" onClick={this.handleItemClick} active={activeItem === 'details'}>Details </Button>
            <Button name='1' icon="plus" >
            </Button>
          </Menu.Item>
          <Menu.Item name="editor" active={activeItem === 'editor'} >
            <Button name="editor" onClick={this.handleItemClick} active={activeItem === 'editor'}>Editor </Button>
            <Button name='2' icon="plus">
            </Button>
          </Menu.Item>
          <Menu.Item name="history" active={activeItem === 'history'} >
            <Button name="history" onClick={this.handleItemClick} active={activeItem === 'history'}>History </Button>
            <Button name='3' icon="plus">
            </Button>
          </Menu.Item>
        </Menu>
        <Segment>
          {this.state.activeItem}
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
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Segment>
      </div>
    )

  }


}
export { Content }


