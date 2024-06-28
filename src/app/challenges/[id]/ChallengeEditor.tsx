import React, { useEffect, useState } from 'react';
import { Snack } from 'snack-sdk';
import CodeEditor from '@uiw/react-textarea-code-editor';
import EditorTools from '@/app/challenges/[id]/EditorTools';
import SnackLink from '@/app/challenges/[id]/SnackLink';
import { Challenge } from '@/lib/challenges/challenge';

const INITIAL_CODE_CHANGE_DELAY = 500;

export default function ChallengeEditor({challenge}: {challenge: Challenge}) {

  const [snack] = useState(
    () =>
      new Snack({
        ...challenge?.challengeSnack,
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
        <EditorTools challenge={challenge} snack={snack} />
        <SnackLink isOnline={online} link={url} />
      </div>
    </div>
  );
}
