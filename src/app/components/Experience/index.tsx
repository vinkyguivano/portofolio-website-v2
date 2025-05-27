'use client'
import Image from "next/image"
import { useLanguage, ILanguage } from "@/app/context/LanguageContext"

const Experience = () => {
  const { t } = useLanguage() as ILanguage
  const experiences = [
    {
      logo: 'dana-logo.svg',
      company: 'DANA',
      position: t('experience.1.role'),
      monthOfJoined: t('experience.1.date'),
      content: t('experience.1.desc'),
      tags: ['React.js', 'Vue.js', 'JavaScript', 'CSS']
    },
    {
      logo: 'adira-logo.png',
      company: 'Adira Finance',
      position: t('experience.2.role'),
      monthOfJoined: t('experience.2.date'),
      content: t('experience.2.desc'),
      tags: ['React.js', 'React Native', 'Node.js', 'Java']
    }
  ] 

  return (
    <section id="about" className="mt-[105px] font-inter">
      <div className="font-extrabold text-5xl max-xs:text-4xl">{t('experience')}</div>
      <div className="font-medium text-sm bg-[linear-gradient(to_right,_var(--color-purple-400)_20%,_var(--color-orange-400)_100%)] bg-clip-text text-transparent tracking-[7px]">{t('explore.now')}</div>
      {experiences.map((exp, i) => (
        <div className="mt-14 text-left max-xs:text-sm" key={i}>
          <div className="flex items-center justify-between gap-2.5 max-sm:flex-col max-sm:items-start">
            <div className="flex items-center gap-2.5">
              <div className="rounded-full overflow-hidden bg-background">
                <Image 
                  src={`/${exp.logo}`} 
                  alt="company logo"
                  width={40}
                  height={40}
                />
              </div>
              <div className="text-lg max-xs:text-base">
                <b>{exp.company}</b> 
                <div>{exp.position}</div>
              </div>
            </div>
            <div className="shrink-0 text-gray-300 text-sm uppercase">{exp.monthOfJoined}</div>
          </div>
          <div className="mt-8 text-justify" dangerouslySetInnerHTML={{ __html: exp.content }}/>
          <div className="mt-5 flex gap-2.5 items-center justify-start flex-wrap">
            {exp.tags.map((tag) => (
              <div key={tag} className="min-w-14 shrink-0 rounded-full p-0.5 bg-gradient-to-r from-purple-400 to-orange-400">
                <div className="rounded-full bg-background px-4 py-1.5">
                  <span className="text-gray-300 text-sm max-xs:text-xs">{tag}</span>
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