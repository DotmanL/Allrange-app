import React, {useEffect, lazy, Suspense} from 'react';
import { GlobalStyle } from './global.styles';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header/header';
//import Navigate from './components/navbar/navbar';
import {connect} from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import {createStructuredSelector} from 'reselect';
import Spinner from './components/spinner/spinner';
import ErrorBoundary from './components/error-boundary/error-boundary';
import './App.css';

const HomePage = lazy(() => import ('./Pages/Homepage/homepage.component'))
const Dashboard = lazy(() => import ('./Pages/Dashboard/dashboard'))
const ShopPage = lazy(() => import ('./Pages/Shop/shop'))
const CheckOutPage = lazy(() => import ('./Pages/Checkout/checkout'))
const ContactPage = lazy(() => import ('./Pages/ContactPage/contact'))
const SignInAndSignUpPage = lazy(() => import ('./Pages/Sign-in-and-sign-up/sign-in-and-sign-up'))


const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]);


 
  return (
    <div>
      <GlobalStyle />
      
      <Header/>
     
      <Switch>
        <ErrorBoundary>
      <Suspense fallback= {<Spinner />}>
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
     </Suspense>
     </ErrorBoundary>
     
   
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
