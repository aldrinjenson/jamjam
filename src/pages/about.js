import Head from "next/head";

const About = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <Head>
        <title>About - Just A Minute Competition</title>
      </Head>
      <h1 className='text-2xl font-bold mb-4'>About</h1>
      <p className='mb-4'>
        Just A Minute is a competition that tests your ability to speak on a
        topic for a full minute without hesitation, repetition or deviation.
        Here are the rules of the game:
      </p>
      <ul className='list-disc ml-6 mb-4'>
        <li>Players take turns to speak on a given topic for one minute</li>
        <li>
          The speaker must not hesitate or pause for more than one second during
          their speech
        </li>
        <li>
          The speaker must not repeat any word or phrase they have already used
          during their speech
        </li>
        <li>
          The speaker must not deviate from the topic at hand or introduce new
          ideas
        </li>
        <li>
          The other players can challenge the speaker if they think they have
          broken any of the rules
        </li>
        <li>
          If the challenge is upheld, the challenger takes over as the speaker
        </li>
        <li>
          If the challenge is not upheld, the speaker continues speaking and
          receives a point
        </li>
        <li>
          The game continues until a player reaches a predetermined number of
          points or for a set amount of time
        </li>
      </ul>
      <br />
      <p className='text-center'>Project build with love by Garudas:)</p>
    </div>
  );
};

export default About;
