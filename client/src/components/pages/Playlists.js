import React, { Component } from 'react'
import api from '../../api';

export default class Playlists extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playlists: []
    }
  }
  handleClickGet = () => {
    api.getPlaylists()
    .then(playlists => {
      this.setState({
        playlists
      })
    })
  }
  handleClickAdd = () => {
    api.addPlaylistWithFixedName()
    .then(data => {
      console.log(data)
    })
  }
  render() {
    return (
      <div>
        <h1>Playlists</h1>
        <button onClick={this.handleClickGet}>Get playlists</button>
        <button onClick={this.handleClickAdd}>Add playlist</button>
        <hr/>
        {this.state.playlists.map(p => (
          <div>
            <h2>{p.name}</h2>
            <a href={p.external_urls.spotify}>Link</a>
          </div>
        ))}
      </div>
    )
  }
}