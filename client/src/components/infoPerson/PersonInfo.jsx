import React from "react";
import styles from "./PersonInfo.module.css";

const PersonInfo = ({ person }) => {
  const {
    nombre,
    edad,
    parentesco,
    sexo,
    escolaridad,
    etnia,
    actividadEconomica,
    ingresoMensual,
    salud,
    pension,
    discapacidad,
    victima,
  } = person;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Información de la Persona</h1>
      <div className={styles.infoItem}>
        <label className={styles.label}>Nombre:</label>
        <span className={styles.value}>{nombre}</span>
      </div>
      <div className={styles.infoItem}>
        <label className={styles.label}>Edad:</label>
        <span className={styles.value}>{edad}</span>
      </div>
      <div className={styles.infoItem}>
        <label className={styles.label}>
          Parentesco dentro del núcleo familiar:
        </label>
        <span className={styles.value}>{parentesco}</span>
      </div>
      <div className={styles.infoItem}>
        <label className={styles.label}>Sexo:</label>
        <span className={styles.value}>{sexo}</span>
      </div>
      <div className={styles.infoItem}>
        <label className={styles.label}>Nivel de escolaridad:</label>
        <span className={styles.value}>{escolaridad}</span>
      </div>
      <div className={styles.infoItem}>
        <label className={styles.label}>Grupo étnico:</label>
        <span className={styles.value}>{etnia}</span>
      </div>
      <div className={styles.infoItem}>
        <label className={styles.label}>Actividad económica:</label>
        <span className={styles.value}>{actividadEconomica}</span>
      </div>
      <div className={styles.infoItem}>
        <label className={styles.label}>Ingreso mensual:</label>
        <span className={styles.value}>{ingresoMensual}</span>
      </div>
      <div className={styles.infoItem}>
        <label className={styles.label}>Régimen de salud:</label>
        <span className={styles.value}>{salud}</span>
      </div>
      <div className={styles.infoItem}>
        <label className={styles.label}>Cotiza pensión:</label>
        <span className={styles.value}>{pension}</span>
      </div>
      <div className={styles.infoItem}>
        <label className={styles.label}>Discapacidad:</label>
        <span className={styles.value}>{discapacidad}</span>
      </div>
      <div className={styles.infoItem}>
        <label className={styles.label}>Víctima del conflicto:</label>
        <span className={styles.value}>{victima}</span>
      </div>
    </div>
  );
};

export default PersonInfo;
