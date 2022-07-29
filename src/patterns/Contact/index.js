import { en, pt } from '../../../text-contents/contact';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';
import SocialMediaLink from '../../components/SocialMedia/SocialMediaLink';

export default function Contact({ lang }) {
  const texts = lang === 'en' ? en : pt;

  return (
    <>
      <section id="contact">
        <Title>{ texts.title }</Title>
        <Subtitle>{ texts.subtitle }</Subtitle>
        <ul>
          <li>
            <SocialMediaLink 
              linkTo="mailto:devthiart@gmail.com"
              iconSrc="/images/icons/social-media/email-icon.png"
              iconAlt=""
              text="devthiart@gmail.com"
            />
          </li>
          <li>
            <SocialMediaLink 
              linkTo="https://linkedin.com/in/devthiart"
              iconSrc="/images/icons/social-media/linkedin-icon.png"
              iconAlt=""
              text="linkedin.com/in/devthiart"
            />
          </li>
        </ul>
      </section>

      <style jsx>{`
        section {
          margin-bottom: 10rem;
        }

        ul { 
          display: grid;
          grid-template-rows: 1fr 1fr;
          grid-template-columns: 1fr 1fr 1fr;
          row-gap: 0.5rem;
        }
        
        li {
          justify-self: start;
          grid-column-start: 2;
        }
      `}</style>
    </>
  )
}
