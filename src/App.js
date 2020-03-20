import React from 'react';
import './App.css';
import HomePage from './Pages/Homepage/homepage.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './Pages/Shop/shop';
import Header from './components/Header/header';
import SignInAndSignUpPage from './Pages/Sign-in-and-sign-out/sign-in-and-sign-out';
import CheckOutPage from './Pages/Checkout/checkout';


import {connect} from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import {createStructuredSelector} from 'reselect';




class App extends React.Component{
 
unsubscribeFromAuth = null;


   componentDidMount () {
      const { checkUserSession } = this.props
      checkUserSession();
  }

  componentWilUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
  return (
    <div>
      <Header/>
      <Switch>
    <Route exact path ='/' component={HomePage}/>
    <Route  path ='/shop' component={ShopPage}/>
    <Route exact path ='/checkout' component={CheckOutPage}/>
    <Route exact path ='/signin' 
    render={() => 
      this.props.currentUser ? (
    <Redirect to ='/'/>
    ): (
      <SignInAndSignUpPage />
    )
    }
    />
    
      </Switch>
     
    </div>
  );
}
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
}); 

const mapDispatchToProps = dispatch =>({
  checkUserSession: () =>dispatch(checkUserSession())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
