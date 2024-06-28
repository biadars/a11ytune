import React, {
  PropsWithChildren,
  createContext,
  useState,
  useContext, useMemo
} from 'react';
import allChallenges from './allChallenges';
import { ChallengeStepResult } from '@/app/challenges/challenge';

const firstChallengeNumber = allChallenges
  .map((challenge) => challenge.index)
  .sort()[0];

type ChallengeContextResponse = {
  currentChallengeIndex: number;
  setCurrentChallengeIndex: (index: number) => void;
};

const ChallengesContext = createContext<ChallengeContextResponse>({
  currentChallengeIndex: firstChallengeNumber,
  setCurrentChallengeIndex: () => {}
});

export function ChallengesContextProvider({ children }: PropsWithChildren) {
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(firstChallengeNumber);

  return (
    <ChallengesContext.Provider value={{ currentChallengeIndex, setCurrentChallengeIndex }}>
      {children}
    </ChallengesContext.Provider>
  );
}
export const useChallenges = () => {
  const { currentChallengeIndex, setCurrentChallengeIndex } = useContext(ChallengesContext);
  const currentChallenge = useMemo(() => {
    return allChallenges.find(
      (challenge) => challenge.index === currentChallengeIndex
    );
  }, [currentChallengeIndex]);

  const getChallengeResults = (code: string) => {
    const resultsToDisplay: ChallengeStepResult[] = [];
    let foundError = false;

    if (!currentChallenge) {
      return resultsToDisplay;
    }

    currentChallenge.steps.forEach((step) => {
      if (step.test(code)) {
        if (!foundError) {
          resultsToDisplay.push({ message: step.successMessage, passed: true });
        }
      } else {
        if (!foundError) {
          resultsToDisplay.push({ message: step.failureMessage, passed: false });
        }
        foundError = true;
      }
    });

    return resultsToDisplay;
  }

  const canProgressToNextChallenge = (code: string) => {
    const results = getChallengeResults(code);
    return results && !results.some(result => !result.passed);
  }

  const progressToNextChallenge = () => {
    console.log('next');
    setCurrentChallengeIndex(currentChallengeIndex + 1);
  }

  return {
    currentChallenge,
    getChallengeResults,
    canProgressToNextChallenge,
    progressToNextChallenge
  }
};
