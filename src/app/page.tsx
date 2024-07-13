import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header className="flex flex-col w-full p-7 bg-gradient-to-b from-teal-900 to-cyan-950 items-center">
        <h1 className="font-bold font-mono text-gray-100 text-2xl">A11yTune</h1>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-cyan-950 text-gray-100 font-mono">
        <div className="w-2/3">
          <h2 className="font-bold font-mono text-gray-100 text-lg">
            What is A11yTune
          </h2>
          <p>
            A11yTune is an accessibility puzzle hunt developed to try and teach
            some React Native accessibility concepts in a (hopefully) fun and
            interactive way.
          </p>
          <p>
            I wrote it based on lessons me and my team have learnt on our last
            mobile project, using our documentation, React Native&apos;s{' '}
            <a href="https://reactnative.dev/docs/accessibility">
              accessibility
            </a>{' '}
            <a href="https://reactnative.dev/docs/accessibilityinfo">docs</a>,
            and{' '}
            <a href="https://commerce.nearform.com/open-source/react-native-ama/">
              React Native AMA
            </a>{' '}
            as references.
          </p>
          <p>
            This site contains a series of challenges based on a mobile app for
            a fictional record seller - A11yTune. Each challenge focuses on a
            screen of the app, which has several accessibility issues. I&apos;ve
            indicated some things that are wrong with each screen, and it&apos;s
            up to you to do some clever googling to learn how to fix them. Any
            code you write will be updated in the app, which you can run on your
            phone, and you can use the website to re-test your code to see if
            the issues have been solved.
          </p>
          <p>
            It is entirely possible you will solve a challenge in a way I
            haven&apos;t foreseen, or that the pacing of these challenges could
            use some adjusting, or that you know a better accessibility approach
            a challenge should be suggesting instead - I&apos;m always keen to
            learn more, if you have any feedback or improvement suggestions
            please send them over to{' '}
            <a href="mailto:bianca.darolti@softwire.com">
              bianca.darolti@softwire.com
            </a>
          </p>
          <h2 className="font-bold font-mono text-gray-100 text-lg">
            What do you need to get started
          </h2>
          <ul className="list-disc ml-5 mt-5 mb-10">
            <li>A phone with Expo Go installed</li>
            <li>
              Optionally some earphones if you&apos;d like to test screen reader
              features quietly
            </li>
          </ul>
          <Link
            href={`/challenges/1`}
            className="mt-10 rounded shadow bg-teal-800 hover:bg-teal-900 border border-teal-900 p-3 text-sm">
            Get started
          </Link>
        </div>
      </main>
    </>
  );
}
