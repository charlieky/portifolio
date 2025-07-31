//react scroll
import { Element } from 'react-scroll';
//components
import { Project } from './Project';
// Layouts
import { BaseLayout } from '../../layout';

const data = [
  {
    title: 'M-shop Just Store',
    text: 'M-Shop is an e-commerce focused on electronic technology, meticulously designed to provide a unique and engaging shopping experience.',
    srcImg: '/projects/ecommerce.png',
    link: 'https://mshop.psamarket.shop/',
    time: '05/02/2024,',
    skill: [
      {
        id: 6,
        skill: 'javaScript',
        img: '/skills/js.svg',
      },
      {
        id: 2,
        skill: 'React',
        img: '/skills/react.svg',
      },
      {
        id: 9,
        skill: 'CSS',
        img: '/skills/css.svg',
      },
    ],
  },
  {
    title: 'Landing Page',
    text: 'It is an easy-to-use website that simplifies visualization of user information on website, where users can simply type in the Gambling  they want to search for. Within seconds, provides a detailed view of the public information available about the branding.',
    srcImg: '/projects/searchGithub.png',
    link: 'https://pk777.mysbfourtun.site/',
    time: '12/04/2024,',
    skill: [
      {
        id: 2,
        skill: 'React',
        img: '/skills/react.svg',
      },
      {
        id: 1,
        skill: 'javaScript',
        img: '/skills/js.svg',
      },                     
      {
        id: 3,
        skill: 'Tailwind',
        img: '/skills/tailwind.svg',
      },
    ],
  },
  {
    title: 'Admin Dashboard',
    text: 'Development of a simple can use template for an unlimited number of personal and commercial projects. These can include commercial landing pages, websites, or SaaS applications that end users pay to access.',
    srcImg: '/projects/kanban.png',
    time: '08/11/2024, 2 weeks for study',
    link: 'https://dashboard.mysbfourtun.site/',
    skill: [
      {
        id: 1,
        skill: 'React',
        img: '/skills/react.svg',
      },
      {
        id: 2,
        skill: 'TypeScript',
        img: '/skills/ts.svg',
      },
      {
        id: 2,
        skill: 'Tailwind',
        img: '/skills/tailwind.svg',
      },
    ],
  },
];

export const MyProjects = () => {
  return (
    <BaseLayout>
      <Element name="Projects">
        <div className=" w-full mt-[70px] flex flex-col items-center lg:items-start ">
          <h1 className="mb-8 text-3xl font-semibold text-center sm:mb-12 sm:text-start md:text-6xl">
            Projects
          </h1>

          {data.map((item, index) => (
            <Project
              key={index}
              flexReverse={
                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }
              {...item}
            />
          ))}
        </div>
      </Element>
    </BaseLayout>
  );
};
