import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import NavComponent from './NavComponent';
import avatar from '../images/avatar.jpg';
import { connect } from "react-redux";
import { Route, Link } from 'react-router-dom';
import * as actions from "../actions";

class index extends Component {
  componentDidMount() {
    document.title = "index"
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
    console.log(num)
    this.props.handleChangeChatNum(num)
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const UserprofileComponent = item => (
      <div onClick={() => this.handleChangeChatNumLi(item.idx)} className="friends__section-row with-tagline">
        <div className="friends__section-column">
          <Link to="/friendprofile">
            <img src={item.picture} alt="" />
          </Link>
          <span className="friends__section-name">{item.name}</span>
        </div>
        <span className="friedns__section-tagline">
          {item.message}
        </span>
      </div>
    )
    const searchComponent = (
      < main className="friends">
        < div className="search-bar">
          <i className="fas fa-search"></i>
          <input onChange={this.handleChange}
            name="inputValue" type="text" placeholder="Find friends, chats, Plus Friends" value={this.state.inputValue} />
        </div>
      </main>)
    const myprofileComponent = (info) => (
      <section className="friends__section">
        <header className="friends__section-header">
          <h6 className="friends__section-title">My Profile</h6>
        </header>
        <div className="friends__section-rows">
          <div className="friends__section-row">
            <img src={info.toJS().picture} alt="" />
            <a href="./profile" className="friends__section-name">
              {info.toJS().name}
            </a>
          </div>
          <div className="friends__section-row">
            <img src={avatar} alt="" />
            <span className="friends__section-name">Friends'Names Display</span>
          </div>
        </div>
      </section>
    )
    const friendProfleComponent = (
      <section className="friends__section">
        <header className="friends__section-header">
          <h6 className="friends__section-title">Friends</h6>
        </header>
        <div className="friends__section-rows">
          {this.props.friendsList.toJS()
            .filter(m => m.name.includes(this.state.inputValue))
            .map(item => {
              return (
                UserprofileComponent(item)
              )
            })}
        </div>
      </section>
    )
    return (
      <div>
        <HeaderComponent span1={<span className="header__text">Edit</span>}
          span2={"Friends"}
          span3={<span className="header__number">1</span>}
          span4={<i className="fa fa-cog fa-lg"></i>} />

        {searchComponent}
        {myprofileComponent(this.props.me)}

        {friendProfleComponent}
        <NavComponent
          selected1={"tab-bar__tab--selected"}
        />
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    me: state.me.get('me'),
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
)(index);
