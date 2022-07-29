import SocialMediaLink from '../SocialMedia/SocialMediaLink';
import Subtitle from '../Subtitle';

export default function GitHubLink({ texts}) {
  return (
    <>
      <h3>{ texts.title }</h3>
      <div>
        <SocialMediaLink 
          linkTo="https://www.github.com/devthiart"
          iconSrc="/images/icons/social-media/github-icon.png"
          iconAlt="GitHub Thiago André"
          text="github.com/devthiart"
        />
      </div>
      <style jsx>{`
        h3 {
          text-align: center;
          padding-bottom: var(--subtitle-font-size);
        }
        div {
          margin: 4rem;
        }
      `}</style>
    </>
  )
}
