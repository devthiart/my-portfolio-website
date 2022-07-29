import { en, pt } from '../../../text-contents/footer';
import SocialMediaListIcons from '../../components/SocialMedia/SocialMediaListIcons';

export default function Footer({ lang }) {
  const texts = lang === 'en' ? en : pt;
  const year = new Date().getFullYear();

  return (
    <>
      <footer>
        <p>© {year} - {texts.content}</p>
        <SocialMediaListIcons smallIcon />
      </footer>
      <style jsx>{`
        footer {
          display: flex;
          align-items: center;
          justify-content: space-around;
          border-top: 0.5rem solid var(--color-blue-100);
          padding: 2rem;
        }

        @media only screen and (max-width: 992px) {
          footer {
            flex-direction: column;
            gap: 2rem;
          }
        }
      `}</style>
    </>
  )
}
