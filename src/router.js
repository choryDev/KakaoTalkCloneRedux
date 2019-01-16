import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import index from './component/index'
import chats from './component/chats'
import find from './component/find'
import more from './component/more'
import chat from './component/chat'
import profile from './component/profile'
import friendprofile from './component/friendprofile'
import NotFound from './component/notFound'

const router = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={index} />
          <Route path="/chats" component={chats} />
          <Route path="/find" component={find} />
          <Route path="/more" component={more} />
          <Route path="/chat" component={chat} />
          <Route path="/profile" component={profile} />
          <Route path="/friendprofile" component={friendprofile} />
          <Route component={NotFound} />
          <Route />
        </Switch>
      </div>
    </Router>
  );
};

export default router;