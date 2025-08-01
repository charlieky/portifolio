//react fast marquee
import Marquee from 'react-fast-marquee';
//react scroll
import { Element } from 'react-scroll';
//components
import { Technologies } from './Technologies';
// Layouts
import { BaseLayout } from '../../layout';

const dataSkills = [
 
  {
    id: '1',
    skill: 'NestJS',
    img: '/skills/nestJS.svg',
  },
  {
    id: '2',
    skill: 'React',
    img: '/skills/react.svg',
  },
  {
    id: '3',
    skill: 'NodeJS',
    img: '/skills/nodeJS.svg',
  },
  {
    id: '4',
    skill: 'Material UI',
    img: '/skills/materialUI.svg',
  },
  {
    id: '5',
    skill: 'javaScript',
    img: '/skills/js.svg',
  },
 
  {
    id: '6',
    skill: 'HTML',
    img: '/skills/html.svg',
  },
  {
    id: '7',
    skill: 'Typescript',
    img: '/skills/ts.svg',
  },
  {
    id: '8',
    skill: 'CSS',
    img: '/skills/css.svg',
  },
  {
    id: '9',
    skill: 'Tailwind',
    img: '/skills/tailwind.svg',
  },
];

export const Skill = () => {
  return (
    <Element name="Skills">
      <div className="w-full bg-gradient-to-t to-[#000A1D] from-[rgb(0,0,0,0.3)] mt-6 xl:mt-0 py-2 ">
        <BaseLayout>
          <div className="gap-2 py-2 flex-center-col md:flex-center-row md:gap-4 md:py-4">
            <h1 className="text-lg font-semibold md:text-2xl lg:text-3xl">
              Skills
            </h1>
            <Marquee
              autoFill
              speed={60}
              className="border-x-2 border-[#131029] rounded-3xl"
            >
              {dataSkills.map(({ id, skill, img }) => (
                <Technologies key={id} srcImg={img} skill={skill} />
              ))}
            </Marquee>
          </div>
        </BaseLayout>
      </div>
    </Element>
  );
};
