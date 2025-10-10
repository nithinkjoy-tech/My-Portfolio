'use client';
import { useState } from 'react';
import Title from './Title';
import { TiArrowForward } from 'react-icons/ti';
import useScrollReveal from '@/hooks/useScrollReveal';

export default function Opensource() {
    const [workId, setworkId] = useState(1);
    const handleButton = (index: number) => {
        setworkId(index);
    };
    const { ref, isVisible } = useScrollReveal();

    return (
        <section
            ref={ref}
            id='opensource'
            className={`max-w-containerxs mx-auto py-10 lgl:py-24 px-4 transition-opacity duration-700 ${
                isVisible ? 'opacity-100 fade-in-up' : 'opacity-0'
            }`}
        >
            <Title title='Opensource' id='02.5'></Title>
            <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
                <ul className='md:w-38 flex flex-col'>
                    <li
                        onClick={(e) => handleButton(1)}
                        className={`${
                            workId == 1
                                ? 'border-l-textGreen text-textGreen'
                                : 'border-l-textDark text-textDark'
                        } border-l-2  bg-transperant hover:bg-bodyColor py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
                    >
                        Github
                    </li>
                </ul>
                <div>
                    <h3>
                        Open Source{' '}
                        <span className='text-textGreen tracking-wide underline-transition text-textUnderline'>
          Contributions
        </span>
                    </h3>

                    <h4 className='text-lg font-semibold text-textLight mt-6 mb-4'>
                        <a href="https://github.com/oven-sh/bun" target="_blank">Bun.js{' '}</a>

                        <span className='text-sm font-normal text-textDark'>
          (80k+ GitHub ⭐ repo)
        </span>
                    </h4>
                    <ul className='flex flex-col gap-4'>
                        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward size={20} />
          </span>
                            <div>
                                Integrated over{' '}
                                <a href="https://github.com/oven-sh/bun/pull/9741" target="_blank" className='text-textGreen'>5 jest-extended matchers</a>{' '}
                                into Bun's testing framework by creating{' '}
                                <span className='text-textGreen underline-transition text-textUnderline'>
              C++ bindings
            </span>{' '}
                                for the JavaScript engine's Object.values() method and implementing
                                the remaining logic in{' '}
                                <span className='text-textGreen underline-transition text-textUnderline'>
              Ziglang
            </span>
                                .
                            </div>
                        </li>

                        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward size={20} />
          </span>
                            <div>
                                Resolved a critical <a href="https://github.com/oven-sh/bun/pull/5696" target="_blank" className='text-textGreen'>issue</a>{' '} in Bun.js that prevented developers from
                                creating a local development environment due to an LLVM version
                                mismatch in the Makefile.
                            </div>
                        </li>

                        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward size={20} />
          </span>
                            <div>
                                Tech used:{' '}
                                <span className='text-textGreen underline-transition text-textUnderline'>
              Bun.js
            </span>
                                ,{' '}
                                <span className='text-textGreen underline-transition text-textUnderline'>
              TypeScript
            </span>
                                ,{' '}
                                <span className='text-textGreen underline-transition text-textUnderline'>
              Ziglang
            </span>
                                ,{' '}
                                <span className='text-textGreen underline-transition text-textUnderline'>
              C++
            </span>
                            </div>
                        </li>
                    </ul>

                    <h4 className='text-lg font-semibold text-textLight mt-8 mb-4'>
                        <a href="https://github.com/tristanisham/zvm" target="_blank">ZVM (Ziglang Version Manager)</a>{' '}
                        <span className='text-sm font-normal text-textDark'>
          (700+ GitHub ⭐ repo)
        </span>
                    </h4>
                    <ul className='flex flex-col gap-4'>
                        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward size={20} />
          </span>
                            <div>
                                Raised a <a href="https://github.com/tristanisham/zvm/pull/60" target="_blank" className='text-textGreen'>PR</a>{' '} to automatically run ZVM in administrative mode without
                                explicitly requiring users to run ZVM as an administrator on Windows
                                machines.
                            </div>
                        </li>

                        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward size={20} />
          </span>
                            <div>
                                Added a new feature that streamlines the installation process for
                                Windows users by including a{' '}
                                <a href="https://github.com/tristanisham/zvm/pull/53" target="_blank" className='text-textGreen underline-transition text-textUnderline'>
              PowerShell script
            </a>{' '}
                                for installation.
                            </div>
                        </li>

                        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward size={20} />
          </span>
                            <div>
                                Tech used:{' '}
                                <span className='text-textGreen underline-transition text-textUnderline'>
              Golang
            </span>
                                ,{' '}
                                <span className='text-textGreen underline-transition text-textUnderline'>
              PowerShell Script
            </span>
                            </div>
                        </li>
                    </ul>

                    <h4 className='text-lg font-semibold text-textLight mt-8 mb-4'>
                        <a href="https://stackoverflow.com/users/13877422/nithin-k-joy" target="_blank">Stackoverflow</a>{' '}
                    </h4>
                    <ul className='flex flex-col gap-4'>
                        <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward size={20} />
          </span>
                            <div>
                                Contributed to Stack Overflow where I was able to help developers
                                stuck in their development phase by answering over{' '}
                                <strong className='text-textGreen'>35 questions</strong>, gaining{' '}
                                <strong className='text-textGreen'>930+ Reputation</strong> and
                                reaching{' '}
                                <strong className='text-textGreen'>200k+ people</strong> with top
                                answered tags including{' '}
                                <span className='text-textGreen underline-transition text-textUnderline'>
              Node.js
            </span>
                                ,{' '}
                                <span className='text-textGreen underline-transition text-textUnderline'>
              Mongoose
            </span>
                                ,{' '}
                                <span className='text-textGreen underline-transition text-textUnderline'>
              Express.js
            </span>
                                , and{' '}
                                <span className='text-textGreen underline-transition text-textUnderline'>
              Socket.io
            </span>
                                .
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
