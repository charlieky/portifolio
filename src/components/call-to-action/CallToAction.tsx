// Layout
import { BaseLayout } from '../../layout';
// form
import { Input } from '../form/Input';
import { TextArea } from '../form/TextArea';

export const CallToAction = () => {
  return (
    <div className="w-full h-1/2 xg:h-[956px] bg-[url(/background/desktop.png)] bg-center bg-cover">
      <BaseLayout className="justify-between gap-10 py-8 space-y-5 lg:flex">
        <div className="space-y-1 lg:mt-[26px] lg:w-[1000px]">
          <h2 className="text-lg font-semibold md:text-3xl">How I Work</h2>
          <iframe
            className="w-full h-[200px] rounded-lg m-auto min-[500px]:h-[400px] md:h-[400px] lg:h-[300px]"
            src="https://www.youtube.com/embed/m87Gm5nHDrU?si=1QPYfEh3DeKsueHk"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <p className="hidden pt-2 text-[1.075rem] tracking-wider text-justify lg:block opacity-[95%]">
           If you have an idea and want to develop it, you have found the right person
           to help.<br /> <br />
           My name is<strong>Phun Meng</strong>, I am a developer{' '}
            <strong>Full Stack e web designer</strong>. With my skills,
           I can create a layout of{' '}
            <strong>
              <a
                href="https://altimus.com.br/site-atrativo-para-revenda/#:~:text=Um%20site%20intuitivo%20e%20esteticamente,e%20pre%C3%A7os%2C%20cada%20detalhe%20conta."
                className="underline"
              >
                attractive website
              </a>
            </strong>{' '}
            for its customers, transforming it into a{' '}
            <strong>
              <a
                href="https://www.webshare.com.br/blog/importancia-site-responsivo/#:~:text=Os%20sites%20responsivos%20contribuem%20para,para%20acessar%20sites%20n%C3%A3o%20responsivos."
                className="underline"
              >
                {' '}
             responsive and functional website
              </a>
            </strong>
            . In addition, I try to develop the code in a way that is
            organized and easy to understand. So, how about we put this idea
            into practice? Tell me what your idea is by filling out the form on the side, and we will make it a reality together.
          </p>
        </div>
        <form
          className="w-full space-y-2"
          action="https://formsubmit.co/rogerinhoportfolio@gmail.com"
          method="POST"
        >
          <h1 className="text-lg font-semibold md:text-3xl">
          Get in touch
          </h1>
          <div className="p-4 bg-gradient-to-tl from-[#000514D4] to-[#010617] rounded-[10px] space-y-4 md:p-9">
            <Input required label="Name" type="text" name="name" />
            <Input required label="Email" type="email" name="email" />
            <TextArea
              required
              name="description"
              label="Description (optional)"
              type="text"
              className="h-40 md:h-64"
            />

            <button
              type="submit"
              className="w-full py-2.5 bg-gradient-to-r from-[#913857] to-[#56244B] rounded-md font-semibold text-lg"
            >
              To send
            </button>
          </div>
        </form>
      </BaseLayout>
    </div>
  );
};
