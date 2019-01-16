import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import { connect } from "react-redux";
import { Route, Link } from 'react-router-dom';

class profile extends Component {
  componentDidMount() {
    document.title = "Profile"
  }
  constructor(props) {
    super(props);
    this.state = {
    };

  }
  render() {
    const MainComponent = (info) => (
      <main className="profile">
        <header className="profile__header">
          <div className="profile__header-container">
            <img src={info.picture} alt="" />
            <h3 className="profile__header-title">{info.name}</h3>
          </div>
        </header>
        <div className="profile__container">
          <div className="profile__action-email" >{info.message}</div>
          <div className="profile__actions">
            <Link to="/chat" className="profile__action">
              <span className="profile__action-circle">
                <i className="fa fa-comment fa-2x"></i>
              </span>
              <span className="profile__action-title">Chatroom</span>
            </Link >
          </div>
        </div>
      </main>

    )
    return (
      <div>
        <HeaderComponent
          span1={
            <Link to="/">
              <i className="fa fa-times fa-lg"></i>
            </Link>}
          span4={<i className="fa fa-user fa-lg"></i>}
          topheadertitle="top-header--transparent"
        />
        {this.props.friendsList.map(obj => {
          if (obj.toJS().idx === this.props.chatNumber) {
            return (MainComponent(obj.toJS()))
          }
        })}
      </div >
    );
  }
}
const mapStateToProps = state => {
  return {
    friendsList: state.friend.get('friends'),
    chatNumber: state.me.get('chatNumber')
  };
};

export default connect(
  mapStateToProps
)(profile);