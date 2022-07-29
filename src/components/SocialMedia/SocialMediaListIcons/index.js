export default function SocialMediaListIcons({smallIcon}) {
  // const cssIcon = smallIcon ? {padding: "4px", height: "32px"} : {padding: "1rem", height: "auto"}

  return(
    <>
      <div>
        <a href="https://www.linkedin.com/in/devthiart/" target="_blank">
          <img src="/images/icons/social-media/linkedin-icon.png" alt="Linkedin Thiago André"></img>
        </a>
        <a href="https://www.github.com/devthiart" target="_blank">
          <img src="/images/icons/social-media/github-icon.png" alt="GitHub Thiago André"></img>
        </a>
        <a href="https://www.behance.net/devthiart" target="_blank">
          <img src="/images/icons/social-media/behance-icon.png" alt="Behance Thiago André"></img>
        </a>
      </div>
      <style jsx>{`
        div {
          align-items: center;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        }

        a {
          padding: ${smallIcon ?  '8px' : '1rem'};
        }

        img {
          height: ${smallIcon ? '44px' : 'auto'};
        }
      `}</style>
    </>
  )
}
