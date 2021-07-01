import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {generateMockData} from './mockData';
import SwipeCard from './components/SwipeCard';

const App = () => {
  const [profiles] = useState(generateMockData(22));
  const [profileIndex, setProfileIndex] = useState(0);

  const nextCard = () => {
    setProfileIndex(profileIndex + 1);
  };

  return (
    <SafeAreaView>
      {profiles
        .slice(profileIndex, profileIndex + 3)
        .reverse()
        .map(profile => (
          <SwipeCard profile={profile} key={profile.id} onSwipeOff={nextCard} />
        ))}
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({});

export default App;
