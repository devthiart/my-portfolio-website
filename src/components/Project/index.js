import Subtitle from "../Subtitle";

export default function Project ({ texts, children, hiddenLinkToProject }) {
  const content = texts.content;  
  const contentKeys = Object.keys(content);
  const media = children;

  return (
    <>
      <div>
        <Subtitle>{texts.title}</Subtitle>
        { media }
        {
          contentKeys.map(key => {
            return (
              <p key={key}>{ content[key] }</p>
            )
          })
        }
        <a href={texts.link} target="_blank" hidden={hiddenLinkToProject}>{texts.buttonText}</a>
      </div>

      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0 3rem 4rem 3rem;
        }

        p {
          font-size: var(--text-font-size);
          line-height: 1.25;
          padding: 0 0 2% 0;
        }

        a {
          background-color: var(--color-blue-100);
          border: 1rem solid var(--color-blue-100);
          border-radius: 8px;
          color: var(--color-white-100);
          font-size: var(--text-font-size);
          padding: 1rem 2rem;
          text-decoration: none;
        }
        
        a:hover {
          text-decoration: underline;
          background-color: var(--color-blue-80);
          border: 1rem solid var(--color-blue-80);
        }
      `}</style>
    </>
  )
}
