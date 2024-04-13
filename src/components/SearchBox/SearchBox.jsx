import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onSearch }) => {
  return (
    <div>
      <p className={styles.label}>Find contacts by name</p>
      <input
        className={styles.searchField}
        type="text"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
