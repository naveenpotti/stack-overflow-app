import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
        keyword: ''
    }
  }

  onSearchKeywordChange = (e) => {
      console.log('e',e.target.value );
      this.setState({keyword: e.target.value});
  }
  render() {
    return (
      <React.Fragment>
          <div className="row">
            <div className="col-xs-3">
                <input type="text" id="txtSearch" className="form-control" value ={this.state.keyword} onChange = {this.onSearchKeywordChange}/>
            </div>
            <div className="col-xs-3">
                <button className="btn btn-primary" onClick={() => this.props.onSearch(this.state.keyword)}>Search</button>
            </div>
          </div>
      </React.Fragment>
    );
  }
}

export default Search;
