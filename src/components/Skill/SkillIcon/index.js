export default function SkillIcon({ imgSrc, children, backgroundColor }) {
  return (
    <>
      <li>
        <div>
          <img src={imgSrc} alt="" />
        </div>
        <p>{ children }</p>
      </li>
      <style jsx>{`
        li {
          align-items: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 1rem;
        }

        div {
          align-items: center;
          background-color: ${backgroundColor};
          border: 1rem solid ${backgroundColor};
          border-radius: 32px;
          display: flex;
          justify-content: center;
          height: 8rem;
          width: 8rem;
        }

        img {
          max-height: 8rem;
          max-width: 8rem;
        }

        p {
          font-size: 1rem;
          padding: 1rem;
          text-align: center;
        }
      `}</style>
    </>
  );
}
