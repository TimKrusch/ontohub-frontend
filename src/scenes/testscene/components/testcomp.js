import React, { Component } from 'react'
import {
  Icon,
  Menu,
  Modal,
  Header,
  Dropdown,
  Button,
  Breadcrumb,
  Segment
} from 'semantic-ui-react'
import { Details } from '.'
import { Editor } from '.'
import { History } from '.'
import { Context } from '.'
import { Filebrowser } from '.'
import { CreateFileModal } from '.'
import { CreateFolderModal } from '.'
import { UploadFileModal } from '.'
import { DownloadFileModal } from '.'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

{
  /*import { Content } from '.'*/
}

const branches = [
  { key: 'master', text: 'master', value: 'master' },
  { key: 'branch_test1', text: 'branch_test1', value: 'branch_test1' },
  { key: 'branch_test2', text: 'branch_test2', value: 'branch_test2' }
]

const testmain = ({ match }) => (
  <Router>
    <div style={{ minHeight: '90vh', background: '#4B4C4D' }}>
      {' '}
      <Menu borderless attached>
        <Button.Group>
          <Button
            basic
            content="Filebrowser"
            icon="sitemap"
            as={Link}
            to={`${match.url}/tree${match.url}`}
          />
        </Button.Group>
        <Menu.Item content="Branches:" />
        <Dropdown basic options={branches} defaultValue="master" simple item />

        <Menu.Item disabled />

        <Menu.Item>
          <Breadcrumb>
            <Breadcrumb.Section link>user</Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section acitve>Fixtures</Breadcrumb.Section>
          </Breadcrumb>
        </Menu.Item>
        <Menu.Menu position="right">
          <Button.Group floated="right">
            <Button basic>
              <Icon.Group>
                <Icon name="window restore" />
                <Icon corner name="plus" />
              </Icon.Group>
              open Context
            </Button>
            <CreateFileModal />
            <CreateFolderModal />
            <UploadFileModal />
            <DownloadFileModal />
          </Button.Group>
        </Menu.Menu>
      </Menu>
      <div>
        <Route path={`${match.url}/tree`} component={WithFileBrowser} />
        <Route path={`${match.url}`} component={WithOutFileBrowser} />
      </div>
    </div>
  </Router>
)

const WithOutFileBrowser = ({ match }) => (
  <div style={{ display: 'flex' }}>
    <div style={{ flex: '8', marginTop: '2px', minHeight: '80vh' }}>
      <Route path={`${match.url}`} component={Contentcomponent} />
    </div>
  </div>
)

const WithFileBrowser = ({ match }) => (
  <div style={{ display: 'flex' }}>
    <div style={{ flex: '2', marginTop: '2px', marginRight: '4px' }}>
      <Segment attached style={{ height: '80vh' }}>
        <Filebrowser />
      </Segment>
    </div>
    {/*
    <div style={{ flex: '8', marginTop: '2px', minHeight: '80vh' }}>
      <Route path={`${match.url}/Details`} component={DetailsMenu} />
      <Route path={`${match.url}/Editor`} component={EditorMenu} />
      <Route path={`${match.url}/History`} component={HistoryMenu} />
      <Route
        path={`${match.url}/Details+Editor`}
        component={DetailsEditorMenu}
      />
      <Route
        path={`${match.url}/Details+History`}
        component={DetailsHistoryMenu}
      />
      <Route
        path={`${match.url}/Editor+History`}
        component={EditorHistoryMenu}
      />
      <Route
        path={`${match.url}/Details+Editor+History`}
        component={DetailsEditorHistoryMenu}
      /></div>
*/}

    <div style={{ flex: '8', marginTop: '2px', minHeight: '80vh' }}>
      <Route path={`${match.url}`} component={Contentcomponent} />
    </div>
  </div>
)

