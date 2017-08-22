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
  toggle,
  handleItemClick
} from 'semantic-ui-react'
import styled from 'styled-components'

export default class Content extends React.Component {
  constructor(props) {
    super()
    this.state = {
      isDvisible: 1,
      isEvisible: 0,
      isHvisible: 0,
      visibleD: { display: 'inline', flex: '2' },
      visibleE: { display: 'none', flex: '3' },
      visibleH: { display: 'none', flex: '2' }
    }
  }

  toggle1(e) {
    if (this.state.isEvisible === 1) {
      if (this.state.isHvisible === 1) {
        this.setState({
          isDvisible: 1,
          isEvisible: 1,
          isHvisible: 1,
          visibleD: { display: 'inline', flex: '2' },
          visibleE: { display: 'inline', flex: '3' },
          visibleH: { display: 'inline', flex: '2' }
        })
      } else {
        this.setState({
          isDvisible: 1,
          isEvisible: 1,
          isHvisible: 0,
          visibleD: { display: 'inline', flex: '2' },
          visibleE: { display: 'inline', flex: '3' },
          visibleH: { display: 'none', flex: '2' }
        })
      }
    } else {
      if (this.state.isHvisible === 1) {
        this.setState({
          isDvisible: 1,
          isEvisible: 0,
          isHvisible: 1,
          visibleD: { display: 'inline', flex: '2' },
          visibleE: { display: 'none', flex: '3' },
          visibleH: { display: 'inline', flex: '2' }
        })
      } else {
        this.setState({
          isDvisible: 1,
          isEvisible: 0,
          isHvisible: 0,
          visibleD: { display: 'inline', flex: '2' },
          visibleE: { display: 'none', flex: '3' },
          visibleH: { display: 'none', flex: '2' }
        })
      }
    }
  }
  toggle2(e) {
    if (this.state.isDvisible === 1) {
      if (this.state.isHvisible === 1) {
        this.setState({
          isDvisible: 1,
          isEvisible: 1,
          isHvisible: 1,
          visibleD: { display: 'inline', flex: '2' },
          visibleE: { display: 'inline', flex: '3' },
          visibleH: { display: 'inline', flex: '2' }
        })
      } else {
        this.setState({
          isDvisible: 1,
          isEvisible: 1,
          isHvisible: 0,
          visibleD: { display: 'inline', flex: '2' },
          visibleE: { display: 'inline', flex: '3' },
          visibleH: { display: 'none', flex: '2' }
        })
      }
    } else {
      if (this.state.isHvisible === 1) {
        this.setState({
          isDvisible: 0,
          isEvisible: 1,
          isHvisible: 1,
          visibleD: { display: 'none', flex: '2' },
          visibleE: { display: 'inline', flex: '3' },
          visibleH: { display: 'inline', flex: '2' }
        })
      } else {
        this.setState({
          isDvisible: 0,
          isEvisible: 1,
          isHvisible: 0,
          visibleD: { display: 'none', flex: '2' },
          visibleE: { display: 'inline', flex: '3' },
          visibleH: { display: 'none', flex: '2' }
        })
      }
    }
  }
  toggle3(e) {
    if (this.state.isDvisible === 1) {
      if (this.state.isEvisible === 1) {
        this.setState({
          isDvisible: 1,
          isEvisible: 1,
          isHvisible: 1,
          visibleD: { display: 'inline', flex: '2' },
          visibleE: { display: 'inline', flex: '3' },
          visibleH: { display: 'inline', flex: '2' }
        })
      } else {
        this.setState({
          isDvisible: 1,
          isEvisible: 0,
          isHvisible: 1,
          visibleD: { display: 'inline', flex: '2' },
          visibleE: { display: 'none', flex: '3' },
          visibleH: { display: 'inline', flex: '2' }
        })
      }
    } else {
      if (this.state.isEvisible === 1) {
        this.setState({
          isDvisible: 0,
          isEvisible: 1,
          isHvisible: 1,
          visibleD: { display: 'none', flex: '2' },
          visibleE: { display: 'inline', flex: '3' },
          visibleH: { display: 'inline', flex: '2' }
        })
      } else {
        this.setState({
          isDvisible: 0,
          isEvisible: 0,
          isHvisible: 1,
          visibleD: { display: 'none', flex: '2' },
          visibleE: { display: 'none', flex: '3' },
          visibleH: { display: 'inline', flex: '2' }
        })
      }
    }
  }

