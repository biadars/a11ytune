import { Button } from '@/app/components/Button';
import React, { useState } from 'react';
import { Snack } from 'snack-sdk';
import { useChallenges } from '@/app/challenges/useChallenges';
import { ChallengeStepResult } from '@/app/challenges/challenge';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { ChallengeCompleted } from '@/app/components/ChallengeCompleted';

export type EditorToolsProperties = {
  snack: Snack;
};

export default function EditorTools({ snack }: EditorToolsProperties) {
  const { currentChallenge, getChallengeResults, canProgressToNextChallenge } = useChallenges();
  const [showTests, setShowTests] = useState(false);
  const [loadingTestResults, setLoadingTestResults] = useState(false);
  const [testResults, setTestResults] = useState<ChallengeStepResult[]>([]);
  const [showChallengeCompleted, setShowChallengeCompleted] = useState(false);

  const resetCode = () => {
    const initialCode = currentChallenge?.challengeSnack?.files
      ? (currentChallenge.challengeSnack.files['App.tsx'].contents as string)
      : '';
    snack.updateFiles({
      'App.tsx': {
        type: 'CODE',
        contents: initialCode
      }
    });
  };

  const runTests = () => {
    if (!currentChallenge) {
      return;
    }

    setShowTests(false);
    setLoadingTestResults(true);

    const code = snack.getState().files['App.tsx'].contents as string;
    setTestResults(getChallengeResults(code));
    setShowChallengeCompleted(canProgressToNextChallenge(code));

    setLoadingTestResults(false);
    setShowTests(true);
  };

  return (
    <div className="w-1/2 flex flex-col justify-items-start min-h-60">
      <div className="mb-5">
        <h3>Editor tools</h3>
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
      { true && (
        <div className="mt-5">
          <ChallengeCompleted/>
        </div>
      )}
    </div>
  );
}
