import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import styled from 'styled-components'

export default class GitCommit extends React.Component {
  render() {
    return (
      <Segment attached>
        <div style={{ minHeight: '70vh' }}>Git Commit</div>
      </Segment>
    )
  }
}
export { GitCommit }
