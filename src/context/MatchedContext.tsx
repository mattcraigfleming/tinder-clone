import React, {useState, createContext, ReactChild, ReactChildren} from 'react';

interface IMatchedContextProps {
  children: ReactChild | ReactChildren;
}

export const MatchedContext = createContext({});

export const MatchedContextProvider = ({children}: IMatchedContextProps) => {
  const [matchedProfiles, setMatchedProfiles] = useState(0);

  return (
    <MatchedContext.Provider value={[matchedProfiles, setMatchedProfiles]}>
      {children}
    </MatchedContext.Provider>
  );
};
