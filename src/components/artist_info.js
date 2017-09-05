import React, { Component } from 'react';

export default class ArtistInfo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const artist = this.props.artist;
        
        if(!Object.keys(artist).length) return(<div></div>);

        return (
            <div className="col-xs-12 artist-info">
                <div className="col-xs-12 col-sm-2">
                    <img src={_.first(artist.images).url} className="img-responsive"/>
                </div>
                <div className="col-xs-12 col-sm-10">
                    <div className="row">
                        <div className="col-xs-12">
                            <h4>
                                {artist.name}
                            </h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            {artist.genres.join(" | ")}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
