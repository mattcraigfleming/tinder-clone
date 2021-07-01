import * as React from 'react';
import SwipeCard from '../../components/SwipeCard/SwipeCard';
import {useProfiles} from '../../context/ProfilesContext';
import {IProfile} from '../../types/interface';

const Home = () => {
  const {profiles, nextCard} = useProfiles();
  return (
    <>
      {profiles.map((profile: IProfile) => (
        <SwipeCard profile={profile} key={profile.id} onSwipeOff={nextCard} />
      ))}
    </>
  );
};

export default Home;
