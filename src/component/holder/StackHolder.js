
export default function StackHolder({stack, order1, order2}) {

    return <div id={stack.id} className="row justify-content-center text-center product-holder h-100">
        <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>

            <div className="product-title">
                {stack.title}
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

        <div className={`col-sm-12 col-md-6 order-${order2}`}>
            <div className="prodict-image">
                <img src={stack.img}/>
            </div>
        </div>
    </div>;

}