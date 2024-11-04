import React, {useEffect, useState} from 'react';


import Structure from "../component/holder/Structure";
import {apiUrl} from "../component/apiUrl";

export default function Main() {

    const [res, setRes] = useState([]);

    useEffect(() => {


        fetch(apiUrl+"maindata", {
            "content-type": "application/json"
        })
            .then(res => res.json())
            .then((x) => setRes(x));
    }, []);

    return (
        <section className="internal-page-wrapper">
            <div className="container">

                {
                    res && res.map(data => (
                        <Structure data={data} key={data.id}/>
                    ))
                }
            </div>
        </section>
    );

}