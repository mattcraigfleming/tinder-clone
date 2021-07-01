import React, {useState, useContext} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {generateMockData} from './mockData';
import SwipeCard from './components/SwipeCard';
import {ProfilesContextProvider} from './context/ProfilesContext';

const MOCKDATA_INDEX = 10;

const App = () => {
  const [profiles] = useState(generateMockData(MOCKDATA_INDEX));
  const [profileIndex, setProfileIndex] = useState(0);

  const nextCard = () => {
    setProfileIndex(profileIndex + 1);
  };

  // console.log(profileIndex, MOCKDATA_INDEX);

  return (
    <SafeAreaView>
      <ProfilesContextProvider>
        {profiles.map(profile => (
          <SwipeCard profile={profile} key={profile.id} onSwipeOff={nextCard} />
        ))}
      </ProfilesContextProvider>
    </SafeAreaView>
  );
};

export default App;