const Contentcomponent = ({ match }) => (
  <div>
    {/* <div>
      <Route path={`${match.url}/Details`} component={DetailsMenu} />
      <Route path={`${match.url}/Editor`} component={EditorMenu} />
      <Route path={`${match.url}/History`} component={HistoryMenu} />
      <Route
        path={`${match.url}/Details+Editor`}
        component={DetailsEditorMenu}
      />
      <Route
        path={`${match.url}/Details+History`}
        component={DetailsHistoryMenu}
      />
      <Route
        path={`${match.url}/Editor+History`}
        component={EditorHistoryMenu}
      />
      <Route
        path={`${match.url}/Details+Editor+History`}
        component={DetailsEditorHistoryMenu}
      />
    </div>*/}

    <div style={{ display: 'flex' }}>
      <Menu attached size="mini">
        <Menu.Item name="details">
          <Button name="details" as={Link} to={`${match.url}/Details`}>
            Details
          </Button>
        </Menu.Item>
        <Menu.Item name="editor">
          <Button name="editor" as={Link} to={`${match.url}/Editor`}>
            Editor{' '}
          </Button>
          <Button
            name="2"
            icon="plus"
            as={Link}
            to={`${match.url}/Details+Editor`}
          />
        </Menu.Item>
        <Menu.Item name="history" as={Link} to={`${match.url}/History`}>
          <Button name="history">History </Button>
          <Button
            name="3"
            icon="plus"
            as={Link}
            to={`${match.url}/Details+History`}
          />
        </Menu.Item>
      </Menu>
    </div>

    <div>
      <Route path={`${match.url}/Details`} component={Detailsconst} />
      <Route path={`${match.url}/Editor`} component={Editorconst} />
      <Route path={`${match.url}/History`} component={Historyconst} />
      <Route path={`${match.url}/Details+Editor`} component={DetailsEditor} />
      <Route path={`${match.url}/Details+History`} component={DetailsHistory} />
      <Route path={`${match.url}/Editor+History`} component={EditorHistory} />
      <Route
        path={`${match.url}/Details+Editor+History`}
        component={DetailsEditorHistory}
      />
    </div>

    {/* 
    <Route path={`${match.url}/:onepanel`} component={OnePanel} />
    <Route path={`${match.url}/:panelleft+:panelright`} component={TwoPanel} />
    <Route
      path={`${match.url}/:panelleft+:panelmid+:panelright`}
      component={ThreePanel}
    />*/}
  </div>
)

{
  /*
const OnePanel = ({ match }) => (
  <div style={{ display: 'flex' }}>
    <match.params.onepanel />
  </div>
)

const TwoPanel = ({ match }) => (
  <div style={{ display: 'flex' }}>
    <match.params.panelleft />
    <match.params.panelright />
  </div>
)
const ThreePanel = ({ match }) => (
  <div style={{ display: 'flex' }}>
    <Details />
    <Editor />
    <History />
  </div>
)
*/
}

const Detailsconst = ({ match }) => (
  <div style={{ display: 'flex' }}>
    <Details />
  </div>
)
const Editorconst = ({ match }) => (
  <div style={{ display: 'flex' }}>
    <Editor />
  </div>
)
const Historyconst = ({ match }) => (
  <div style={{ display: 'flex' }}>
    <History />
  </div>
)

const DetailsEditor = ({ match }) => (
  <div style={{ display: 'flex' }}>
    <Details />
    <Editor />
  </div>
)
const DetailsHistory = ({ match }) => (
  <div style={{ display: 'flex' }}>
    <Details />
    <History />
  </div>
)

const EditorHistory = ({ match }) => (
  <div style={{ display: 'flex' }}>
    <Editor />
    <History />
  </div>
)
const DetailsEditorHistory = ({ match }) => (
  <div style={{ display: 'flex' }}>
    <Details />
    <Editor />
    <History />
  </div>
)

{
  /*
these are the functions to decide the
path from the menu 

*/
}

const contentpath = '/Details'

function contentpathdecide_detailsplus(contentpath) {
  if (contentpath == '/Details') contentpath = '/Details'
  if (contentpath == '/Editor') contentpath = '/Details+Editor'
  if (contentpath == '/History') contentpath = '/Details+History'
  if (contentpath == '/Details+History') contentpath = '/Details+History'
  if (contentpath == '/Details+Editor') contentpath = '/Details+Editor'
  if (contentpath == '/Editor+History') contentpath = '/Details+Editor+History'

  return contentpath
}

