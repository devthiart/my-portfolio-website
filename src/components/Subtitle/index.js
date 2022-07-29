export default function Subtitle({ as, children }) {
  const Tag = as || 'h3';

  return(
    <>
      <Tag>{ children }</Tag>
      <style jsx>{`
        ${Tag} {
          font-size: var(--subtitle-font-size);
          margin-bottom: var(--subtitle-font-size);
          text-align: center;
        }
      `}</style>
    </>
  );
}
