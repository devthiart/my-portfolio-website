export default function Certificate({ texts, imgSrc }) {
  return(
    <>
      <li>
        <a href={texts.link} target="_blank">
          <h4>{texts.title}</h4>
          <img src={imgSrc} alt={texts.alt} />
        </a>
      </li>
      <style jsx>{`
        li:hover {
          font-weight: bold;
          text-decoration: underline;
        }

        li img{
          max-width: 40vw;
          padding: 1rem;
        }

        h4 {
          font-size: 1.5rem;
          text-align: center;
        }

        a {
          color: var(--color-white-100);
          text-decoration: none;
        }

        @media only screen and (max-width: 992px) {
          li img {
            max-width: 80vw;
          }
        }
      `}</style>
    </>
  )
}
