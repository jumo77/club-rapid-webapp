import React, {useEffect, useState} from 'react'
import StackHolderImTitle from "../component/holder/StackHolderImTitle";
import TitleHolder from "../component/holder/TitleHolder";
import StackHolder from "../component/holder/StackHolder";
import {mobile, apiUrl} from "../component/apiUrl";

export default function Page({title, url, brief}) {

    const [stacks, setStacks] = useState([]);

    useEffect(() => {
        fetch(apiUrl + url, {
            "content-type": "application/json"
        })
            .then(res => res.json())
            .then(x => setStacks(x))
    }, [url]);

    let order = 1;
    return (
        <section className="internal-page-wrapper">
            <div className="container">
                <TitleHolder title={title} brief={brief}/>
                {
                    stacks && stacks.map((stack) => {
                        let order1 = 1;
                        let order2 = 2;
                        if (order !== 1) {
                            order1 = 2;
                            order2 = 1;
                            order--;
                        } else {
                            order++;
                        }
                        if (url === mobile) {
                            return <StackHolderImTitle key={stack.id} stack={stack} order1={order1} order2={order2}/>;
                        } else {
                            return <StackHolder key={stack.id} stack={stack} order1={order1} order2={order2}/>;
                        }
                    })
                }
            </div>
        </section>
    )

}