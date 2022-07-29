import { en, pt } from "../../../text-contents/introduction";
import SocialMediaListIcons from "../../components/SocialMedia/SocialMediaListIcons";

export default function Introduction({ lang }) {
  const texts = lang === 'en' ? en : pt;

  return (
    <>
      <section>
        <div className="introduction__content">
          <img
            src="/images/thiago-andre.jpg" 
            alt={texts.altPhoto}
          ></img>
          <div className="introduction__texts">
            <p>{ texts.introduction.firstLine }</p>
            <p>{ texts.introduction.secondLine }</p>
            <p>{ texts.introduction.thirdLine }</p>
            <p>{ texts.introduction.fourthLine }</p>
          </div>
        </div>
        <SocialMediaListIcons />
      </section>

      <style jsx>{`
        section {
          align-items: center;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          padding: 1rem;
        }

        img {
          border: var(--color-blue-100) solid 1rem;
          border-radius: 50%;
          width: 25vw;
          height: 25vw;
        }

        .introduction__texts {
          width: 50%;
        }

        .introduction__texts p {
          font-size: 3rem;
          padding-bottom: 0.5rem;
        }

        .introduction__content {
          align-items: center;
          display: flex;
          justify-content: space-evenly;
          width: 100vw;
        }

        @media only screen and (max-width: 992px) {
          section {
            margin-top: 1rem;
          }

          .introduction__content {
            flex-direction: column;
          }

          img {
            width: 50vw;
            height: 50vw;
            margin-bottom: 3rem;
          }

          .introduction__texts {
            width: 80%;
            margin-bottom: 2rem;
          }

          .introduction__texts p {
            font-size: 2rem;
            text-align: center;
          }
        }
      `}</style>
    </>
  )
}
