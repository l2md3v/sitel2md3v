'use client'

import { TypeAnimation } from 'react-type-animation'

export const Intro: React.FC = () => (
  <h1 className="text-center font-mono text-3xl font-black md:text-5xl">
    {'< '}
    <TypeAnimation
      className="bg-gradient-l2md3v bg-clip-text text-transparent"
      sequence={sequence}
      repeat={Infinity}
    />
    {'/>'}
  </h1>
)

const sequence = [
  'Junior Software engineer',
  1000,
  'Security Researcher',
  1000,
  'Senior Web Engineer',
  1000,
  'Web Pentest',
  1000,
]
