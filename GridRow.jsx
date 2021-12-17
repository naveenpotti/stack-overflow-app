import React from 'react';

class GridRow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        {this.props.records && this.props.records.length > 0
          ? this.props.records.map((i, index) => (
              <tr className="table-clickable-row" key={index} onClick={() => this.props.showDetails(i)}>
                <td>{index + 1}</td>
                <td>{i.score}</td>
                <td>{i.answers}</td>
                <td>{i.noOfViews}</td>
                <td>{i.tags.join(',')}</td>
                <td>{i.asked}</td>
              </tr>
            ))
          : (<tr>
              <td colSpan="6" className="no-result-text">No results found.</td>
          </tr>)}
      </React.Fragment>
    );
  }
}

export default GridRow;
