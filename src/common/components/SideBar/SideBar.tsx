import styles from './sideBar.module.scss';
import { useRef } from 'react';
import { useResizableWidth } from '../../hooks/useResizableWidth';
import { SearchInput } from '../../ui/inputs/SearchInput';

export const SideBar = () => {
  const ref = useRef(null);
  const { activeEvent, width } = useResizableWidth(ref);

  return (
    <aside style={{ width }} className={styles.container}>
      <SearchInput id="search" name="search" placeholder={'Search...'} />
      <div className={styles.verticalLine} ref={ref} />
      {activeEvent ? <div className={styles.freeze} /> : null}
    </aside>
  );
};