function contentpathdecide_editplus(contentpath) {
  if (contentpath == '/Details') contentpath = '/Details+Editor'
  if (contentpath == '/Editor') contentpath = '/Editor'
  if (contentpath == '/History') contentpath = '/Editor+History'
  if (contentpath == '/Details+History') contentpath = '/Details+Editor+History'
  if (contentpath == '/Details+Editor') contentpath = '/Details+Editor'
  if (contentpath == '/Editor+History') contentpath = '/Editor+History'

  return contentpath
}

function contentpathdecide_histplus(contentpath) {
  if (contentpath == '/Details') contentpath = '/Details+History'
  if (contentpath == '/Editor') contentpath = '/Editor+History'
  if (contentpath == '/History') contentpath = '/History'
  if (contentpath == '/Details+History') contentpath = '/Details+History'
  if (contentpath == '/Details+Editor') contentpath = '/Details+Editor+History'
  if (contentpath == '/Editor+History') contentpath = '/Editor+History'

  return contentpath
}

{
  /*following const are the specific menus 
for all combinations*/
}
const DetailsMenu = ({ match }) => (
  <div style={{ display: 'flex' }}>
    <Menu attached size="mini">
      <Menu.Item name="details">
        <Button name="details" as={Link} to={`${match.url}/Details`}>
          Details
        </Button>
      </Menu.Item>
      <Menu.Item name="editor">
        <Button name="editor" as={Link} to={`${match.url}/Editor`}>
          Editor{' '}
        </Button>
        <Button
          name="2"
          icon="plus"
          as={Link}
          to={`${match.url}/Details+Editor`}
        />
      </Menu.Item>
      <Menu.Item name="history">
        <Button name="history" as={Link} to={`${match.url}/History`}>
          History{' '}
        </Button>
        <Button
          name="3"
          icon="plus"
          as={Link}
          to={`${match.url}/Details+History`}
        />
      </Menu.Item>
    </Menu>
  </div>
)
const EditorMenu = ({ match }) => (
  <div style={{ display: 'flex' }}>
    <Menu attached size="mini">
      <Menu.Item name="details">
        <Button name="details" as={Link} to={`${match.url}/Details`}>
          Details
        </Button>
        <Button
          name="1"
          icon="plus"
          as={Link}
          to={`${match.url}/Details+Editor`}
        />
      </Menu.Item>
      <Menu.Item name="editor">
        <Button name="editor" as={Link} to={`${match.url}/Editor`}>
          Editor{' '}
        </Button>
      </Menu.Item>
      <Menu.Item name="history">
        <Button name="history" as={Link} to={`${match.url}/History`}>
          History{' '}
        </Button>
        <Button
          name="3"
          icon="plus"
          as={Link}
          to={`${match.url}/Editor+History`}
        />
      </Menu.Item>
    </Menu>
  </div>
)

const HistoryMenu = ({ match }) => (
  <div style={{ display: 'flex' }}>
    <Menu attached size="mini">
      <Menu.Item name="details">
        <Button name="details" as={Link} to={`${match.url}/Details`}>
          Details
        </Button>
        <Button
          name="1"
          icon="plus"
          as={Link}
          to={`${match.url}/Details+History`}
        />
      </Menu.Item>
      <Menu.Item name="editor">
        <Button name="editor" as={Link} to={`${match.url}/Editor`}>
          Editor{' '}
        </Button>
        <Button
          name="2"
          icon="plus"
          as={Link}
          to={`${match.url}/Editor+History`}
        />
      </Menu.Item>
      <Menu.Item name="history">
        <Button name="history" as={Link} to={`${match.url}/History`}>
          History{' '}
        </Button>
      </Menu.Item>
    </Menu>
  </div>
)

