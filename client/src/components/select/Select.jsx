import React from "react";
import SelectCss from "./select.module.css";

function Select({ onChangeSelect, arrayOptions, nameSelect, idSelect }) {
  return (
    <fieldset className={SelectCss.fieldset_desing}>
      <legend>{nameSelect}</legend>
      <div className={SelectCss["content-select"]}>
        <select onChange={onChangeSelect} name={idSelect}>
          <option key={0} value={"default"}>{`Selecciona una opcion`}</option>
          {Array.isArray(arrayOptions) ? (
            arrayOptions.map(({ id, value }) => {
              return (
                <option value={value} key={id}>
                  {value}
                </option>
              );
            })
          ) : (
            <option value="nulo">No hay datos espere que carguemos</option>
          )}
        </select>
        <span></span>
      </div>
    </fieldset>
  );
}

export default Select;
