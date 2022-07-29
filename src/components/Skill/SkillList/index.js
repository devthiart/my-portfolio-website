import SkillIcon from "../SkillIcon";
import { skills } from "../../../../text-contents/skills";

export default function SkillList() {
  const keys = Object.keys(skills);

  return(
    <>
      <ul>
        {
          keys.map(
            key => {
              return(
                <SkillIcon 
                  imgSrc={ skills[key].iconSrc }
                  backgroundColor={ skills[key].backgroundColor }
                  key={key}
                >
                  { skills[key].name }
                </SkillIcon>
              )
            }
          )
        }
      </ul>
      <style jsx>{`
        ul {
          align-items: center;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
        }
      `}</style>
    </>
  )
}
