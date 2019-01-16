import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import NavComponent from './NavComponent';
import { connect } from "react-redux";
import { Route, Link } from 'react-router-dom';
import * as actions from "../actions";

class chats extends Component {
  componentDidMount() {
    document.title = "chat"
  }
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeChatNumLi = this.handleChangeChatNumLi.bind(this);
  }
  handleChangeChatNumLi(num) {
    this.props.handleChangeChatNum(num)
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }
  render() {
    const chatListComponent = (obj) => (
      <li onClick={() => this.handleChangeChatNumLi(obj.toJS().idx)} className="chats__chat">
        <Link to="/chat">
          <div className="chats__content ">
            <img src={obj.toJS().picture} alt="" />
            <div className="chat__preview">
              <h3 className="chat__user">{obj.toJS().name}</h3>
              <span className="chat__last-message">
                {obj.get('chatList').get(obj.get('chatList').size - 1).toJS().content}
              </span>
            </div>
          </div>
          <span className="chat__date-time">
            {obj.get('chatList').get(obj.get('chatList').size - 1).toJS().date}
          </span>
        </Link >
      </li>
    )
    const MainComponent = (
      <main className="chats">
        < div className="search-bar">
          <i className="fas fa-search"></i>
          <input name="inputValue" onChange={() => this.handleChange} value={this.state.inputValue}
            type="text" placeholder="Find friends, chats, Plus Friends" />
        </div>
        <ul className="chats__list">
          {this.props.friendsList.map((obj, i) => {
            if (obj.get('chatList').get(0) === undefined) {
              return (
                <div></div>
              )
            } else if (obj.toJS().name.includes(this.state.inputValue)) {
              return (
                chatListComponent(obj)
              )
            }
          })}
        </ul>
        <div className="chat-btn">
          <i className="fa fa-comment"></i>
        </div>
      </main>
    )
    return (
      <div>
        <HeaderComponent
          span1={<span className="header__text">Edit</span>}
          span2={"chats"}
          span3={<i className="fa fa-caret-down"></i>} />
        {MainComponent}
        <NavComponent
          selected2={"tab-bar__tab--selected"}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    friendsList: state.friend.get('friends')
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleChangeChatNum: (num) => {
      dispatch(actions.changechatnum(num));
    }
  };
};

export default connect(
  mapStateToProps
  , mapDispatchToProps
)(chats);
