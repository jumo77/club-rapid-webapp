import React, {Component} from "react";
import {Link} from "react-router-dom";

class StackHolder extends Component{

    render() {
        const stack = this.props.stack;
        let id = stack.id;

        let productDiv =
            <div className="row justify-content-center text-center product-holder h-100">
                <div className={`col-sm-12 col-md-6 my-auto order-${this.props.order1}`}>

                    <div className="product-title">
                        { stack.title}
                    </div>
                    <div className="description-wraper">
                        {stack.brief}
                    </div>


                    <div className="links-wrapper">
                        <ul>
                            <li>
                                <a href={stack.url}>강의보기</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div  className={`col-sm-12 col-md-6 order-${this.props.order2}`}>
                    <div className="prodict-image">
                        <img src={stack.img}/>
                    </div>
                </div>
            </div>
        ;

        return productDiv;
    }
}

export default StackHolder
