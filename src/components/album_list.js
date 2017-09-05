import React, { Component } from 'react';
import AlbumItem from './album_item';

export default class AlbumList extends Component {
    renderAlbumItem(album){
        return (<AlbumItem key={album.id} album={album}/>);
    }
    render() {
        const albuns = this.props.albuns;
        
        return (
            <div>
                {albuns.map( this.renderAlbumItem)}
            </div>
        );
    }
}
