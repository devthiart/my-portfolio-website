export default function SocialMediaLink ({ iconSrc, iconAlt, text, linkTo }) {
  return(
    <>
      <a href={linkTo} target="_blank">
        <img src={iconSrc} alt={iconAlt}></img>
        <p>{text}</p>
      </a>
      <style jsx>{`
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: var(--color-white-100);
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
      `}</style>
    </>
  )
}
