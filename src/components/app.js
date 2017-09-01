import React, { Component } from 'react';
import SearchBar from './searchbar';
import _ from 'lodash';
import axios from "axios";

const ROOT_URL = 'https://api.spotify.com/v1';
const API_KEY = 'BQDq0u6L3hd22Piq3INAEXyuLe1T12E8wB7R3vMoYjt1jYtU4UGnqROkcx_Kv807tDHEmkAqPP3IisinfnFcL8W7d9u4nbE1j9mzRm-rPCALdj59VMDz-pQC7TE4S5dzQ5fHR2dxfp3NHBhy';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { artista: '' };
  }
  createRequest(term) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${API_KEY}`;
    const request = axios.get(`${ROOT_URL}/search?q=${term}&type=artist`);
    return request;
  }
  render() {
    return (
      <div>
        <SearchBar createRequest={this.createRequest} />
        <div>aaaaa</div>
      </div>
    );
  }
}
