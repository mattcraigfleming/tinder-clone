import React, {useState, createContext, ReactChildren, ReactChild} from 'react';

interface IProfileContextProps {
  children: ReactChild | ReactChildren;
}

export const ProfilesContext = createContext({});

export const ProfilesContextProvider = ({children}: IProfileContextProps) => {
  const [matchedProfiles, setMatchedProfiles] = useState(0);

  return (
    <ProfilesContext.Provider value={[matchedProfiles, setMatchedProfiles]}>
      {children}
    </ProfilesContext.Provider>
  );
};
