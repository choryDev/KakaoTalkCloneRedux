import React, { Component } from 'react';
import '../styles/style.css';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      d: new Date()
    };
  }

  componentDidMount() {
    this.timeID = setInterval(
      () => this.Change(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timeID)
  }

  Change = () => {
    this.setState({
      d: new Date(),
    })
  }

  render() {
    const { span1, span2, span3, span4, span5, topheadertitle } = this.props;
    const topheader = `top-header ${topheadertitle}`
    return (
      <div className={topheader}>
        <div className="header__top">
          <div className="header__column">
            <i className="fas fa-fighter-jet"></i>
            <i className="fas fa-wifi"></i>
          </div>
          <div className="header__column">
            <span className="header__time">
              {this.state.d.getHours()}:{this.state.d.getMinutes()}:{this.state.d.getSeconds()}
            </span>
          </div>
          <div className="header__column">
            <i className="fas fa-moon"></i>
            <i className="fab fa-bluetooth-b"></i>
            <span className="header__battery">66%
        <i className="fas fa-battery-full"></i>
            </span>
          </div>
        </div>
        <div className="header__bottom">
          <div className="header__column">
            {span1}
          </div>
          <div className="header__column">
            <span className="header__text">{span2}{span3}</span>
          </div>
          <div className="header__column">
            {span4}{span5}
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderComponent;