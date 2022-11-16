import css from '../Page.module.css';
import welcome from '../../img/welcome.png';

export default function HomePage() {
  return (
    <>
      <h2 className={css.titleHome}>
        <img
          className={css.titleHomePng}
          src={welcome}
          alt="user"
          width="700"
        />
      </h2>
    </>
  );
}