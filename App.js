import React from 'react';
import Search from './Search';
import SearchResults from './SearchResults';
import RowDetails from './RowDetails';
import {GetResults} from './app.service';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: [],
      showModal: false,
      selelctedRow: null
    }
  }

  onSearch = (keyword) => {
    GetResults(keyword).then(res => this.setState({searchData: res}));
  }

  showDetails = (data) => {
    this.setState({showModal: true, selectedRow: data});
  }
  close = () => {
    this.setState({showModal: false});
  }

  render() {
    return (
      <React.Fragment>
        <div className="title">Welcome to Stack Overflow Application</div>
        <hr />
        <div className="row">
          <div className="col-xs-2">
              Search with keyword: 
          </div>
          <div className="col-xs-10">
            <Search onSearch={this.onSearch}/>
          </div>
        </div>
          <h3>Search Result</h3>
          <SearchResults showDetails= { this.showDetails} data={ this.state.searchData} />
        <RowDetails show= {this.state.showModal} data= {this.state.selectedRow} close = {this.close}/>
      </React.Fragment>
    );
  }
}
