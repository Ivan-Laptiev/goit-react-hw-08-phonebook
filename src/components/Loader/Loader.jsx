import { FidgetSpinner } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.BoxLoader}>
      <FidgetSpinner color="#30b407" height={100} width={100} />
    </div>
  );
}