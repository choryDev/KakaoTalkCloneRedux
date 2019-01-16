import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import { Route, Link } from 'react-router-dom';

import { connect } from "react-redux";
import * as actions from "../actions";

class chat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      d: new Date(),
      chatNum: this.props.chatNumber
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    document.title = "Chat";
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
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }
  handleClickMic = (e) => {
    console.log(this.state.chatNum)
    this.props.handleEnterChat(this.state.inputValue, this.state.chatNum, ` ${this.state.d.getHours()}:${this.state.d.getMinutes()}`);
    this.setState({
      inputValue: ""
    })
  }
  render() {
    const MessageFromMe = (chat) => (
      <div>
        <div className="chat__message chat__message--from-me">
          <span className="chat__message-time"> {chat.date}</span>
          <span className="chat__message-body">
            {chat.content}
          </span>
        </div>
      </div>
    )
    const MessageToMe = (info, chat) => (
      <div>
        <div className="chat__message chat__message--to-me">
          <img className="chat__message-avatar" src={info.toJS().picture} alt="" />
          <div className="chat__message-center">
            <h3 className="chat__message-username">{info.toJS().name}</h3>
            <span className="chat__message-body">
              {chat.content}
            </span>
          </div>
          <span className="chat__message-time"> {chat.date}</span>
        </div>
      </div>
    );
    const MainComponent = (
      <main className="chat">
        <div className="date-divider">
          <span className="date-divider__text">Wensday, August 2, 2017</span>
        </div>
        {this.props.friendsList.get(this.state.chatNum).get('chatList').toJS().map((obj) => {
          if (obj.who === "me") {
            return (MessageFromMe(obj))
          } else {
            return (MessageToMe(this.props.friendsList.get(this.state.chatNum), obj))
          }
        })
        }
      </main>
    )
    const typemessageComponent = (
      <div className="type-message">
        <i className="fas fa-plus fa-lg"></i>
        <div className="type-message__input">
          <input onChange={this.handleChange} value={this.state.inputValue} name="inputValue" type="text" />
          <i className="far fa-smile fa-lg"></i>
          <span className="record-message" onClick={this.handleClickMic}>
            <i className="fas fa-microphone fa-lg" ></i>
          </span>
        </div>
      </div>
    )
    return (
      <div className="body-chat">
        <HeaderComponent
          span1={
            <Link to="/chats">
              <i className="fa fa-chevron-left fa-lg"></i>
            </Link>
          }
          span2={"Chat"}
          span4={<i className="fa fa-search"></i>}
          span5={<i className="fa fa-bars"></i>}
          topheadertitle="chat-header"
        />
        {MainComponent}
        {typemessageComponent}
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

const mapDispatchToProps = dispatch => {
  return {
    handleEnterChat: (chat, index, date) => {
      dispatch(actions.enterchat(chat, index, date));
    }
  };
};

export default connect(
  mapStateToProps
  , mapDispatchToProps
)(chat);
