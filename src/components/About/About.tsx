import Typewriter from 'typewriter-effect';
import { Element } from 'react-scroll';
import { BaseLayout } from '../../layout';

export const About = () => {
  return (
    <BaseLayout>
      <Element name="About">
        <div className="flex justify-between gap-12 xl:gap-0 pt-12 md:pt-20 xl:pt-[165px]">
          <section className=" md:w-[550px] xl:w-[600px] mt-[19px] flex flex-col gap-[29px] md:gap-[42px]">
            <h1 className=" md:text-3xl xl:text-[2.5rem] font-semibold">
              <Typewriter
                options={{
                  strings: ['D e v e l o p e r  F u l l  S t a c k', 'W e b  D e s i g n', 'U I / U X'],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 50,
                  cursor: '|',
                }}
              />
            </h1>

            <p className="max-w-[400px] md:max-w-[600px] text-xs text-[#D4D4D4] md:text-xl tracking-wide">
              I have dedicated myself every day to programming. Since the beginning, there has not been a single day that I have not continued to learn, with the goal of becoming an exceptional Full Stack developer. My focus is on solving market problems.
            </p>

            <a
              className="text-lg text-center font-semibold font-Montserrat md:text-lg lg:text-3xl  w-[103px] md:w-[135px] lg:w-[242px] py-[5px] md:py-[7px] md:px-[54px] lg:px-[97px] rounded-[50px] lg:py-[10px] bg-gradient-to-t from-[#0a1972] to-[#1334ff] transition-all duration-300 hover:scale-110 xl:mt-4"
              href="https://drive.google.com/drive/folders/1GQQxildAfIRiMzZhRFBGZZHq0Et55h0g"
              target="_blank"
            >
              CV
            </a>
          </section>
          <div className="flex items-center justify-between ">
            <img className="hidden xl:block" src="/avatar.png" alt="Meng" />
            <nav>
            </nav>
          </div>
        </div>
      </Element>
    </BaseLayout>
  );
};
