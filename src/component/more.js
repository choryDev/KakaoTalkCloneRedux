import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import NavComponent from './NavComponent';
import moreArray from './moreArray';

import { connect } from "react-redux";

class more extends Component {
  componentDidMount() {
    document.title = "More"
  }
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const OptionComponenet = (
      <section className="more__options">
        {moreArray.options.toJS().map(obj => {
          return (
            <div className="more__option">
              {obj.icon}
              <span className="more-option_title">{obj.title}</span>
            </div>
          )
        })}
      </section>
    )
    const PlusFriendComponent = (
      <section className="more__plus-friends">
        <header className="plus-friends__header">
          <h2 className="plus-friends__title">Plus Friends.</h2>
          <span className="plus-friends__learn-more">
            <i className="fas fa-info-circle"></i>
            Learn More
    </span>
        </header>
        <div className="plus-friends__items">
          {moreArray.plusfriend.toJS().map(obj => {
            return (
              <div className="plus-friends__item">
                {obj.icon}
                <span className="plus-friends__item-title">{obj.title}</span>
              </div>
            )
          })}
        </div>
      </section>
    )
    const MoreOption = (
      <section className="more__links">
        {moreArray.moreoptions.toJS().map(obj => {
          return (
            <div className="more__option">
              {obj.icon}
              <span className="more__options-title">{obj.title}</span>
            </div>
          )
        })}
      </section>
    )
    const MainComponent = (item) => (
      <main className="more">
        <header className="more__header">
          <div className="more-header__column">
            <img src={item.picture} alt="" />
            <div className="more-header__info">
              <h3 className="more-header__title">
                {item.name}
              </h3>
              <span className="more-header__subtitle">
                {item.email}
              </span>
            </div>
          </div>
          <i className="far fa-comment fa-2x"></i>
        </header>
        {OptionComponenet}
        {PlusFriendComponent}
        {MoreOption}
      </main>
    )

    return (
      <div>
        <HeaderComponent span2={"More"} span4={<i className="fa fa-cog fa-lg"></i>}
        />
        {MainComponent(this.props.me.toJS())}
        <NavComponent selected4={"tab-bar__tab--selected"} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    me: state.me.get('me'),
  };
};

export default connect(
  mapStateToProps
)(more);