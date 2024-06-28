import React, { useEffect, useState } from 'react';
import { Snack } from 'snack-sdk';
import { useChallenges } from '@/app/challenges/useChallenges';
import CodeEditor from '@uiw/react-textarea-code-editor';
import EditorTools from '@/app/components/EditorTools';
import SnackLink from '@/app/components/SnackLink';

const INITIAL_CODE_CHANGE_DELAY = 500;

export default function ChallengeEditor() {
  const { currentChallenge } = useChallenges();

  const [snack, setSnack] = useState(
    () =>
      new Snack({
        ...currentChallenge?.challengeSnack,
        codeChangesDelay: INITIAL_CODE_CHANGE_DELAY
      })
  );
  const [snackState, setSnackState] = useState(snack.getState());

  useEffect(() => {
    snack.setOnline(true);
    const listeners = [
      snack.addStateListener((state) => {
        setSnackState(state);
      })
    ];

    return () =>
      listeners.forEach((listener) => {
        listener();
      });
  }, [snack]);

  useEffect(() => {
    console.log('updating to new snack')
    setSnack(new Snack({
      ...currentChallenge?.challengeSnack,
      codeChangesDelay: INITIAL_CODE_CHANGE_DELAY
    }));
  }, [currentChallenge, setSnack]);

  useEffect(() => {
    console.log('running effect', files['App.tsx']);
    setSnackState(snack.getState())
  }, [snack, setSnackState]);

  const { files, online, url } = snackState;

  return (
    <div className="w-full">
      <CodeEditor
        style={{ width: '100%', height: 1200 }}
        title="Code"
        language="tsx"
        value={files['App.tsx'].contents as string}
        onChange={(event) =>
          snack.updateFiles({
            'App.tsx': {
              type: 'CODE',
              contents: event.target.value
            }
          })
        }
      />
      <div className=" w-full flex flex-row mt-10 justify-between min-h-60">
        <EditorTools snack={snack} />
        <SnackLink isOnline={online} link={url} />
      </div>
    </div>
  );
}
