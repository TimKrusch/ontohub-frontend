import React, { Component } from 'react'
import {
  Segment,
  Menu,
  Button,
  Dropdown,
  ProveClick,
  TranslationClick,
  GitCommitClick
} from 'semantic-ui-react'
import styled from 'styled-components'
import { Prove } from '.'
import { Translation } from '.'
import { GitCommit } from '.'

class Context extends Component {
  constructor(props) {
    super()
    this.state = {
      isPvisible: true,
      isTvisible: false,
      isGCvisible: false,
      visibleP: { display: 'inline', flex: '1' },
      visibleT: { display: 'none', flex: '1' },
      visibleGC: { display: 'none', flex: '1' },
      visibleMenu: { display: 'inline' },
      visibleDropdown: { display: 'none' }
    }
  }

  toggletheVisibility(bProve, bTranslation, bGitCommit, e) {
    if (bProve === true) {
      this.setState({
        isPvisible: true,
        isTvisible: false,
        isGCvisible: false,
        visibleP: { display: 'inline', flex: '1' },
        visibleT: { display: 'none', flex: '1' },
        visibleGC: { display: 'none', flex: '1' }
      })
    } else {
      if (bTranslation === true) {
        this.setState({
          isPvisible: false,
          isTvisible: true,
          isGCvisible: false,
          visibleP: { display: 'none', flex: '1' },
          visibleT: { display: 'inline', flex: '1' },
          visibleGC: { display: 'none', flex: '1' }
        })
      } else {
        if (bGitCommit === true) {
          this.setState({
            isPvisible: false,
            isTvisible: false,
            isGCvisible: true,
            visibleP: { display: 'none', flex: '1' },
            visibleT: { display: 'none', flex: '1' },
            visibleGC: { display: 'inline', flex: '1' }
          })
        }
      }
    }
    if (this.refs.context.offsetWidth < 400) {
      this.setState({
        visibleMenu: { display: 'none' },
        visibleDropdown: { display: 'inline' }
      })
    }
  }

  ProveClick = e => this.toggletheVisibility(true, false, false, e)
  TranslationClick = e => this.toggletheVisibility(false, true, false, e)
  GitCommitClick = e => this.toggletheVisibility(false, false, true, e)

  render() {
    const { visibleP } = this.state
    const { visibleT } = this.state
    const { visibleGC } = this.state
    const { visibleDropdown } = this.state
    const { visibleMenu } = this.state

    return (
      <div style={{ display: 'flex' }} ref="context">
        <div style={visibleP} ref="prove">
          <Menu attached size="mini">
            <Menu.Item name="prove" style={visibleMenu}>
              <Button name="prove" active={'prove'} onClick={this.ProveClick}>
                {' '}
                Prove{' '}
              </Button>
            </Menu.Item>
            <Menu.Item name="translation" style={visibleMenu}>
              <Button name="translation" onClick={this.TranslationClick}>
                Translation{' '}
              </Button>
            </Menu.Item>
            <Menu.Item name="gitcommit" style={visibleMenu}>
              <Button name="gitcommit" onClick={this.GitCommitClick}>
                Git Commit{' '}
              </Button>
            </Menu.Item>
            <Menu.Item name="Dropdown" style={visibleDropdown}>
              <Dropdown button placeholder="Prove" basic simple item>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Button
                      name="prove"
                      active={'prove'}
                      onClick={this.ProveClick}
                    >
                      {' '}
                      Prove{' '}
                    </Button>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Button name="translation" onClick={this.TranslationClick}>
                      Translation{' '}
                    </Button>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Button name="gitcommit" onClick={this.GitCommitClick}>
                      Git Commit{' '}
                    </Button>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
          </Menu>
          <Segment attached>
            <Prove />
          </Segment>
        </div>
        <div style={visibleT} ref="translation">
          <Menu attached="top" size="mini">
            <Menu.Item name="prove" style={visibleMenu}>
              <Button name="prove" onClick={this.ProveClick}>
                Prove{' '}
              </Button>
            </Menu.Item>
            <Menu.Item name="translation" style={visibleMenu}>
              <Button
                name="translation"
                active={'translation'}
                onClick={this.TranslationClick}
              >
                Translation{' '}
              </Button>
            </Menu.Item>
            <Menu.Item name="gitcommit" style={visibleMenu}>
              <Button name="gitcommit" onClick={this.GitCommitClick}>
                Git Commit{' '}
              </Button>
            </Menu.Item>
            <Menu.Item name="Dropdown" style={visibleDropdown}>
              <Dropdown button placeholder="Translation" basic simple item>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Button name="prove" onClick={this.ProveClick}>
                      Prove{' '}
                    </Button>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Button
                      name="translation"
                      active={'translation'}
                      onClick={this.TranslationClick}
                    >
                      Translation{' '}
                    </Button>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Button name="gitcommit" onClick={this.GitCommitClick}>
                      Git Commit{' '}
                    </Button>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
          </Menu>
          <Segment attached>
            <Translation />
          </Segment>
        </div>
        <div style={visibleGC} ref="gitcommit">
          <Menu attached="top" size="mini">
            <Menu.Item name="prove" style={visibleMenu}>
              <Button name="prove" onClick={this.ProveClick}>
                Prove{' '}
              </Button>
            </Menu.Item>
            <Menu.Item name="translation" style={visibleMenu}>
              <Button name="translation" onClick={this.TranslationClick}>
                Translation{' '}
              </Button>
            </Menu.Item>
            <Menu.Item name="gitcommit" style={visibleMenu}>
              <Button
                name="gitcommit"
                active={'gitcommit'}
                onClick={this.GitCommitClick}
              >
                Git Commit{' '}
              </Button>
            </Menu.Item>
            <Menu.Item name="Dropdown" style={visibleDropdown}>
              <Dropdown button placeholder="Git Commit" basic simple item>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Button name="prove" onClick={this.ProveClick}>
                      Prove{' '}
                    </Button>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Button name="translation" onClick={this.TranslationClick}>
                      Translation{' '}
                    </Button>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Button
                      name="gitcommit"
                      active={'gitcommit'}
                      onClick={this.GitCommitClick}
                    >
                      Git Commit{' '}
                    </Button>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
          </Menu>
          <Segment attached>
            <GitCommit />
          </Segment>
        </div>
      </div>
    )
  }
}
export { Context }

export default Context
