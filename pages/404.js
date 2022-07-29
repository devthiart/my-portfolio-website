import Link from 'next/link'

export default function PageNotFound () {
  return (
    <>
      <style>{`
        h1 {
          font-size: 2rem;
        }
      `}</style>

      <h1>404 - Page Not Found.</h1>
      <Link href="/"><a>Back to home</a></Link>
    </>


  )
}
