import css from "./Filter.module.css";

const Filter = ({ value, onFilter }) => {
  return (
    <div className={css.filter}>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};

export default Filter;
