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
      {challenge.requiresUserDefinedStrings && (
        <p>
          Please note that the code tests on this challenge won&apos;t recognise
          string concatenation with &apos;+&apos;, instead it is looking for
          string interpolation (See:{' '}
          <a href={'https://www.w3schools.com/js/js_string_templates.asp'}>
            string interpolation
          </a>
          )!
        </p>
      )}
      {challenge.index === 1 && <p>
        Once you&apos;ve made some changes to the code below, you&apos;ll need
        to check whether you&apos;ve fixed all the accessibility issues. Press
        the &apos;Test my code&apos; button underneath the code editor to see
        if your code solves these issues (and get some clues for what you might
        have missed). You can also get extra hints down there, scan a QR code
        to run your code on your mobile device Expo Go, and reset the editor if
        you want to get rid of the changes you made. For help on using a screen
        reader on your device, see
        <a href={'https://www.uswitch.com/mobiles/guides/screen-reader-accessibility-everything-you-need-to-know/'}> this guide</a>.
      </p>}
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
