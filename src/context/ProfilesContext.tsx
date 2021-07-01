import React, {
  useState,
  createContext,
  ReactChildren,
  ReactChild,
  useContext,
} from 'react';
import {generateMockData, MOCKDATA_LIMIT} from '../mockData';
import {IProfile} from '../types/interface';

interface IContextProps {
  children: ReactChild | ReactChildren;
}

interface IProfileContext {
  profiles: IProfile[];
  profileIndex?: number;
  nextCard: () => void;
  error?: {message: string};
}

export const ProfilesContext = createContext({});

export const useProfiles = () => useContext(ProfilesContext) as IProfileContext;

export const ProfilesContextProvider = ({children}: IContextProps) => {
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
