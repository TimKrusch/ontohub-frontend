import React, { Component } from 'react'
import {
  Segment,
  Menu,
  Button,
  DetailsClick,
  EditorClick,
  Dropdown,
  HistoryClick
} from 'semantic-ui-react'
import styled from 'styled-components'
import { Details } from '.'
import { Editor } from '.'
import { History } from '.'

class Content extends Component {
  constructor(props) {
    super()
    this.state = {
      isDvisible: true,
      isEvisible: false,
      isHvisible: false,
      visibleD: { display: 'inline', flex: '2' },
      visibleE: { display: 'none', flex: '3' },
      visibleH: { display: 'none', flex: '2' },
      visibleMenu: { display: 'inline' },
      visibleDropdown: { display: 'none' }
    }
  }

  toggletheVisibility(bDetails, bEditor, bHistory, e) {
    if (bDetails === true && bEditor === true && bHistory === true) {
      this.setState({
        isDvisible: true,
        isEvisible: true,
        isHvisible: true,
        visibleD: { display: 'inline', flex: '2' },
        visibleE: { display: 'inline', flex: '3' },
        visibleH: { display: 'inline', flex: '2' }
      })
      this.toggleDropdown(true, true, true, e)
    } else {
      if (bDetails === true && bEditor === true) {
        this.setState({
          isDvisible: true,
          isEvisible: true,
          isHvisible: false,
          visibleD: { display: 'inline', flex: '2' },
          visibleE: { display: 'inline', flex: '3' },
          visibleH: { display: 'none', flex: '2' }
        })
        this.toggleDropdown(true, true, false, e)
      } else {
        if (bDetails === true && bHistory === true) {
          this.setState({
            isDvisible: true,
            isEvisible: false,
            isHvisible: true,
            visibleD: { display: 'inline', flex: '2' },
            visibleE: { display: 'none', flex: '3' },
            visibleH: { display: 'inline', flex: '2' }
          })
          this.toggleDropdown(true, false, true, e)
        } else {
          if (bEditor === true && bHistory === true) {
            this.setState({
              isDvisible: false,
              isEvisible: true,
              isHvisible: true,
              visibleD: { display: 'none', flex: '2' },
              visibleE: { display: 'inline', flex: '3' },
              visibleH: { display: 'inline', flex: '2' }
            })
            this.toggleDropdown(false, true, true, e)
          } else {
            if (bDetails === true) {
              this.setState({
                isDvisible: true,
                isEvisible: false,
                isHvisible: false,
                visibleD: { display: 'inline', flex: '2' },
                visibleE: { display: 'none', flex: '3' },
                visibleH: { display: 'none', flex: '2' }
              })
              this.toggleDropdown(true, false, false, e)
            } else {
              if (bEditor === true) {
                this.setState({
                  isDvisible: false,
                  isEvisible: true,
                  isHvisible: false,
                  visibleD: { display: 'none', flex: '2' },
                  visibleE: { display: 'inline', flex: '3' },
                  visibleH: { display: 'none', flex: '2' }
                })
                this.toggleDropdown(false, true, false, e)
              } else {
                if (bHistory === true) {
                  this.setState({
                    isDvisible: false,
                    isEvisible: false,
                    isHvisible: true,
                    visibleD: { display: 'none', flex: '2' },
                    visibleE: { display: 'none', flex: '3' },
                    visibleH: { display: 'inline', flex: '2' }
                  })
                  this.toggleDropdown(false, false, true, e)
                }
              }
            }
          }
        }
      }
    }
  }

