/*eslint linebreak-style: ["error", "windows"]*/
import React, { Component } from 'react'
import { List, Segment } from 'semantic-ui-react'

export default class Filebrowser extends React.Component {
  render() {
    return (
      <div>
        <Segment attached style={{ height: '80vh' }}>
          <List>
            <List.Item>
              <List.Icon name="folder" />
              <List.Content>
                <List.Header>Repo1</List.Header>
                <List.Description>example Repository</List.Description>
                <List.List>
                  <List.Item>
                    <List.Icon name="folder" />
                    <List.Content>
                      <List.Header>Folder1</List.Header>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="folder" />
                    <List.Content>
                      <List.Header>Folder2</List.Header>
                      <List.List>
                        <List.Item>
                          <List.Icon name="file text outline" />
                          <List.Content>
                            <List.Header>File1.dol</List.Header>
                            <List.List>
                              <List.Item>
                                <List.Icon name="file outline" />
                                <List.Content>
                                  <List.Header>oms1</List.Header>
                                </List.Content>
                              </List.Item>
                              <List.Item>
                                <List.Icon name="file outline" />
                                <List.Content>
                                  <List.Header>oms2</List.Header>
                                </List.Content>
                              </List.Item>
                            </List.List>
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Icon name="file pdf outline" />
                          <List.Content>
                            <List.Header>File2.pdf</List.Header>
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Icon name="file text" />
                          <List.Content>
                            <List.Header>readme.md</List.Header>
                          </List.Content>
                        </List.Item>
                      </List.List>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="folder" />
                    <List.Content>
                      <List.Header>Folder3</List.Header>
                    </List.Content>
                  </List.Item>
                </List.List>
              </List.Content>
            </List.Item>
          </List>
        </Segment>
      </div>
    )
  }
}
export { Filebrowser }
