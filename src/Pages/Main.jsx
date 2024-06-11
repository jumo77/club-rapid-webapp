import React, { Component } from 'react';


import Structure from "../component/Structure";


class Main extends Component {
    constructor() {
        super();
        this.state={
            datas: []
        }
    }

    componentDidMount() {
        fetch("https://api.club-named-rapid.xyz/maindata",{
            "content-type": "application/json"
        })
            .then(res => res.json())
            .then((x)=>{
                this.setState((state)=>{
                    return {
                        datas: x
                    };
                });
            });
    }

    render(){
        return (
	<section className="internal-page-wrapper">
		<div className="container">

                {
                    this.state.datas&&this.state.datas.map(data=> (
                        <Structure data={data} key={data.id}/>
                    ))
                }
		</div>
        </section>
	);
    }

}

export default Main;
