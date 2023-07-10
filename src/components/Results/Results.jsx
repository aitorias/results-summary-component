import data from "../../lib/data.json";

import UserResult from "../UserResult/UserResult";
import Summary from "../Summary/Summary";

import style from "./Results.module.css";

export default function Results() {
  const skills = data;

  const totalSkills = skills.length;
  const totalScore = skills.reduce((acc, skill) => acc + skill.score, 0);
  const averageScore = Math.round(totalScore / totalSkills);

  return (
    <article className={style.results}>
      <UserResult averageScore={averageScore} />
      <Summary data={skills} />
    </article>
  );
}
