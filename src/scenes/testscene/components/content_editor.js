import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import styled from 'styled-components'

export default class Editor extends React.Component {
  render() {
    return (
      <div style={{ flex: '2' }}>
        <Segment attached>
          <div style={{ minHeight: '70vh' }}>Editor</div>
        </Segment>
      </div>
    )
  }
}
export { Editor }
