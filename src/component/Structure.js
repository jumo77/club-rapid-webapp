import React, {Component } from 'react';

class Structure extends Component {
  
    render() { 
        const {id, title, brief, img} = this.props.data;
        return (
			<section className="structure-wrapper" style={{backgroundImage: `url(${img})`}}>
            <div className="container" key={id}>
			<div className="title-wraper bold">
				{title}
			</div> 

			<div className="description-wrapper">
				{brief}
			</div>


			<div className="links-wrapper">
			</div>
			</div>
			</section>
        );
    }
}
 
export default Structure;