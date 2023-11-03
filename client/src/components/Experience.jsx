const Experience = () => {
  return (
    <div className="text-white pt-40 flex flex-col ml-10 lg:ml-48 mr-10 max-w-6xl">
      <h2 className="font-mono text-3xl mb-10 ">
        <span className="text-green font-mono">02. </span>Experience
      </h2>
      <div className="ml-5">
        <div>
          <h2 className="text-3xl mb-5">Backend Developer at MoruApp</h2>
          <p className="text-xl mb-5">
            As a Backend Developer at MoruApp, my primary role was to build and
            maintain a solid foundation for the platform, working closely with
            the Frontend Development team to ensure user security and a positive
            user experience.
          </p>
          <p className="text-xl mb-10">
            I contributed to the growth of MoruApp and maintained a safe
            environment for users. Witnessing how the team's efforts
            materialized was truly amazing.
          </p>
        </div>

        <p className="text-xl max-w-3xl mr-5 mb-10">
          I have experience in building server-side
          applications and systems using:
           <span className="text-green mt-4 block">JavaScript</span>
           <span className="text-green block">NodeJS</span>
           <span className="text-green block">Express</span>
           <span className="text-green block">Sequelize</span>
           <span className="text-green block">Json Web Token</span>
           <span className="text-green block">Node Mailer</span>
           <span className="text-green block">Cloudinary</span>
        </p>
        <p className="text-xl max-w-3xl mr-5 mb-10">
        Also, I have experience in databases using:
        <span className="text-green mt-4 block">Postgres</span>
        <span className="text-green block">MySQL</span>
        </p>
        <p className="text-xl max-w-3xl mb-10">
          In addition to my backend experience, I'm
          also familiar with technologies and frameworks for client-side
          development: 
          <span className="text-green mt-4 block">React JS</span>
          <span className="text-green block">Redux - Redux Toolkit</span>
          <span className="text-green block">Tailwind CSS</span>
        </p>
        <p className="text-xl max-w-3xl mr-5">Extras: 
        <span className="text-green mt-4 block">GitHub</span>
        <span className="text-green block">Git Flow</span>
        </p>
      </div>
    </div>
  );
};

export default Experience;