const DetailsEditorMenu = ({ match }) => (
  <div style={{ display: 'flex' }}>
    <Menu attached size="mini">
      <Menu.Item name="details">
        <Button name="details" as={Link} to={`${match.url}/Details`}>
          Details
        </Button>
      </Menu.Item>
      <Menu.Item name="editor">
        <Button name="editor" as={Link} to={`${match.url}/Editor`}>
          Editor{' '}
        </Button>
      </Menu.Item>
      <Menu.Item name="history">
        <Button name="history" as={Link} to={`${match.url}/History`}>
          History{' '}
        </Button>
        <Button
          name="3"
          icon="plus"
          as={Link}
          to={`${match.url}/Details+Editor+History`}
        />
      </Menu.Item>
    </Menu>
  </div>
)
const DetailsHistoryMenu = ({ match }) => (
  <div style={{ display: 'flex' }}>
    <Menu attached size="mini">
      <Menu.Item name="details">
        <Button name="details" as={Link} to={`${match.url}/Details`}>
          Details
        </Button>
      </Menu.Item>
      <Menu.Item name="editor">
        <Button name="editor" as={Link} to={`${match.url}/Editor`}>
          Editor{' '}
        </Button>
        <Button
          name="2"
          icon="plus"
          as={Link}
          to={`${match.url}/Details+Editor+History`}
        />
      </Menu.Item>
      <Menu.Item name="history">
        <Button name="history" as={Link} to={`${match.url}/History`}>
          History{' '}
        </Button>
      </Menu.Item>
    </Menu>
  </div>
)

const EditorHistoryMenu = ({ match }) => (
  <div style={{ display: 'flex' }}>
    <Menu attached size="mini">
      <Menu.Item name="details">
        <Button name="details" as={Link} to={`${match.url}/Details`}>
          Details
        </Button>
        <Button
          name="1"
          icon="plus"
          as={Link}
          to={`${match.url}/Details+History`}
        />
      </Menu.Item>
      <Menu.Item name="editor">
        <Button name="editor" as={Link} to={`${match.url}/Editor`}>
          Editor{' '}
        </Button>
      </Menu.Item>
      <Menu.Item name="history">
        <Button name="history" as={Link} to={`${match.url}/History`}>
          History{' '}
        </Button>
      </Menu.Item>
    </Menu>
  </div>
)
const DetailsEditorHistoryMenu = ({ match }) => (
  <div style={{ display: 'flex' }}>
    <Menu attached size="mini">
      <Menu.Item name="details">
        <Button name="details" as={Link} to={`${match.url}/Details`}>
          Details
        </Button>
      </Menu.Item>
      <Menu.Item name="editor">
        <Button name="editor" as={Link} to={`${match.url}/Editor`}>
          Editor{' '}
        </Button>
      </Menu.Item>
      <Menu.Item name="history">
        <Button name="history" as={Link} to={`${match.url}/History`}>
          History{' '}
        </Button>
      </Menu.Item>
    </Menu>
  </div>
)

