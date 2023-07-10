import Skill from "../Skill/Skill";
import Button from "../Button/Button";

import style from "./Summary.module.css";

export default function Summary({ data }) {
  return (
    <section className={style.summary}>
      <h2 className={style.title}>Summary</h2>
      <div className={style.skills}>
        {data.map((skill, key) => (
          <Skill
            key={key}
            category={skill.category}
            icon={skill.icon}
            score={skill.score}
          />
        ))}
      </div>
      <div>
        <Button text={"Continue"} />
      </div>
    </section>
  );
}
