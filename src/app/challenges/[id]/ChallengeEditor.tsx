import React, { useEffect, useState } from 'react';
import { Snack } from 'snack-sdk';
import EditorTools from '@/app/challenges/[id]/EditorTools';
import { Challenge } from '@/lib/challenges/challenge';
import ReactCodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { dracula } from '@uiw/codemirror-themes-all';

const INITIAL_CODE_CHANGE_DELAY = 500;

export default function ChallengeEditor({
  challenge
}: {
  challenge: Challenge;
}) {
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

  const { files } = snackState;

  return (
    <div className="w-full">
      <p>{challenge.description}</p>
      <p>
        Once you&apos;ve made some changes to the code below, you&apos;ll need
        to check whether you&apos;ve fixed all the accessibility issues. Press
        the &apos;Test my code&apos; button underneath the code editor to see
        if your code solves these issues. You can also get extra hints down
        there, scan a QR code to run your code in Expo Go, and reset the editor
        if you want to get rid of the changes you made.
      </p>
      <ReactCodeMirror
        value={files['App.tsx'].contents as string}
        extensions={[javascript({ jsx: true, typescript: true })]}
        onChange={(value) =>
          snack.updateFiles({
            'App.tsx': {
              type: 'CODE',
              contents: value
            }
          })
        }
        theme={dracula}
        height="1000px"
      />
      <EditorTools
        challenge={challenge}
        snack={snack}
        snackState={snackState}
      />
    </div>
  );
}
