import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Footer from "./footer";

class App extends Component {
    constructor() {
        super();
        this.state = {
            name: ""
        }
    }

    function = () => {
        this.setState({ name: "გამარჯობა მსოფლიო" }, () => {
            window.alert(this.state.name);
        })
            ;

    }

    render() {

        const centerStyle = {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",


        };

        return (
            <Fragment>
                <Header />
                <div className="d-flex align-items-center justify-content-center" style={{ height: "70vh" }}>
                    <button type="button" className="btn btn-danger" onClick={this.function}>დააკლიკე</button>
                </div>
                <Footer />
            </Fragment>
        );
    }
}

var root = document.getElementById("root");
ReactDOM.render(<App />, root);
