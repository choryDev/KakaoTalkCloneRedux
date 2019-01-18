import React from 'react';
import { Map, List } from "immutable";
import kakaostory from '../images/kakaostory.jpg';
import path from '../images/path.jpeg';
import ryan from '../images/ryan.jpeg';
const moreArray = {
  options: List([
    Map({
      title: "Emoticons",
      icon: <i className="far fa-smile fa-2x"></i>
    }),
    Map({
      title: "Themes",
      icon: <i className="fas fa-drafting-compass fa-2x"></i>
    }),
    Map({
      title: "Plus Friend",
      icon: <i className="far fa-handshake fa-2x"></i>
    }),
    Map({
      title: "Account",
      icon: <i className="far fa-user-circle fa-2x"></i>
    }),
  ]),
  plusfriend: List([
    Map({
      title: "Order",
      icon: <i className="fas fa-utensils"></i>
    }),
    Map({
      title: "Store",
      icon: <i className="fas fa-home"></i>
    }),
    Map({
      title: "TV Channel",
      icon: <i className="fas fa-tv"></i>
    }),
    Map({
      title: "Creation",
      icon: <i className="fas fa-pencil-alt"></i>
    }),
    Map({
      title: "Education",
      icon: <i className="fas fa-user-graduate"></i>
    }),
    Map({
      title: "Politics/Society",
      icon: <i className="fas fa-university"></i>
    }),
    Map({
      title: "Finance",
      icon: <i className="fas fa-won-sign"></i>
    }),
    Map({
      title: "Movies/Music",
      icon: <i className="fas fa-video"></i>
    }),
  ]),
  moreoptions: List([
    Map({
      title: "Kakao Story",
      icon: <img src={kakaostory} alt="" className="more__options-image" />
    }),
    Map({
      title: "Path",
      icon: <img src={path} alt="" className="more__options-image" />
    }),
    Map({
      title: "Kakao Friend",
      icon: <img src={ryan} alt="" className="more__options-image" />
    }),
  ]),
};

export default moreArray;