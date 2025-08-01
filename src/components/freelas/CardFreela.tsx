// Skill
import { Technologies } from '../Skill/Technologies';
// Marque
import Marquee from 'react-fast-marquee';
// Types
import { ICard, ICardFreelas } from './@types';

const Card = ({ title, content }: ICard) => {
  return (
    <div className="flex flex-row items-center gap-1 mt-3">
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="text-sm opacity-80 line-clamp-1">{content}</p>
    </div>
  );
};

const CardFreelas = ({ img, name, service, language, link }: ICardFreelas) => {
  return (
    <div className=" bg-[url('/background/desktop.png')] border border-[rgba(255,_255,_255,_0.5)] rounded-2xl p-3">
      <a href={link} target="_blank">
        <img
          className="block hover:scale-105 mb-3 rounded-xl transition-all duration-500 cursor-pointer  w-full h-[140px] md:h-[200px] lg:h-[180px] xl:h-[220px] 2xl:h-[250px] object-cover object-top"
          src={img}
          alt="Project"
        />
      </a>
      <Card title="Name:" content={name} />
      <Card title="Service:" content={service} />
      <div className="flex flex-col items-center gap-2 mt-2 min-[400px]:flex-row">
        <h3 className="hidden lg:block font-semibold">Language:</h3>{' '}
        <Marquee
          autoFill
          speed={30}
          className="flex items-center justify-center w-full gap-16"
        >
          {language.map(({ img, skill }) => {
            return (
              <Technologies
                key={skill}
                classDiv="ml-1 min-[400px]:ml-0.5 lg:min-w-[20px]"
                classImg="w-[20px] h-[20px]  lg:w-[25px] lg:h-[25px]"
                skill={skill}
                srcImg={img}
              />
            );
          })}
        </Marquee>
      </div>
    </div>
  );
};

export default CardFreelas;
