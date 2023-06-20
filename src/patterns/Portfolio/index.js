import { en, pt } from '../../../text-contents/portfolio';
import Title from '../../components/Title';
import Project from '../../components/Project';
import GitHubLink from '../../components/GitHubLink';

export default function Portfolio ({ lang }) {
  const texts = lang === 'en' ? en : pt;
  
  return (
    <>
      <section id="portfolio">
        <Title>{texts.title}</Title>

        <Project texts={texts.mygnar}>
          {/* <img src="/images/portfolio/mygnar-game.gif" alt={texts.mygnar.imgAlt} /> */}
          <iframe src="https://www.youtube-nocookie.com/embed/3MLnwGRkcfk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Project>

        <Project texts={texts.myWebsite} hiddenLinkToProject>
          <img src="/images/portfolio/portfolio-website.png" alt={texts.myWebsite.imgAlt} />
        </Project>
        
        <GitHubLink texts={texts.githubLink}/>
        
      </section>
      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        iframe {
          padding-bottom: 2rem;
          width: 90vw;
          height: 45vw;
        }

        img {
          max-width: 90vw;
          margin-bottom: 1rem; 
        }
      `}</style>
    </>
  );
}
