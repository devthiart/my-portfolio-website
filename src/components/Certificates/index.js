import Certificate from "./Certificate";

export default function Certificates({ texts }) {
  return (
    <>
      <ul>
        <Certificate texts={texts.frontEnd} imgSrc="/images/certificates/frontend.png" />
        <Certificate texts={texts.react} imgSrc="/images/certificates/reactjs.png" />
        <Certificate texts={texts.unity} imgSrc="/images/certificates/unity.png" />
        <Certificate texts={texts.english} imgSrc="/images/certificates/english.png" />
        <Certificate texts={texts.leadership} imgSrc="/images/certificates/leadership.png" />
      </ul>
      <style jsx>{`
        ul {
          display: grid;
          grid-template-columns: 1fr 1fr;
          justify-items: center;
        }

        @media only screen and (max-width: 992px) {
          ul {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}