  toggleDETAILS(e) {
    this.setState({
      isDvisible: 1,
      isEvisible: 0,
      isHvisible: 0,
      visibleD: { display: 'inline', flex: '2' },
      visibleE: { display: 'none', flex: '3' },
      visibleH: { display: 'none', flex: '2' }
    })
  }

  toggleEDIT(e) {
    this.setState({
      isDvisible: 0,
      isEvisible: 1,
      isHvisible: 0,
      visibleD: { display: 'none', flex: '2' },
      visibleE: { display: 'inline', flex: '3' },
      visibleH: { display: 'none', flex: '2' }
    })
  }

  toggleHISTORY(e) {
    this.setState({
      isDvisible: 0,
      isEvisible: 0,
      isHvisible: 1,
      visibleD: { display: 'none', flex: '2' },
      visibleE: { display: 'none', flex: '3' },
      visibleH: { display: 'inline', flex: '2' }
    })
  }

  render() {
    const { visibleD } = this.state
    const { visibleE } = this.state
    const { visibleH } = this.state

    return (
      <div style={{ display: 'flex' }}>
        <div style={visibleD}>
          <Menu attached="top" size="mini">
            <Menu.Item name="details">
              <Button
                name="details"
                active={'details'}
                onClick={this.toggleDETAILS.bind(this)}
              >
                Details{' '}
              </Button>
            </Menu.Item>
            <Menu.Item name="editor">
              <Button name="editor" onClick={this.toggleEDIT.bind(this)}>
                Editor{' '}
              </Button>
              <Button name="2" icon="plus" onClick={this.toggle2.bind(this)} />
            </Menu.Item>
            <Menu.Item name="history">
              <Button name="history" onClick={this.toggleHISTORY.bind(this)}>
                History{' '}
              </Button>
              <Button name="3" icon="plus" onClick={this.toggle3.bind(this)} />
            </Menu.Item>
          </Menu>
          <Segment>
            Details
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
        <div style={visibleE}>
          <Menu attached="top" size="mini">
            <Menu.Item name="details">
              <Button name="details" onClick={this.toggleDETAILS.bind(this)}>
                Details{' '}
              </Button>
              <Button name="1" icon="plus" onClick={this.toggle1.bind(this)} />
            </Menu.Item>
            <Menu.Item name="editor">
              <Button
                name="editor"
                active={'editor'}
                onClick={this.toggleEDIT.bind(this)}
              >
                Editor{' '}
              </Button>
            </Menu.Item>
            <Menu.Item name="history">
              <Button name="history" onClick={this.toggleHISTORY.bind(this)}>
                History{' '}
              </Button>
              <Button name="3" icon="plus" onClick={this.toggle3.bind(this)} />
            </Menu.Item>
          </Menu>
          <Segment>
            Editor
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
        <div style={visibleH}>
          <Menu attached="top" size="mini">
            <Menu.Item name="details">
              <Button name="details" onClick={this.toggleDETAILS.bind(this)}>
                Details{' '}
              </Button>
              <Button name="1" icon="plus" onClick={this.toggle1.bind(this)} />
            </Menu.Item>
            <Menu.Item name="editor">
              <Button name="editor" onClick={this.toggleEDIT.bind(this)}>
                Editor{' '}
              </Button>
              <Button name="2" icon="plus" onClick={this.toggle2.bind(this)} />
            </Menu.Item>
            <Menu.Item name="history">
              <Button
                name="history"
                active={'history'}
                onClick={this.toggleHISTORY.bind(this)}
              >
                History{' '}
              </Button>
            </Menu.Item>
          </Menu>
          <Segment>
            History
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
      </div>
    )
  }
}
export { Content }
