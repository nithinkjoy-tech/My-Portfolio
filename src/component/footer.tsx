'use client';

import { VscGithubAlt } from 'react-icons/vsc';
import { LuLinkedin, LuInstagram } from 'react-icons/lu';
import { SiLeetcode } from 'react-icons/si';

export default function Footer() {
  return (
    // <div className='hidden mdl:flex gap-5 xl:hidden items-center justify-center w-full py-6 '>
    //   <a href='https://github.com/nithinkjoy-tech' target='_blank' title='Github'>
    //     <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
    //       <VscGithubAlt />
    //     </span>
    //   </a>
    //   <a
    //     href='https://leetcode.com/u/nithinkjoy/'
    //     target='_blank'
    //     title='Leetcode'
    //   >
    //     <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
    //       <SiLeetcode />
    //     </span>
    //   </a>
    //   <a
    //     href='https://www.linkedin.com/in/nithinkjoy-tech/'
    //     target='_blank'
    //     title='LinkedIn'
    //   >
    //     <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
    //       <LuLinkedin />
    //     </span>
    //   </a>
    //   <a
    //     href='https://www.instagram.com/nithinkjoy/'
    //     target='_blank'
    //     title='Instagram'
    //   >
    //     <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
    //       <LuInstagram />
    //     </span>
    //   </a>
    // </div>
      <div className="mdl:flex gap-5 items-center justify-center w-full py-6">
          Inspired by the work of<h4 className="text-textGreen underline-transition text-textUnderline">
          <a href="https://www.linkedin.com/in/jeevan-suvarna-741b19186/" target="_blank" title="Jeevan Suvarna">Jeevan Suvarna</a>
      </h4>and<h4 className="text-textGreen underline-transition text-textUnderline">
          <a href="https://v4.brittanychiang.com/" target="_blank" title="Brittany Chiang">Brittany Chiang</a>
      </h4>
      </div>
  );
}
