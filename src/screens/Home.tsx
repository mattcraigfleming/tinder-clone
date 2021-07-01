import React, {useState} from 'react';
import SwipeCard from '../components/SwipeCard';
import {generateMockData} from '../mockData';
import {View} from 'react-native';

const MOCKDATA_INDEX = 10;

const Home = () => {
  const [profiles] = useState(generateMockData(MOCKDATA_INDEX));
  const [profileIndex, setProfileIndex] = useState(0);

  const nextCard = () => {
    setProfileIndex(profileIndex + 1);
  };

  console.log(profileIndex, MOCKDATA_INDEX);
  return (
    <View>
      {profiles.map(profile => (
        <SwipeCard profile={profile} key={profile.id} onSwipeOff={nextCard} />
      ))}
    </View>
  );
};

export default Home;
