import React, {useState, createContext} from 'react';

export const ProfilesContext = createContext({});

export const ProfilesContextProvider = props => {
  const [matchedProfiles, setMatchedProfiles] = useState(0);

  return (
    <ProfilesContext.Provider value={[matchedProfiles, setMatchedProfiles]}>
      {props.children}
    </ProfilesContext.Provider>
  );
};
