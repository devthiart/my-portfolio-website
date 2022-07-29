import { useRouter } from "next/router";
import { useState } from "react";
import { en, pt } from '../../../text-contents/menu';

export default function Navbar() {
  const router = useRouter();
  const { locale } = router;
  const texts = locale === 'en' ? en : pt;
  const [showMenu, setShowMenu] = useState(false);
  
  function changeLanguage(event) {
    const lang = event.target.value;

    router.push(`/${lang}`, `/${lang}`, {locale: lang});

    toggleMenu();
  }

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <nav id="home">
        <ul>
          <li><button onClick={toggleMenu}><img src="/images/icons/close.svg" /></button></li>
          <li className="menu_item--active"><a href="#home" onClick={toggleMenu}>{texts.home}</a></li>
          <li><a href="#about" onClick={toggleMenu}>{texts.about}</a></li>
          <li><a href="#portfolio" onClick={toggleMenu}>{texts.portfolio}</a></li>
          <li><a href="#contact" onClick={toggleMenu}>{texts.contact}</a></li>
          <select
            onChange={changeLanguage}
            defaultValue={locale}
          >
            {
              router.locales.map((currentLocale, index) => {
                return (
                  <option value={currentLocale} key={index}>{currentLocale.toUpperCase()}</option>
                );
              })
            }
          </select>
        </ul>
        <button className="sandwich-menu" onClick={toggleMenu}><img src="/images/icons/sandwich-menu.svg"></img></button>
      </nav>

      <style jsx>{`
        nav {
          padding: 2rem;
        }

        ul {
          align-items: center;
          display: flex;
          justify-content: space-evenly;
        }

        li {
          font-size: 1.75rem;
        }

        li:hover {
          font-weight: bold;
        }

        .menu_item--active {
          font-weight: bold;
          border-bottom: 0.25rem solid var(--color-blue-100);
        }

        a {
          color: var(--color-white-100);
          text-decoration: none;
          transition: all 0.25s ease-out;
        }

        select {
          background-color: var(--color-background);
          border: 1px solid var(--color-white-100);
          border-radius: 6px;
          color: var(--font-color);
          font-size: 1.75rem;
          padding: 0.25rem;
        }

        button {
          display: none;
        }

        @media only screen and (max-width: 992px) {
          nav {
            display: flex;
            justify-content: flex-end;
            padding: 0;
          }

          ul {
            align-items: flex-end;
            background: var(--color-background);
            border-right: 1rem solid var(--color-blue-100);
            box-shadow: 2px 0 10px rgba(255, 255, 255, 0.3);
            flex-direction: column;
            gap: 1rem;
            height: 100%;
            justify-content: flex-start;
            left: ${showMenu ? '0' : '-100%'};
            padding: 1rem;
            position: fixed;
            transition: left 0.3s ease-out;
            z-index: 1;
            width: 80vw;
          }

          button {
            background-color: rgba(0, 0, 0, 0);
            border: none;
            display: block;
          }

          button img {
            width: 44px;
          }

          .sandwich-menu {
            padding: 2rem;
          }
        }
      `}</style>
    </>
  )
}
