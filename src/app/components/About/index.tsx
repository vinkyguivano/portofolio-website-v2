'use client'
import { useLanguage, ILanguage } from "@/app/context/LanguageContext"

const AboutMe = () => {
  const { t } = useLanguage() as ILanguage

  return (
    <section id="about" className="mt-[105px] font-inter">
      <div className="font-extrabold text-5xl">{t('about.me')}</div>
      <div className="font-medium text-sm bg-[linear-gradient(to_right,_var(--color-purple-400)_20%,_var(--color-orange-400)_100%)] bg-clip-text text-transparent tracking-[7px]">{t('explore.now')}</div>
      <div className="mt-14 max-xs:text-sm">
        {t('about.me.paragraph.1')}
        <br/>
        <br/>
        {t('about.me.paragraph.2')} 
      </div>
    </section>
  )
}

export default AboutMe