  toggleDropdown(bDetails, bEditor, bHistory, e) {
    console.log('c' + this.refs.content.offsetWidth)
    console.log('d' + this.refs.details.offsetWidth)
    console.log('e' + this.refs.editor.offsetWidth)
    console.log('h' + this.refs.history.offsetWidth)
    if (
      (bDetails === true &&
        bEditor === true &&
        bHistory === true &&
        this.refs.content.offsetWidth < 1500) ||
      (bDetails === true &&
        bEditor === true &&
        bHistory === false &&
        this.refs.content.offsetWidth < 1000) ||
      (bDetails === true &&
        bEditor === false &&
        bHistory === true &&
        this.refs.content.offsetWidth < 1000) ||
      (bDetails === false &&
        bEditor === true &&
        bHistory === true &&
        this.refs.content.offsetWidth < 1000) ||
      (bDetails === true &&
        bEditor === false &&
        bHistory === false &&
        this.refs.content.offsetWidth < 500) ||
      (bDetails === false &&
        bEditor === true &&
        bHistory === false &&
        this.refs.content.offsetWidth < 500) ||
      (bDetails === false &&
        bEditor === false &&
        bHistory === true &&
        this.refs.content.offsetWidth < 500)
    ) {
      this.setState({
        visibleMenu: { display: 'none' },
        visibleDropdown: { display: 'inline' }
      })
    } else {
      this.setState({
        visibleMenu: { display: 'inline' },
        visibleDropdown: { display: 'none' }
      })
    }
  }

  DetailsClick = e => this.toggletheVisibility(true, false, false, e)

  EditorClick = e => this.toggletheVisibility(false, true, false, e)

  HistoryClick = e => this.toggletheVisibility(false, false, true, e)

  DetailsplusClick(e) {
    if (this.state.isEvisible === true && this.state.isHvisible === true) {
      this.toggletheVisibility(true, true, true, e)
    } else {
      if (this.state.isEvisible === true) {
        this.toggletheVisibility(true, true, false, e)
      } else {
        if (this.state.isHvisible === true) {
          this.toggletheVisibility(true, false, true, e)
        } else {
          this.toggletheVisibility(true, false, false, e)
        }
      }
    }
  }

  EditorplusClick(e) {
    if (this.state.isDvisible === true && this.state.isHvisible === true) {
      this.toggletheVisibility(true, true, true, e)
    } else {
      if (this.state.isDvisible === true) {
        this.toggletheVisibility(true, true, false, e)
      } else {
        if (this.state.isHvisible === true) {
          this.toggletheVisibility(false, true, true, e)
        } else {
          this.toggletheVisibility(false, true, false, e)
        }
      }
    }
  }

  HistoryplusClick(e) {
    if (this.state.isDvisible === true && this.state.isEvisible === true) {
      this.toggletheVisibility(true, true, true, e)
    } else {
      if (this.state.isDvisible === true) {
        this.toggletheVisibility(true, false, true, e)
      } else {
        if (this.state.isEvisible === true) {
          this.toggletheVisibility(false, true, true, e)
        } else {
          this.toggletheVisibility(false, false, true, e)
        }
      }
    }
  }

