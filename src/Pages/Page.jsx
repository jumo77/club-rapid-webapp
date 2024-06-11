import React, { Component } from 'react'
import StackHolderImTitle from "../component/StackHolderImTitle";
import TitleHolder from "../component/titleHolder";
import StackHolder from "../component/StackHolder";

class Page extends Component {
    constructor(){
        super();
        this.state = {
            stacks: []
        }
    }
    componentDidMount(){
        fetch("https://api.club-named-rapid.xyz"+this.props.url,{
            "content-type": "application/json"
        })
            .then(res => res.json())
            .then((x)=>{
                this.setState((state)=>{
                    return {
                        stacks: x
                    };
                });
            })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        fetch("https://api.club-named-rapid.xyz"+this.props.url,{
            "content-type": "application/json"
        })
            .then(res => res.json())
            .then((x)=>{
                this.setState((state)=>{
                    return {
                        stacks: x
                    };
                });
            })
    }

    render() {
        let order = 1;
        return (
            <section className="internal-page-wrapper">
                <div className="container">
                    <TitleHolder title={this.props.title} brief={this.props.brief} />
                    {
                        this.state.stacks&&this.state.stacks.map((stack) => {
                            let order1 = 1;
                            let order2 = 2;
                            if(order !== 1)	{
                                order1 = 2;
                                order2 = 1;
                                order--;
                            }else{
                                order++;
                            }
                            if (this.props.url==="/mobile") {
                                return <StackHolderImTitle key={stack.id} stack={stack} order1={order1} order2={order2}/>;
                            }else {
                                return <StackHolder key={stack.id} stack={stack} order1={order1} order2={order2}/>;
                            }
                        })
                    }
                </div>
            </section>
        )
    }
}

export default Page
