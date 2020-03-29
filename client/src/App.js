import React, {useEffect} from 'react';
import { GlobalStyle } from './global.styles';
import HomePage from './Pages/Homepage/homepage.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './Pages/Shop/shop';
import Header from './components/Header/header';
import SignInAndSignUpPage from './Pages/Sign-in-and-sign-up/sign-in-and-sign-up';
import CheckOutPage from './Pages/Checkout/checkout';


import {connect} from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import {createStructuredSelector} from 'reselect';
import Dashboard from './Pages/Dashboard/dashboard';
import ContactPage from './Pages/ContactPage/contact';




const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]);


 
  return (
    <div>
      <GlobalStyle />
      <Header/>
      <Switch>
    <Route exact path ='/' component={HomePage}/>
    <Route  path ='/shop' component={ShopPage}/>
    <Route  path ='/myprofile' component={Dashboard}/>
    <Route  path ='/contactus' component={ContactPage}/>
 
    <Route exact path ='/checkout' component={CheckOutPage}/>
    <Route exact path ='/signin' 
    render={() => 
      currentUser ? (
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
