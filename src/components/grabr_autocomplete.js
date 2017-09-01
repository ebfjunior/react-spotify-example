import React, { Component } from 'react';

export default class GrabrAutocomplete extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' , isLoading: false};
    }
    onInputChange(e) {
        this.setState({ term: e.target.value })
        this.props.onTermChange(this.state.term);
    }
    render() {
        return (
            <input type="text" name={this.props.name || 'grabr_autocomplete'} className={this.props.className} onChange={e => this.onInputChange(e)} />
        )
    }
}