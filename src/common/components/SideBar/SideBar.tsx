import styles from './sideBar.module.scss';
import { useRef } from 'react';
import { useResizableWidth } from '../../hooks/useResizableWidth';
import { SearchInput } from '../../ui/inputs/SearchInput';
import { IconMenu } from '../Icon/MenuIcon';
import { Conversation } from '../../../modules/conversation/components/Conversation';
import { useUserStore } from '../../../modules/user/store';

//todo delete method exit

export const SideBar = () => {
  const ref = useRef(null);
  const { activeEvent, width } = useResizableWidth(ref);
  const logout = useUserStore((state) => state.logout);

  return (
    <aside style={{ width }} className={styles.container}>
      <div className={styles.containerMenu}>
        <button className={styles.menu}>
          <IconMenu />
        </button>
        <SearchInput id="search" name="search" placeholder={'Search...'} />
      </div>
      <button onClick={logout}>Выход</button>
      <br />
      <br />
      <br />
      <Conversation.ConversationsContainer />
      <div className={styles.verticalLine} ref={ref} />
      {activeEvent ? <div className={styles.freeze} /> : null}
    </aside>
  );
};
