//libraries 
import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'

//modules
import AppView from './views/appView'
import User from './models/userModel'

const app = function() {
  const AppRouter = Backbone.Router.extend({
    routes: {
      "home": "renderHomeView",
      "login": "renderLoginView",
      "choose-request": "renderChooseRequestView",
      "my-reports": "renderMyReportsPage",
      "request/:reportType": "renderRequestView",
      "*default": "redirect"
    },

    renderChooseRequestView: function() {
      console.log('merr?')
      ReactDOM.render(<AppView page="ChooseRequestPage" />, document.querySelector('.container'))
    },

    renderLoginView: function() {
      ReactDOM.render(<AppView page="LoginPage" />, document.querySelector('.container'))
    },

    renderHomeView: function() {
      ReactDOM.render(<AppView page="HomePage" />, document.querySelector('.container'))
    },

    renderMyReportsPage: function() {
      ReactDOM.render(<AppView page="MyReportsPage" />, document.querySelector('.container'))
    },

    renderRequestView: function(reportType) {
      ReactDOM.render(<AppView reportType={reportType} page="RequestPage" />, document.querySelector('.container'))
    },

    redirect: function() {
      location.hash = "home"
    },

    initialize: function() {
      var checkAuth = ()=> {
        if (!User.getCurrentUser()) {
          location.hash = 'login'
        }
      }
      checkAuth()
      this.on('route', checkAuth)
      Backbone.history.start()
      console.log(User.getCurrentUser())
    }
  })
  new AppRouter

}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..