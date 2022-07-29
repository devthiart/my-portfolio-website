import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from '../src/patterns/Navbar';
import Introduction from '../src/patterns/Introduction';
import AboutMe from '../src/patterns/AboutMe';
import Portfolio from '../src/patterns/Portfolio';
import Contact from '../src/patterns/Contact';
import Footer from '../src/patterns/Footer';

export default function Home() {
  const router = useRouter();
  const { locale } = router;

  return (
    <>
      <Head>
        <title>Thiago Andre</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navbar />
      </header>

      <main>
        <Introduction lang={locale} />
        <AboutMe lang={locale} />
        <Portfolio lang={locale} />
        <Contact lang={locale} />
      </main>

      <Footer lang={locale} />
      
    </>
  )
}
