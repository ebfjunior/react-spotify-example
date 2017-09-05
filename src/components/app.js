import React, { Component } from 'react';
import SearchBar from './searchbar';
import ArtistInfo from './artist_info';
import AlbumList from './album_list';
import _ from 'lodash';
import axios from "axios";

const ROOT_URL = 'https://api.spotify.com/v1';

const CLIENT_ID = '337417b9c8f340a3810d8c460bdf8fbd';
// const CLIENT_SECRET = '4c92fb384c434d299b288ff2c0ee1f96';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { access_token: '', artist: {}, albuns: []};
  }
  componentWillMount(){
    const params = this.getHashParams();
    if (params.access_token == undefined){
      const AUTHORIZATION_URL = "https://accounts.spotify.com/authorize";
      // const REDIRECT_URI = "http://localhost:8080";
      const REDIRECT_URI = "http://edsonjunior.io/react-spotify-example";
      window.location.href = `${AUTHORIZATION_URL}?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URI}`;
    }else{
      this.setState({access_token: params.access_token});
    }
  }
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g;
    var q = window.location.hash.substring(1);
    while (e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }
  createRequest(term) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${this.state.access_token}`;
    const request = axios.get(`${ROOT_URL}/search?q=${term}&type=artist`);
    return request;
  }
  onItemClick(artist){
    this.setState({ artist: artist});

    axios.defaults.headers.common['Authorization'] = `Bearer ${this.state.access_token}`;
    axios.get(`${ROOT_URL}/artists/${artist.id}/albums`)
    .then( response => {
      this.setState({ albuns: response.data.items});
    });
  }
  
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12">
            <SearchBar createRequest={this.createRequest.bind(this)} onItemClick={this.onItemClick.bind(this)}/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <ArtistInfo artist={this.state.artist}/>
          </div>
        </div>
        <div className="row albuns-list align-center">
          <AlbumList albuns={this.state.albuns}/>
        </div>
      </div>
    );
  }
}
