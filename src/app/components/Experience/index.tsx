import Image from "next/image"

const Experience = () => {
  const experiences = [
    {
      logo: 'dana-logo.svg',
      company: 'DANA',
      position: 'Web Software Engineer',
      monthOfJoined: 'September 22 - Present, Jakarta',
      content: `
        Currently, I am working on WebHR Mobile Application, WebHR is a Cloud based Social HR Software for SMEs by Verge Systems Inc. WebHR is currently used in over 160 countries world wide by thousands of organizations to manage HR, As a React.js developer with 1.5 year of experience, I have a strong foundation in creating dynamic and responsive mobile and web applications.
        <br/>
        <br/>
        My experience with React Native has allowed me to develop cross-platform mobile applications that run seamlessly on both iOS and Android platforms. Additionally, my proficiency in React.js has equipped me with the skills to create fast, scalable, and dynamic web pages with excellent user experiences. I have a deep understanding of component-based architecture and state management, and I am well-versed in the latest web development trends and technologies.
      `,
      tags: ['ReactJS', 'VueJS', 'JavaScript', 'ANTD']
    },
    {
      logo: 'adira-logo.png',
      company: 'Adira Finance',
      position: 'Application Developern Intern',
      monthOfJoined: 'February 21 - February-22, Jakarta',
      content: `
        Currently, I am working on WebHR Mobile Application, WebHR is a Cloud based Social HR Software for SMEs by Verge Systems Inc. WebHR is currently used in over 160 countries world wide by thousands of organizations to manage HR, As a React.js developer with 1.5 year of experience, I have a strong foundation in creating dynamic and responsive mobile and web applications.
        <br/>
        <br/>
        My experience with React Native has allowed me to develop cross-platform mobile applications that run seamlessly on both iOS and Android platforms. Additionally, my proficiency in React.js has equipped me with the skills to create fast, scalable, and dynamic web pages with excellent user experiences. I have a deep understanding of component-based architecture and state management, and I am well-versed in the latest web development trends and technologies.
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