
import React from 'react';

class RowDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  getTagLink = (tag, link)=> {
      return (
          <React.Fragment>
              <a href={link} target="_blank">{tag} </a>
          </React.Fragment>
      )
  }
  render() {
    return (
      <React.Fragment>
        <div
          id="myModal"
          className={'modal'+ (this.props.show ? ' show' : ' fade')}
          role="dialog"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" onClick={() => this.props.close()}>
                  &times;
                </button>
                <h4 className="modal-title">Details</h4>
              </div>
              <div className="modal-body">
                  {
                      this.props.data ? (<React.Fragment>
                        <div className="row">
                            <div className="col-xs-3 label">Id</div>
                            <div className = "col-xs-9">{this.props.data.id}</div>
                        </div>
                        <div className="row">
                            <div className="col-xs-3 label">Title</div>
                            <div className = "col-xs-9">{this.props.data.title}</div>
                        </div>
                        <div className="row">
                            <div className="col-xs-3 label">Score</div>
                            <div className = "col-xs-9">{this.props.data.score}</div>
                        </div>
                        <div className="row">
                            <div className="col-xs-3 label">Answers</div>
                            <div className = "col-xs-6">{this.props.data.answers}</div>
                        </div>
                        <div className="row">
                            <div className="col-xs-3 label">Number Of Views</div>
                            <div className = "col-xs-9">{this.props.data.noOfViews}</div>
                        </div>
                        <div className="row">
                            <div className="col-xs-3 label">Tags</div>
                            <div className = "col-xs-9">
                                {this.props.data.tags ? this.props.data.tags.map(x => this.getTagLink(x, this.props.data.link)): null}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-3 label">Asked</div>
                            <div className = "col-xs-9">{this.props.data.asked}</div>
                        </div>
                      </React.Fragment>) : null
                  }
                
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  onClick={() => this.props.close()}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RowDetails;
