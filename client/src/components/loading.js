import React, { Component } from "react"
import FadeIn from "react-fade-in"
import Lottie from "react-lottie"
import "bootstrap/dist/css/bootstrap.css"
import * as legoData from "../__images__/loading/legoloading.json"
import * as doneData from "../__images__/loading/doneloading.json"
import * as failData from "../__images__/loading/failedloading.json"
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
            offline: undefined,
            data: undefined
        }
    }

    componentDidMount() {        
        const controller = new AbortController()
        const { signal } = controller.signal
        
        setTimeout(() => controller.abort(), 10000)
        setTimeout(() => {
            fetch("/api/v1/data", { signal })
                .then(resp => resp.json())
                .then(json => {                    
                    this.setState({ loading: true, data: json })
                    setTimeout(() => {
                        this.setState({ done: true })
                    }, 1200)
                })
                .catch(e => {
                    if (e.name === "AbortError") {
                        console.log("Fetch aborted")
                    } else {
                        console.warn(`API fetch error: ${e.message}`)
                    }
                    this.setState({ loading: true })
                    setTimeout(() => {
                        this.setState({ offline: true })
                    }, 1200)
                })
        }, 1000)
    }

    render() {
        return (
            <div>
                {!this.state.done && !this.state.offline ? (                    
                <FadeIn className="loading-container">
                    <div className="d-flex justify-content-center align-items-center">
                        <h1>fetching user data</h1>
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
                    <Portfolio data={this.state.data} />
                ) : (
                    <h2>App appears to be offline</h2>
                )}
            </div>
        )
    }
}

export default Loading