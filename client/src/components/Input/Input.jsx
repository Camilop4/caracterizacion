import inputCss from "./input.module.css";
export const Input = ({
  typeInput,
  classInput,
  idInput,
  nameInput,
  onChangeInput,
  valueInput,
  placeholderInput,
}) => {
  return (
    <div className={inputCss.container_main}>
      <label htmlFor={idInput} className={inputCss.label}>
        {nameInput}
      </label>
      <input
        type={typeInput}
        className={inputCss.input}
        id={idInput}
        onChange={onChangeInput}
        value={valueInput}
        placeholder={placeholderInput ?? ""}
        name={idInput}
      />
    </div>
  );
};
