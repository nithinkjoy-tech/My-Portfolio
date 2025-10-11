'use client';

import { VscGithubAlt } from 'react-icons/vsc';
import { LuLinkedin, LuInstagram } from 'react-icons/lu';
import { SiLeetcode } from 'react-icons/si';

export default function LeftSection() {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-5 text-textLight'>
      <div className='flex flex-col gap-5'>
        <a
          href='https://github.com/nithinkjoy-tech'
          target='_blank'
          title='Github'
        >
          <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
            <VscGithubAlt />
          </span>
        </a>
        <a
          href='https://leetcode.com/u/nithinkjoy/'
          target='_blank'
          title='Leetcode'
        >
          <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
            <SiLeetcode />
          </span>
        </a>
        <a
          href='https://www.linkedin.com/in/nithinkjoy-tech/'
          target='_blank'
          title='LinkedIn'
        >
          <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
            <LuLinkedin />
          </span>
        </a>
        <a
          href='https://www.instagram.com/nithinkjoy'
          target='_blank'
          title='Instagram'
        >
          <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
            <LuInstagram />
          </span>
        </a>
        {/* <a href="">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                        <LuInstagram />
                    </span>
                </a> */}
      </div>
      <div className='w-[2px] h-32 bg-textDark'></div>
    </div>
  );
}
