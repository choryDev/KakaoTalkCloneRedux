import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import NavComponent from './NavComponent';

class find extends Component {
  componentDidMount() {
    document.title = "find"
  }
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const MainComponent = (
      <main className="find">
        <section className="find__options">
          <div className="find__option">
            <i className="far fa-address-book fa-lg"></i>
            <span className="find__option-title"> Find</span>
          </div>
          <div className="find__option">
            <i className="fas fa-qrcode fa-lg"></i>
            <span className="find__option-title">QR Code</span>
          </div>
          <div className="find__option">
            <i className="fas fa-mobile-alt fa-lg"></i>
            <span className="find__option-title">Shake</span>
          </div>
          <div className="find__option">
            <i className="far fa-envelope fa-lg"></i>
            <span className="find__option-title">Invite via SMS</span>
          </div>
        </section>
        <section className="find__recomended">
          <header>
            <h6 className="recomended-title">Recomended Friends</h6>
          </header>
          <div className="recomended-none">
            <span className="recommended__text">You have no recomended friends.</span>
          </div>
        </section>
      </main>
    );
    return (
      <div>
        <HeaderComponent
          span1={<span className="header__text">Edit</span>}
          span2={"Find"}
        />
        {MainComponent}
        <NavComponent
          selected3={"tab-bar__tab--selected"} />
      </div >
    );
  }
}

export default find;