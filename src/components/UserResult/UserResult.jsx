import style from "./UserResult.module.css";

export default function UserResult({ averageScore }) {
  return (
    <section className={style.result}>
      <h2 className={style.title}>Your Result</h2>
      <div className={style.userScore}>
        <span className={style.value}>{averageScore}</span>
        <span className={style.total}>of 100</span>
      </div>
      <div className={style.description}>
        <span className={style.calification}>Great</span>
        <p className={style.text}>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </section>
  );
}
