import React, {
  useState,
  createContext,
  ReactChildren,
  ReactChild,
  useContext,
} from 'react';
import {generateMockData, MOCKDATA_LIMIT} from '../mockData';

interface IProfileContextProps {
  children: ReactChild | ReactChildren;
}

export const ProfilesContext = createContext({});

export const useProfiles = () => useContext(ProfilesContext);

export const ProfilesContextProvider = ({children}: IProfileContextProps) => {
  const [profiles] = useState(generateMockData(MOCKDATA_LIMIT));
  const [profileIndex, setProfileIndex] = useState(0);
  const [error, setError] = useState({message: ''});

  const nextCard = () => {
    setProfileIndex(profileIndex + 1);
    if (profileIndex >= MOCKDATA_LIMIT) {
      setError({message: 'No more cards available'});
    }
  };
  console.log(profileIndex);
  return (
    <ProfilesContext.Provider value={{profiles, profileIndex, nextCard, error}}>
      {children}
    </ProfilesContext.Provider>
  );
};
