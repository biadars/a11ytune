import React, {
  PropsWithChildren,
  createContext,
  useState,
  useContext
} from 'react';
import allChallenges from './allChallenges';

const firstChallengeNumber = allChallenges
  .map((challenge) => challenge.index)
  .sort()[0];

type ChallengeContextResponse = {
  currentChallengeIndex: number;
};

const ChallengesContext = createContext<ChallengeContextResponse>({
  currentChallengeIndex: firstChallengeNumber
});
export function ChallengesContextProvider({ children }: PropsWithChildren) {
  const [currentChallengeIndex] = useState(firstChallengeNumber);

  return (
    <ChallengesContext.Provider value={{ currentChallengeIndex }}>
      {children}
    </ChallengesContext.Provider>
  );
}
export const useChallenges = () => {
  const { currentChallengeIndex } = useContext(ChallengesContext);
  return allChallenges.find(
    (challenge) => challenge.index === currentChallengeIndex
  );
};
