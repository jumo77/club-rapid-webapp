import React, {Component} from "react";
import {Link} from "react-router-dom";

class StackHolderImTile extends Component{

    render() {
        const stack = this.props.stack;
            let id = stack.id;
            let productPage = "/"+stack.category+"/"+id;



        let productDiv =
            <div key={id} className="row justify-content-center text-center product-holder h-100">
                <div className={`col-sm-12 col-md-6 my-auto order-${this.props.order1}`}>
                    <div className="product-title">
                        <img src={stack.title}/>
                    </div>
                    <br/>
                    <div className="description-wraper">
                        {stack.brief}
                    </div>
                    <div className="links-wrapper">
                        <ul>
                            <li>
                                <a href={stack.url}>강의 보기</a>
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

export default StackHolderImTile
