import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import NavComponent from './NavComponent';
import avatar from '../images/avatar.jpg';
import kakaostory from '../images/kakaostory.jpg';
import path from '../images/path.jpeg';
import ryan from '../images/ryan.jpeg';
import { connect } from "react-redux";

class more extends Component {
componentDidMount() {
document.title = "More"
}
constructor(props) {
super(props);
this.state = {};
}
render() {
const OptionComponenet=(
<section className="more__options">
  <div className="more__option">
    <i className="far fa-smile fa-2x"></i>
    <span className="more-option_title">Emoticons</span>
  </div>
  <div className="more__option">
    <i className="fas fa-drafting-compass fa-2x"></i>
    <span className="more-option_title">Themes</span>
  </div>
  <div className="more__option">
    <i className="far fa-handshake fa-2x"></i>
    <span className="more-option_title">Plus Friend</span>
  </div>
  <div className="more__option">
    <i className="far fa-user-circle fa-2x
          "></i>
    <span className="more-option_title">Account</span>
  </div>
</section>
)
const PlusFriendComponent=(
<section className="more__plus-friends">
  <header className="plus-friends__header">
    <h2 className="plus-friends__title">Plus Friends.</h2>
    <span className="plus-friends__learn-more">
      <i className="fas fa-info-circle"></i>
      Learn More
    </span>
  </header>
  <div className="plus-friends__items">
    <div className="plus-friends__item">
      <i className="fas fa-utensils"></i>
      <span className="plus-friends__item-title">Order</span>
    </div>
    <div className="plus-friends__item">
      <i className="fas fa-home"></i>
      <span className="plus-friends__item-title">Store</span>
    </div>
    <div className="plus-friends__item">
      <i className="fas fa-tv"></i>
      <span className="plus-friends__item-title">TV Channel</span>
    </div>
    <div className="plus-friends__item">
      <i className="fas fa-pencil-alt"></i>
      <span className="plus-friends__item-title"> Creation</span>
    </div>
    <div className="plus-friends__item">
      <i className="fas fa-user-graduate"></i>
      <span className="plus-friends__item-title">Education</span>
    </div>
    <div className="plus-friends__item">
      <i className="fas fa-university"></i>
      <span className="plus-friends__item-title">Politics/Society</span>
    </div>
    <div className="plus-friends__item">
      <i className="fas fa-won-sign"></i>
      <span className="plus-friends__item-title">Finance</span>
    </div>
    <div className="plus-friends__item">
      <i className="fas fa-video"></i>
      <span className="plus-friends__item-title">Movies/Music</span>
    </div>
  </div>
</section>
)
const MoreOption=(
<section className="more__links">
    <div className="more__option">
      <img src={kakaostory} alt="" className="more__options-image"/>
      <span className="more__options-title">Kakao Story</span>
      </div>
    <div className="more__option">
      <img src={path} alt="" className="more__options-image"/>
      <span className="more__options-title">Path</span>
      </div>
    <div className="more__option">
      <img src={ryan} alt="" className="more__options-image"/>
      <span className="more__options-title">Kakao Friend</span>
      </div>
 </section>
)
const MainComponent=(item) => (
<main  className="more">
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