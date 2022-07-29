import { en, pt } from '../../../text-contents/aboutme';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';
import SkillList from '../../components/Skill/SkillList';
import Certificates from '../../components/Certificates';

export default function AboutMe({ lang }) {
  const texts = lang === 'en' ? en : pt;
  const content = texts.content;
  const contentKeys = Object.keys(content);

  return (
    <>
      <section id="about">
        <Title>{texts.title}</Title>
        {
          contentKeys.map(key => {
            return(
              <p key={key}>{content[key]}</p>
            )
          })
        }
        <div>
          <Subtitle>{texts.subtitleMySkills}</Subtitle>
          <SkillList />
        </div>
        <div>
          <Subtitle>{texts.subtitleCertificates}</Subtitle>
          <Certificates texts={texts.certificates}/>
        </div>
      </section>
      <style jsx>{`
        p {
          font-size: var(--text-font-size);
          line-height: 1.25;
          padding: 0 5% 2% 5%;
        }

        div {
          margin: 2rem auto;
        }
      `}</style>
    </>
  );
}
