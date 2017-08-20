import React, { Component } from 'react'
import { Segment, Menu, state, handleItemClick, List } from 'semantic-ui-react'

export default class usermain extends Component {
  state = { activeItem: 'Overview' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name="Overview"
            active={activeItem === 'Overview'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="My Repositories"
            active={activeItem === 'My Repositories'}
            onClick={this.handleItemClick}
          />
        </Menu>
        <List celled style={{ width: '40%' }}>
          <List.Item>
            <List.Content>
              <List.Header>Repo1</List.Header>
              first Repo
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>Repo2</List.Header>
              second Repo
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>Repo3</List.Header>
              third Repo
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>Repo4</List.Header>
              fourth Repo
            </List.Content>
          </List.Item>
        </List>
      </div>
    )
  }
}

export { usermain }
