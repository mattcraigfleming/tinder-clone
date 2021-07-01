import React, {useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {generateMockData} from './mockData';
import SwipeCard from './components/SwipeCard';

const MOCKDATA_INDEX = 2;

const App = () => {
  const [profiles] = useState(generateMockData(MOCKDATA_INDEX));
  const [profileIndex, setProfileIndex] = useState(0);

  const nextCard = () => {
    setProfileIndex(profileIndex + 1);
  };

  console.log(profileIndex, MOCKDATA_INDEX);

  return (
    <SafeAreaView>
      {profiles.map(profile => (
        <SwipeCard profile={profile} key={profile.id} onSwipeOff={nextCard} />
      ))}
      {profileIndex === MOCKDATA_INDEX - 1 && (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>End of Cards</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default App;
