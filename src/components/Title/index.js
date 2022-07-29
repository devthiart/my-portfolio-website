export default function Title({ as, children }) {
  const Tag = as || 'h2';

  return(
    <>
      <Tag>{ children }</Tag>
      <style jsx>{`
        ${Tag} { 
          font-size: var(--title-font-size);
          margin-bottom: var(--title-font-size);
          text-align: center;
          text-decoration: underline;
          text-decoration-color: var(--color-blue-100);
        }
      `}</style>
    </>
  )
}
