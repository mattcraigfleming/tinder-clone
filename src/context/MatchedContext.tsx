import React, {useState, createContext} from 'react';

export const MatchedContext = createContext({});

export const MatchedContextProvider = props => {
  const [matchedProfiles, setMatchedProfiles] = useState(0);

  return (
    <MatchedContext.Provider value={[matchedProfiles, setMatchedProfiles]}>
      {props.children}
    </MatchedContext.Provider>
  );
};
