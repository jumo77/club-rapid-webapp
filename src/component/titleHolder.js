import React, {Component} from "react";

class TitleHolder extends Component{
    render() {
        return (
            <div className="row justify-content-center text-center">
                <div className="col-12">
                    <div className="title-wraper large">
                        {this.props.title}
                    </div>
                    <div className="brief-description">
                        {this.props.brief}
                    </div>
                </div>
            </div>
        )
    }
}

export default TitleHolder