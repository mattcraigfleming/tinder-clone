import * as React from 'react';
import {MatchedContextProvider} from './context/MatchedContext';
import {ProfilesContextProvider} from './context/ProfilesContext';
import Navigator from './navigation/Navigator';

const App = () => {
  return (
    <ProfilesContextProvider>
      <MatchedContextProvider>
        <Navigator />
      </MatchedContextProvider>
    </ProfilesContextProvider>
  );
};

export default App;
