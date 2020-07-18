import React, { Component } from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.css";
import * as legoData from "./images/legoloading.json";
import * as doneData from "./images/doneloading.json"


const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: legoData.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
}

const defaultOptions2 = {
    loop: false,
    autoplay: true,
    animationData: doneData.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
}

class Loading extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: undefined,
            done: undefined
        }
    }

    componentDidMount() {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then(resp => resp.json())
                .then(json => {                    
                    this.setState({ loading: true })
                    setTimeout(() => {
                        this.setState({ done: true })
                    }, 1000)
                })
        }, 1200)
    }

    render() {
        return (
            <div>
                {!this.state.done ? (                    
                <FadeIn>
                    <div className="d-flex justify-content-center align-items-center">
                        <h1>fetching data</h1>
                        {!this.state.loading ? (
                            <Lottie options={defaultOptions} height={120} width={120} />
                        ) : (
                            <Lottie options={defaultOptions2} height={120} width={120} />
                        )}
                    </div>
                </FadeIn>
                ) : (
                    <h1>Hello</h1>
                )}
            </div>
        )
    }
}


export default Loading;