{
  /*class testmain extends Component {
  constructor(props) {
    super()
    this.state = {
      isFBvisible: 1,
      isCxvisible: 0,
      visibleFB: {
        display: 'inline',
        flex: '2',
        marginRight: '4px',
        marginTop: '2px'
      },
      visibleC: {
        display: 'inline',
        flex: '8',
        marginTop: '2px'
      },
      visibleCx: {
        display: 'none',
        flex: '4',
        name: 'add Context',
        icon1: 'window restore',
        icon2: 'plus',
        marginLeft: '4px',
        marginTop: '2px'
      }
    }
  }

  toggleFB(e) {
    if (this.state.isFBvisible === 1) {
      if (this.state.isCxvisible === 1) {
        this.setState({
          isFBvisible: 0,
          isCxvisible: 1,
          visibleFB: { display: 'none', flex: '1' },
          visibleC: {
            display: 'inline',
            flex: '6',
            marginTop: '2px'
          },
          visibleCx: {
            display: 'inline',
            flex: '4',
            name: 'close Context',
            icon1: 'window close outline',
            icon2: 'null',
            marginLeft: '4px',
            marginTop: '2px'
          }
        })
      } else {
        this.setState({
          isFBvisible: 0,
          isCxvisible: 0,
          visibleFB: { display: 'none', flex: '1' },
          visibleC: {
            display: 'inline',
            flex: '1',
            marginTop: '2px'
          },
          visibleCx: {
            display: 'none',
            flex: '1',
            name: 'add Context',
            icon1: 'window restore',
            icon2: 'plus'
          }
        })
      }
    } else {
      if (this.state.isCxvisible === 1) {
        this.setState({
          isFBvisible: 1,
          isCxvisible: 1,
          visibleFB: {
            display: 'inline',
            flex: '2',
            marginRight: '4px',
            marginTop: '2px'
          },
          visibleC: {
            display: 'inline',
            flex: '5',
            marginTop: '2px'
          },
          visibleCx: {
            display: 'inline',
            flex: '3',
            name: 'close Context',
            icon1: 'window close outline',
            icon2: 'null',
            marginLeft: '4px',
            marginTop: '2px'
          }
        })
      } else {
        this.setState({
          isFBvisible: 1,
          isCxvisible: 0,
          visibleFB: {
            display: 'inline',
            flex: '2',
            marginRight: '4px',
            marginTop: '2px'
          },
          visibleC: {
            display: 'inline',
            flex: '8',
            marginTop: '2px'
          },
          visibleCx: {
            display: 'none',
            flex: '1',
            name: 'add Context',
            icon1: 'window restore',
            icon2: 'plus'
          }
        })
      }
    }
  }

  toggleCx(e) {
    if (this.state.isCxvisible === 0) {
      if (this.state.isFBvisible === 1) {
        this.setState({
          isFBvisible: 1,
          isCxvisible: 1,
          visibleFB: {
            display: 'inline',
            flex: '2',
            marginRight: '4px',
            marginTop: '2px'
          },
          visibleC: {
            display: 'inline',
            flex: '5',
            marginTop: '2px'
          },
          visibleCx: {
            display: 'inline',
            flex: '3',
            name: 'close Context',
            icon1: 'window close outline',
            icon2: 'null',
            marginLeft: '4px',
            marginTop: '2px'
          }
        })
      } else {
        this.setState({
          isFBvisible: 0,
          isCxvisible: 1,
          visibleFB: { display: 'none', flex: '1' },
          visibleC: {
            display: 'inline',
            flex: '6',
            marginTop: '2px'
          },
          visibleCx: {
            display: 'inline',
            flex: '4',
            name: 'close Context',
            icon1: 'window close outline',
            icon2: 'null',
            marginLeft: '4px',
            marginTop: '2px'
          }
        })
      }
    } else {
      if (this.state.isFBvisible === 1) {
        this.setState({
          isFBvisible: 1,
          isCxvisible: 0,
          visibleFB: {
            display: 'inline',
            flex: '2',
            marginRight: '4px',
            marginTop: '2px'
          },
          visibleC: {
            display: 'inline',
            flex: '8',
            marginTop: '2px'
          },
          visibleCx: {
            display: 'none',
            flex: '1',
            name: 'add Context',
            icon1: 'window restore',
            icon2: 'plus'
          }
        })
      } else {
        this.setState({
          isFBvisible: 0,
          isCxvisible: 0,
          visibleFB: { display: 'none', flex: '1' },
          visibleC: {
            display: 'inline',
            flex: '10',
            marginTop: '2px'
          },
          visibleCx: {
            display: 'none',
            flex: '1',
            name: 'add Context',
            icon1: 'window restore',
            icon2: 'plus'
          }
        })
      }
    }
  }

  render() {
    const { visibleFB } = this.state
    const { visibleC } = this.state
    const { visibleCx } = this.state
    return (
      <div style={{ minHeight: '90vh', background: '#4B4C4D' }}>
        {' '}
        <Menu borderless attached>
          <Button.Group>
            <Button
              basic
              onClick={this.toggleFB.bind(this)}
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
              <Breadcrumb.Section acitve>Fixtures</Breadcrumb.Section>
            </Breadcrumb>
          </Menu.Item>
          <Menu.Menu position="right">
            <Button.Group floated="right">
              <Button basic onClick={this.toggleCx.bind(this)}>
                <Icon.Group>
                  <Icon name={visibleCx.icon1} />
                  <Icon corner name={visibleCx.icon2} />
                </Icon.Group>
                {visibleCx.name}
              </Button>
              <CreateFileModal />
              <CreateFolderModal />
              <UploadFileModal />
              <DownloadFileModal />
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
          <div style={visibleCx}>
            <Context />
          </div>
        </div>
      </div>
    )
  }
}*/
}

export { testmain }

export default testmain
