/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View } from 'react-native'
import GoogleSignIn from './Auth';
import * as store from './Store'
import Groups from './Groups';


function App(): JSX.Element {
  const { user } = store.getData();
  return (
    <View>
      if (!user)
        <GoogleSignIn/>
      <Groups uid = {user}/>
    </View>
  )
}

export default App;
