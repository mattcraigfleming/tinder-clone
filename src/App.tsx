import * as React from 'react';
import {View} from 'react-native';
import {ProfilesContextProvider} from './context/ProfilesContext';
import Navigator from './navigation/Navigator';

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ProfilesContextProvider>
        <Navigator />
      </ProfilesContextProvider>
    </View>
  );
};

export default App;
