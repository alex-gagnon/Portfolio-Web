import React, { Component } from "react"
import FadeIn from "react-fade-in"
import Lottie from "react-lottie"
import "bootstrap/dist/css/bootstrap.css"
import * as legoData from "../images/legoloading.json"
import * as doneData from "../images/doneloading.json"
import * as failData from "../images/failedloading.json"
import Portfolio from "./portfolio"

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

const defaultOptions3 = {
    loop: false,
    autoplay: true,
    animationData: failData.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
}

class Loading extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: undefined,
            done: undefined,
            offline: undefined
        }
    }

    componentDidMount() {        
        const controller = new AbortController()
        const { signal } = controller.signal
        
        setTimeout(() => controller.abort(), 10000)
        setTimeout(() => {
            // https://jsonplaceholder.typicode.com/posts
            // /api/v1/data
            fetch("https://jsonplaceholder.typicode.com/posts", { signal })
                .then(resp => resp.json())
                .then(json => {                    
                    this.setState({ loading: true })
                    setTimeout(() => {
                        this.setState({ done: true })
                    }, 1800)
                })
                .catch(e => {
                    console.log(e)
                    if (e.name === "AbortError") {
                        console.log("Fetch aborted")
                    } else {
                        console.warn(`API fetch error: ${e.message}`)
                    }
                    this.setState({ loading: true })
                    setTimeout(() => {
                        this.setState({ offline: true })
                    }, 1800)
                })
        }, 1000)
    }

    render() {
        console.log(`done: ${this.state.loading}`)
        console.log(`offline: ${this.state.offline}`)
        return (
            <div>
                {!this.state.done && !this.state.offline ? (                    
                <FadeIn>
                    <div className="d-flex justify-content-center align-items-center">
                        <h1>fetching data</h1>
                        {!this.state.loading ? (
                            <Lottie options={defaultOptions} height={120} width={120} />
                        ) : !this.state.offline ? (
                            <Lottie options={defaultOptions2} height={120} width={120} />
                        ) : (
                            <Lottie options={defaultOptions3} height={60} width={60} />
                        )}
                    </div>
                </FadeIn>
                ) : !this.state.offline ? (
                    <Portfolio />
                ) : (
                    <h2>App appears to be offline</h2>
                )}
            </div>
        )
    }
}

export default Loading