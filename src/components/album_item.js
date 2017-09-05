import React, { Component } from 'react';

export default class AlbumItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const album = this.props.album;
        const photo = album.images[1];
        return (
            <div className="col-xs-12 col-sm-4 col-md-2">
                    <div className="col-xs-12 album-item">
                        <div className="row">
                            <div className="col-xs-12 image-container">
                                <img src={ photo ? photo.url : ''} className="img-responsive" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 text-center album-name">
                                {album.name}
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}
