import React from "react";
import PersonInfo from "../../components/infoPerson/PersonInfo";
import { useCoreExist } from "../../store/coreExistStore";
import infoFinal from "./infoFinal.module.css";

function InfoFinal({ pageNext, home }) {
  const personInfo = useCoreExist((state) => state.person);
  const addBaseData = (e) => {
    e.preventDefault();
    pageNext();
  };
  return (
    <main className={infoFinal.container_main}>
      <PersonInfo person={personInfo} />
      <div className={infoFinal.container_button}>
        <button onClick={addBaseData} className={infoFinal.entrar_button}>
          Aceptar
        </button>
        <button onClick={home} className={infoFinal.entrar_button}>
          Home
        </button>
      </div>
    </main>
  );
}

export default InfoFinal;
