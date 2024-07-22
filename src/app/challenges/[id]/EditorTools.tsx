import { Button } from '@/app/(components)/Button';
import React, { useState } from 'react';
import { Snack, SnackState } from 'snack-sdk';
import { Challenge, ChallengeStepResult } from '@/lib/challenges/challenge';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { ChallengeCompleted } from '@/app/challenges/[id]/ChallengeCompleted';
import getChallengeResults from '@/lib/challenges/getChallengeResults';
import canProgressToNextChallenge from '@/lib/challenges/canProgressToNextChallenge';
import SnackLink from '@/app/challenges/[id]/SnackLink';
import HintBox from '@/app/challenges/[id]/HintBox';

export type EditorToolsProperties = {
  challenge: Challenge;
  snack: Snack;
  snackState: SnackState;
};

export default function EditorTools({
  challenge,
  snack,
  snackState
}: EditorToolsProperties) {
  const [showTests, setShowTests] = useState(false);
  const [loadingTestResults, setLoadingTestResults] = useState(false);
  const [testResults, setTestResults] = useState<ChallengeStepResult[]>([]);
  const [showChallengeCompleted, setShowChallengeCompleted] = useState(false);

  const resetCode = () => {
    const initialCode = challenge?.challengeSnack?.files
      ? (challenge.challengeSnack.files['App.tsx'].contents as string)
      : '';
    snack.updateFiles({
      'App.tsx': {
        type: 'CODE',
        contents: initialCode
      }
    });
  };

  const runTests = () => {
    setShowTests(false);
    setLoadingTestResults(true);

    const code = snack.getState().files['App.tsx'].contents as string;
    setTestResults(getChallengeResults(challenge, code));
    setShowChallengeCompleted(canProgressToNextChallenge(challenge, code));

    setLoadingTestResults(false);
    setShowTests(true);
  };

  return (
    <>
      <div className=" w-full flex flex-row mt-10 justify-between min-h-60">
        <div className="w-8/12 flex flex-col justify-items-start min-h-60">
          <div className="mb-5">
            <h3 className="text-lg">Editor tools</h3>
          </div>
          <div>
            <span className="mr-5">
              <Button label="Reset" loading={false} onClick={resetCode} />
            </span>
            <Button
              label="Test my code"
              loading={loadingTestResults}
              onClick={runTests}
            />
          </div>
          <HintBox challenge={challenge}/>
          <div className="mt-5">
            {showTests &&
              testResults.map((step, index) => {
                return (
                  <div
                    className="flex flex-row align-middle my-2"
                    key={'step-' + index}>
                    <span>{step.message}</span>
                    <span className="ml-2 self-center">
                      {step.passed ? (
                        <FaCheckCircle className="text-green-500 text-xl" />
                      ) : (
                        <FaExclamationCircle className="text-red-500 text-xl" />
                      )}
                    </span>
                  </div>
                );
              })}
          </div>
        </div>
        <SnackLink isOnline={snackState.online} link={snackState.url} />
      </div>
      {showChallengeCompleted && (
        <div className="w-full mt-5">
          <ChallengeCompleted challenge={challenge} />
        </div>
      )}
    </>
  );
}
