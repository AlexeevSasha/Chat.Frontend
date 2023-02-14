import styles from './sideBar.module.scss';
import { Input } from '../inputs/input/Input';

export const SideBar = () => {
  return (
    <div className={styles.container}>
      <Input id="search" name="search" />
      <div className={styles.verticalLine} />
    </div>
  );
};
