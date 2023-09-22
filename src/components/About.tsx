import image from "../assets/me.png";

function About() {
  return (
    <div className="min-h-screen h-full w-full flex bg-black justify-center">
      <div className="text-white">mode</div>
      <div className="p-48 grid grid-cols-2">
        <div className="p-20">
          <div className="text-white">Hello, it's me</div>
          <div className="text-white text-5xl">Melissa Ingles</div>
          <div className="text-white font-thin">
            Innovative intermediate software engineer striving to develop
            technology that enriches people's lives. A creative thinker, adept
            in software development. Proficient in various platforms and
            languages. Able to effectively self-manage during independent
            projects, as well as collaborate as part of a productive team.
          </div>
        </div>
        <div className="">
          <img className="object-fill h-96" src={image} alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default About;
