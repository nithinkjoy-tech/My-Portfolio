'use client';
import { TiArrowForward } from 'react-icons/ti';
export default function Company() {
  return (
    <div>
        <h3>
            Engineer{' '}
            <span className='text-textGreen tracking-wide underline-transition text-textUnderline'>
          Clover Bay Technologies Pvt Ltd
        </span>
        </h3>
        <p className='text-sm mt-1 font-medium text-textDark'>
            March 2023 - Present
        </p>

        <h4 className='text-lg font-semibold text-textLight mt-2 mb-4 opacity-0'>
            Lyca Mobile
        </h4>
        <ul className='flex flex-col gap-4'>

            <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
                <div>
                    Improved website performance by optimizing load times and enhancing
                    user experience across devices by increasing Lighthouse performance
                    score above{' '}
                    <strong className='text-textGreen'>80%</strong>.
                </div>
            </li>

            <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
                <div>
                    Upgraded core frameworks, migrating the project from{' '}
                    <span className='text-textGreen underline-transition text-textUnderline'>
              Next.js 14 to 15
            </span>{' '}
                    and{' '}
                    <span className='text-textGreen underline-transition text-textUnderline'>
              React 18 to 19
            </span>
                    , ensuring compatibility, stability, and access to the latest
                    features.
                </div>
            </li>

            <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
                <div>
                    Worked on SIM card porting functionality, enabling users to switch
                    from any operator to Lyca.
                </div>
            </li>

            <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
                <div>
                    Tech Stack:{' '}
                    <span className='text-textGreen underline-transition text-textUnderline'>
              Next.js
            </span>
                    ,{' '}
                    <span className='text-textGreen underline-transition text-textUnderline'>
              JavaScript
            </span>
                    ,{' '}
                    <span className='text-textGreen underline-transition text-textUnderline'>
              Redux
            </span>
                    ,{' '}
                    <span className='text-textGreen underline-transition text-textUnderline'>
              Material UI
            </span>
                    ,{' '}
                    <span className='text-textGreen underline-transition text-textUnderline'>
              SASS
            </span>
                </div>
            </li>
        </ul>

        <h4 className='text-lg font-semibold text-textLight mt-2 mb-4 opacity-0'>
            Swadesh
        </h4>
        <ul className='flex flex-col gap-4'>
            <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
                <div>
                    Directed the transformation of a e-commerce frontend app,
                    increasing user engagement by{' '}
                    <strong className='text-textGreen'>40%</strong> through{' '}
                    <span className='text-textGreen underline-transition text-textUnderline'>
              Vue.js
            </span>
                    ,{' '}
                    <span className='text-textGreen underline-transition text-textUnderline'>
              LESS
            </span>
                    , and server-side rendering.
                </div>
            </li>

            <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
                <div>
                    Reduced memory and CPU usage by{' '}
                    <strong className='text-textGreen'>80% - 90%</strong> by
                    implementing virtual scroll on PLP pages.
                </div>
            </li>

            <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
                <div>
                    Integrated complex sorting and filtering functionality, a global
                    custom CTA, a reusable custom address card, and cart landing flows.
                </div>
            </li>

            <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
                <div>
                    Achieved a{' '}
                    <strong className='text-textGreen'>10x improvement</strong> in
                    performance by optimizing PLP and PDP image loading and reducing the
                    number of HTTP requests, leading to enhanced overall performance.
                </div>
            </li>

            <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
                <div>
                    Improved key metrics such as Cumulative Layout Shift, Largest
                    Contentful Paint, and First Contentful Paint through server-side
                    rendering and code optimization.
                </div>
            </li>

            <li className='text-base flex gap-2 text-textDark'>
          <span className='text-textGreen mt-1'>
            <TiArrowForward />
          </span>
                <div>
                    Tech stack:{' '}
                    <span className='text-textGreen underline-transition text-textUnderline'>
              Vue.js
            </span>
                    ,{' '}
                    <span className='text-textGreen underline-transition text-textUnderline'>
              JavaScript
            </span>
                    ,{' '}
                    <span className='text-textGreen underline-transition text-textUnderline'>
              LESS
            </span>
                    ,{' '}
                    <span className='text-textGreen underline-transition text-textUnderline'>
              CSS
            </span>
                    ,{' '}
                    <span className='text-textGreen underline-transition text-textUnderline'>
              Fynd Theme
            </span>
                </div>
            </li>
        </ul>
    </div>
  );
}
