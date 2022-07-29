export default function SocialMediaLink ({ iconSrc, iconAlt, text, linkTo }) {
  return(
    <>
      <a href={linkTo} target="_blank">
        <img src={iconSrc} alt={iconAlt}></img>
        <p>{text}</p>
      </a>
      <style jsx>{`
        a {
          align-items: center;
          color: var(--color-white-100);
          display: flex;
          justify-content: center;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        img {
          padding-right: 1rem;
        }

        p {
          font-size: var(--text-font-size)
        }
        @media only screen and (max-width: 992px) {
          a {
            flex-wrap: wrap;
          }

          p {
            margin: 1rem 0 2rem 0;
          }
        }
      `}</style>
    </>
  )
}
