import Image from "next/image"

const Experience = () => {
  const experiences = [
    {
      logo: 'dana-logo.svg',
      company: 'DANA',
      position: 'Web Software Engineer',
      monthOfJoined: 'September 22 - Present, Jakarta',
      content: `
        Currently, I'm working at DANA Indonesia, where I develop the DANA Merchant Portal, a web-based platform that enables enterprises and merchants to register and integrate with DANA's payment solutions. 
        As a Web Software Engineer, I'm responsible for both building and maintaining the front-end of the application.
        <br/>
        <br/>
        My proficiency in React.js allows me to create fast, reliable, and dynamic web interfaces. 
        I work closely with a design system and focus on building responsive user interfaces to ensure a consistent and seamless user experience across devices. 
        This role has given me valuable insights into best practices from both business and technology perspectives, helping me grow into a more well-rounded and effective software engineer.
      `,
      tags: ['ReactJS', 'VueJS', 'JavaScript', 'CSS']
    },
    {
      logo: 'adira-logo.png',
      company: 'Adira Finance',
      position: 'Application Developern Intern',
      monthOfJoined: 'February 21 - February-22, Jakarta',
      content: `
        My role at Adira Finance was a Application Developer Intern. 
      `,
      tags: ['ReactJS', 'React Native', 'NodeJS', 'Java']
    }
  ] 

  return (
    <section id="about" className="mt-[105px] font-inter">
      <div className="font-extrabold text-5xl">EXPERIENCE</div>
      <div className="font-medium text-sm bg-[linear-gradient(to_right,_var(--color-purple-400)_20%,_var(--color-orange-400)_100%)] bg-clip-text text-transparent tracking-[7px]">EXPLORE NOW</div>
      {experiences.map((exp, i) => (
        <div className="mt-14 text-left" key={i}>
          <div className="flex items-center justify-between gap-2.5">
            <div className="flex items-center gap-2.5">
              <div className="rounded-full overflow-hidden bg-background">
                <Image 
                  src={`/${exp.logo}`} 
                  alt="company logo"
                  width={40}
                  height={40}
                />
              </div>
              <div className="text-lg">
                <b>{exp.company}</b> 
                <div>{exp.position}</div>
              </div>
            </div>
            <div className="shrink-0 text-gray-300 text-sm uppercase">{exp.monthOfJoined}</div>
          </div>
          <div className="mt-8 text-justify" dangerouslySetInnerHTML={{ __html: exp.content }}/>
          <div className="mt-5 flex gap-2.5 items-center justify-start">
            {exp.tags.map((tag) => (
              <div key={tag} className="min-w-14 shrink-0 rounded-full p-0.5 bg-gradient-to-r from-purple-400 to-orange-400">
                <div className="rounded-full bg-background px-4 py-1.5">
                  <span className="text-gray-300 text-sm">{tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default Experience