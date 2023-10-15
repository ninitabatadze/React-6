import React, { Component, Fragment } from "react";

class footer extends Component {
  render() {
    return (
      <Fragment>
        <footer className="bg-dark text-center text-lg-start bottom-5 position-fixed w-100">

          <div className="text-center p-3" style={{ background: "rgba(0, 0, 0, 0.2)" }}>

            <p className="text-white" href="https://github.com/ninitabatadze">   © 2023 Copyright: Nini Tabatadze</p>
          </div>

        </footer>
      </Fragment>
    )
  }
}
export default footer