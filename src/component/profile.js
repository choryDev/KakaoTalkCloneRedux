import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import { connect } from "react-redux";
import { Route, Link } from 'react-router-dom';
import * as actions from "../actions";

class profile extends Component {
  componentDidMount() {
    document.title = "Profile"
  }
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      btnSwitch: true,
    };
    this.handleEditEmailBtn = this.handleEditEmailBtn.bind(this);
    this.handleEditSwitch = this.handleEditSwitch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleEditSwitch() {
    console.log(this.state.btnSwitch)
    this.setState({
      btnSwitch: !this.state.btnSwitch
    })
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }
  handleEditEmailBtn() {
    this.props.handleEnterEmail(this.state.inputValue);
    this.handleEditSwitch()
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
          {this.state.btnSwitch ?
            <div className="profile__action-email" >{info.email}</div>
            :
            <div>
              <input type="text" placeholder="email"
                onChange={this.handleChange} name="inputValue" value={this.state.inputValue}></input>
              <button onClick={this.handleEditEmailBtn}>확인</button>
            </div>}
          <div className="profile__actions">
            <div className="profile__action">
              <span className="profile__action-circle">
                <i className="fa fa-comment fa-2x"></i>
              </span>
              <span className="profile__action-title">My Chatroom</span>
            </div>
            <div onClick={this.handleEditSwitch} className="profile__action">
              <span className="profile__action-circle">
                <i className="fas fa-pencil-alt fa-2x"></i>
              </span>
              <span className="profile__action-title">Edit Profile</span>
            </div>
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
        {MainComponent(this.props.me.toJS())}
      </div >
    );
  }
}
const mapStateToProps = state => {
  return {
    me: state.me.get('me'),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleEnterEmail: (data) => {
      dispatch(actions.enteremail(data));
    }
  };
};

export default connect(
  mapStateToProps
  , mapDispatchToProps
)(profile);