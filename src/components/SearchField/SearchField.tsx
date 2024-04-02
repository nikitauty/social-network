import { PlusIcon, SearchIcon } from 'lucide-react';
import styles from './SearchField.module.scss';

export const SearchField = () => {
  return (
    <section className={styles.search}>
      <div className={styles.search_box}>
        <SearchIcon />
        <input
          type="search"
          name="search_input"
          id="search_input"
          placeholder="People, groups and messages"
          className={styles.search_input}
        />
      </div>
      <button type="button" className={styles.button_add}>
        <PlusIcon />
      </button>
    </section>
  );
};
