import React, { useEffect } from 'react';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { HomePage } from "./pages/homepage/homepage";
import { createStructuredSelector } from "reselect";
import {selectCurrentUser} from "./redux/user/user.selector"

import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions"

import  Shop  from "./pages/shop/shop";
import "./App.css"
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import Header from './components/header/header'
import Login from "./pages/login/login";
import Checkout from "./pages/checkout/checkout";
//import { selectCollectionsForPreview } from "./redux/shop/shop.selector";
import collectionItem from './components/collection-item/collection-item';

function App({ setCurrentUser, currentUser}) {
  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(Snapshot => {
          setCurrentUser({
            id: Snapshot.id,
            ...Snapshot.data()
          })
        });
      }
      setCurrentUser(userAuth);
      //addCollectionAndDocuments('collections',collectionArray.map( ({title, items})=>({title, items}) ));
    });
  }, []);


  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/login"
            render={() => currentUser ? (<Redirect to='/' />) : (<Login />)}
          />
        </Switch>

      </BrowserRouter>

    </div>
  );
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  //collectionArray:selectCollectionsForPreview
});

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
