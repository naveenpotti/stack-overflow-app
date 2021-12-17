import React from 'react';
import GridRow from './GridRow';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <table width="100%" className="table table-hover">
          <thead>
            <tr>
              <td>Sl. No</td>
              <td>Score</td>
              <td>Answers</td>
              <td>Number of views</td>
              <td>Tags</td>
              <td>Asked/Answer time for each question</td>
            </tr>
          </thead>
          <tbody>
            <GridRow records={this.props.data} showDetails = {this.props.showDetails}/>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default SearchResults;
