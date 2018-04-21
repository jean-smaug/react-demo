import React, { Component } from 'react'
import styled from 'styled-components'
import { observer, inject } from 'mobx-react'

import ImageUpload from './ImageUpload'
import SoundUpload from './SoundUpload'

import { uploadFile } from '../api/StorageApi'

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 90vh;

  background: white;

  transform: ${({ visible }) => (visible ? 'translateY(10vh)' : 'translateY(100vh)')};
  transition: transform 200ms ease;
`

@inject('appStore')
@observer
class Uploader extends Component {
  addNewSound = () => {
    uploadFile()
  }

  render () {
    return (
      <Wrapper visible={this.props.appStore.isUploaderOpen}>
        <button
          onClick={() => {
            this.props.appStore.toggleUploaderStatus()
          }}
        >
          Fermer
        </button>

        <ImageUpload imageCallback={() => {}} />
        <SoundUpload fileCallback={() => {}} />

        <button
          onClick={() => {
            this.addNewSound()
          }}
        >
          Ajouter
        </button>
      </Wrapper>
    )
  }
}

export default Uploader