import React, {useState} from 'react';
import SwipeCard from '../components/SwipeCard/SwipeCard';
import {generateMockData, MOCKDATA_INDEX} from '../mockData';
import {View} from 'react-native';

const Home = () => {
  const [profiles] = useState(generateMockData(MOCKDATA_INDEX));
  const [profileIndex, setProfileIndex] = useState(0);

  const nextCard = () => {
    setProfileIndex(profileIndex + 1);
  };

  return (
    <View>
      {profiles.map(profile => (
        <SwipeCard profile={profile} key={profile.id} onSwipeOff={nextCard} />
      ))}
    </View>
  );
};

export default Home;
