import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16"
    >
      <div className="max-w-[1240px] m-auto">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600 m-auto max-w-[70%]">
            I specialize in crafting fullstack cross-platform web applications
            that bring ideas to life. The world of technology constantly
            evolves, and I&apos;m fueled by my passion for staying at the
            forefront. What excites me most is the recognition that for every
            challenge, there&apos;s a multitude of solutions. Currently,
            I&apos;m working with Angular, Ionic, Node.js, React, Next.js,
            Python Django Rest Framework, SQL and noSQL databases. I truly
            believe that true expertise in development isn't tied to a single
            language, but rather to the ability to select the perfect tool for
            each unique task.
          </p>
          <p className="py-2 text-gray-600 m-auto max-w-[70%]">
            My academic journey led me to earn a degree in Chemical Engineering
            with a minor in Oil and Gas. However, at the start of 2023, I set
            out on a new path in software engineering and was instantly
            captivated. What drives me is the desire to bridge the gap between
            my background in chemical, oil and gas, and the dynamic realm of
            software engineering. Beyond coding, I find joy in exploring
            emerging technologies during my leisure hours. When I'm not immersed
            in the world of development, you might catch me indulging in a few
            rounds of video games.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
