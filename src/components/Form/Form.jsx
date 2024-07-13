import css from "./Form.module.css";

const Form = ({ onAdd }) => {
  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    onAdd({
      id: `id-${Date.now() % 1000000000}`,
      text: e.target.elements.text.value,
      name: e.target.elements.text.value,
      number: `${Date.now() % 10000000}`,
    });
    e.target.reset();
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        <span>Form input</span>
        <input className={css.field} type="text" name="text" />
      </label>
      <button className={css.formBtn} type="submit">
        Add task
      </button>
    </form>
  );
};

export default Form;
