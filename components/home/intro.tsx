'use client'

import { Typography } from '@/components/ui/typography';
import { TypeAnimation } from 'react-type-animation';

const words = ['L2mD3v', 'Junior Software engineer', 'Security Researcher', 'Senior Web Engineer'];

const sq = (words: string[]): (string | number)[] => {
  const result = [];
  for (const i of words) {
    result.push(i);
    result.push(1000);
  }
  return result;
};

export const Intro: React.FC = () => (
  <article className="flex flex-col items-center gap-4">
    <Typography variant="h2" className="border-none">
      Hello, I&apos;m
    </Typography>

    <Typography
      variant="h1"
      className="h-14 select-none font-mono"
      style={{
       
      }}
    >
  <TypeAnimation sequence={sq(words)} repeat={Infinity} speed={10} />
  </Typography>

    <Typography className="text-balance text-center">
      I&apos;m a developer who loves to build things. I&apos;m currently working on a few projects
      and learning new things every day. I&apos;m passionate about open-source and I love to
      contribute to the community.
    </Typography>
  </article>
);