  render() {
    const { visibleD } = this.state
    const { visibleE } = this.state
    const { visibleH } = this.state
    const { visibleDropdown } = this.state
    const { visibleMenu } = this.state

    return (
      <div style={{ display: 'flex' }} ref="content">
        <div style={visibleD} ref="details" id="deetails">
          <Menu attached="top" size="mini">
            <Menu.Item name="details" style={visibleMenu}>
              <Button
                name="details"
                active={'details'}
                onClick={this.DetailsClick}
              >
                {' '}Details{' '}
              </Button>
            </Menu.Item>
            <Menu.Item name="editor" style={visibleMenu}>
              <Button name="editor" onClick={this.EditorClick}>
                Editor{' '}
              </Button>
              <Button
                name="2"
                icon="plus"
                onClick={this.EditorplusClick.bind(this)}
              />
            </Menu.Item>
            <Menu.Item name="history" style={visibleMenu}>
              <Button name="history" onClick={this.HistoryClick}>
                History{' '}
              </Button>
              <Button
                name="3"
                icon="plus"
                onClick={this.HistoryplusClick.bind(this)}
              />
            </Menu.Item>

            <Menu.Item name="Dropdown" style={visibleDropdown}>
              <Dropdown button placeholder="Details" basic simple item>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Button
                      name="details"
                      active={'details'}
                      onClick={this.DetailsClick}
                    >
                      {' '}Details{' '}
                    </Button>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Button name="editor" onClick={this.EditorClick}>
                      Editor{' '}
                    </Button>
                    <Button
                      name="2"
                      icon="plus"
                      onClick={this.EditorplusClick.bind(this)}
                    />
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Button name="history" onClick={this.HistoryClick}>
                      History{' '}
                    </Button>
                    <Button
                      name="3"
                      icon="plus"
                      onClick={this.HistoryplusClick.bind(this)}
                    />
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
          </Menu>
          <Segment>
            <Details />
          </Segment>
        </div>

        <div style={visibleE} ref="editor">
          <Menu attached="top" size="mini">
            <Menu.Item name="details" style={visibleMenu}>
              <Button name="details" onClick={this.DetailsClick}>
                Details{' '}
              </Button>
              <Button
                name="1"
                icon="plus"
                onClick={this.DetailsplusClick.bind(this)}
              />
            </Menu.Item>
            <Menu.Item name="editor" style={visibleMenu}>
              <Button
                name="editor"
                active={'editor'}
                onClick={this.EditorClick}
              >
                Editor{' '}
              </Button>
            </Menu.Item>
            <Menu.Item name="history" style={visibleMenu}>
              <Button name="history" onClick={this.HistoryClick}>
                History{' '}
              </Button>
              <Button
                name="3"
                icon="plus"
                onClick={this.HistoryplusClick.bind(this)}
              />
            </Menu.Item>

            <Menu.Item name="Dropdown" style={visibleDropdown}>
              <Dropdown button placeholder="Editor" basic simple item>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Button name="details" onClick={this.DetailsClick}>
                      Details{' '}
                    </Button>
                    <Button
                      name="1"
                      icon="plus"
                      onClick={this.DetailsplusClick.bind(this)}
                    />
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Button
                      name="editor"
                      active={'editor'}
                      onClick={this.EditorClick}
                    >
                      Editor{' '}
                    </Button>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Button name="history" onClick={this.HistoryClick}>
                      History{' '}
                    </Button>
                    <Button
                      name="3"
                      icon="plus"
                      onClick={this.HistoryplusClick.bind(this)}
                    />
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
          </Menu>
          <Segment>
            <Editor />
          </Segment>
        </div>
        <div style={visibleH} ref="history">
          <Menu attached="top" size="mini">
            <Menu.Item name="details" style={visibleMenu}>
              <Button name="details" onClick={this.DetailsClick}>
                Details{' '}
              </Button>
              <Button
                name="1"
                icon="plus"
                onClick={this.DetailsplusClick.bind(this)}
              />
            </Menu.Item>
            <Menu.Item name="editor" style={visibleMenu}>
              <Button name="editor" onClick={this.EditorClick}>
                Editor{' '}
              </Button>
              <Button
                name="2"
                icon="plus"
                onClick={this.EditorplusClick.bind(this)}
              />
            </Menu.Item>
            <Menu.Item name="history" style={visibleMenu}>
              <Button
                name="history"
                active={'history'}
                onClick={this.HistoryClick}
              >
                History{' '}
              </Button>
            </Menu.Item>

            <Menu.Item name="Dropdown" style={visibleDropdown}>
              <Dropdown button placeholder="History" basic simple item>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Button name="details" onClick={this.DetailsClick}>
                      Details{' '}
                    </Button>
                    <Button
                      name="1"
                      icon="plus"
                      onClick={this.DetailsplusClick.bind(this)}
                    />
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Button name="editor" onClick={this.EditorClick}>
                      Editor{' '}
                    </Button>
                    <Button
                      name="2"
                      icon="plus"
                      onClick={this.EditorplusClick.bind(this)}
                    />
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Button
                      name="history"
                      active={'history'}
                      onClick={this.HistoryClick}
                    >
                      History{' '}
                    </Button>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
          </Menu>
          <Segment>
            <History />
          </Segment>
        </div>
      </div>
    )
  }
}
export { Content }

export default Content
