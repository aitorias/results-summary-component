import style from "./Skill.module.css";

export default function Skill({ category, icon, score }) {
  const categoryClass = `${category.toLowerCase().replace(/\s/g, "-")}`;

  return (
    <div className={`${style.skill} ${style[categoryClass]}`}>
      <div className={style.skillInfo}>
        <img src={icon} alt={category} className={style.skillIcon} />
        <span className={style.skillName}>{category}</span>
      </div>
      <div className={style.skillScore}>
        <span className={style.skillValue}>{score}</span>
        <span className={style.skillOutOf}> / 100</span>
      </div>
    </div>
  );
}
