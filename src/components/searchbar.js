import React, { Component } from 'react';
import _ from 'lodash';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' , data: [], active: false};
    }
    onInputChange(value) {
        this.setState({ term: value })
        this.search();
    }
    search(){
        const request = this.props.createRequest(this.state.term);
        request
        .then( response => {
            this.setState({data: response.data.artists.items, active: true});
        })
        .catch( response => {
            this.setState({data: []})  
        });
    }
    renderItemList(item){
        const image = _.last(item.images);
        if(image){
            return (
                <li key={item.id}>
                    <img src={image.url} width="50"/>
                    {item.name}
                </li>
            );
        }
    }
    render() {
        const onInputChange = _.debounce(this.onInputChange.bind(this), 300);
        return (
            <div>
                <div className="grabr_overlay" style={{ display: this.state.data.length && this.state.active ? 'block' : 'none', opacity: this.state.data.length && this.state.active ? '1' : '0' }} onClick={ e => this.setState({active: false})}></div>
                <div className="row grabr_content">
                    <div className="col-xs-12">
                        <div>
                            <input type="text" name="searchbar" className="form-control" onChange={e => onInputChange(e.target.value)} />
                            <ul className="grabr_datalist" style={{display: this.state.data.length && this.state.active ? 'block' : 'none'}}>
                                {this.state.data.map(item => this.renderItemList(item))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}