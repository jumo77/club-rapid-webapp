import React from "react";

export default function StackHolderImTile({order1, order2, stack}) {

    let id = stack.id;

    return (
        <div key={id} className="row justify-content-center text-center product-holder h-100">
            <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                <img className="product-title" src={stack.title}/>
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

            <div className={`col-sm-12 col-md-6 order-${order2}`}>
                <img className="product-image" src={stack.img}/>
            </div>
        </div>
    )
}