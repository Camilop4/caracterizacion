import React from "react";
import { useState } from "react";
import Select from "../../components/select/Select";
import { useOptions } from "../../store/constantes";
import { useCore } from "../../store/coreNotStore";
import formHome from "./formHome.module.css";

function FormHome({ pageNext, pageBack }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState({});
  const [addHouse] = useCore((state) => [state.addHouse]);
  const nucleo = useOptions((state) => state.nucleo);

  function handlerData(event) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  }

  const addInfoHouse = () => {
    const requiredProperties = [
      "vivienda",
      "area",
      "techo",
      "paredes",
      "piso",
      "numHabitaciones",
      "preAlimentos",
      "servicios",
      "numBanos",
      "conBanos",
      "eneCocina",
      "agua",
      "residuos",
    ];
    const hasAllProperties = requiredProperties.every((propiedad) =>
      data.hasOwnProperty(propiedad)
    );
    if (hasAllProperties) {
      addHouse(data);
      pageNext();
    } else {
      console.error("Faltan datos");
    }
  };

  return (
    <div className={formHome.container_main}>
      <h1 className={formHome.title}>Datos de la Vivienda</h1>
      <Select
        nameSelect={"Tipo de Vivienda"}
        onChangeSelect={handlerData}
        idSelect={"vivienda"}
        arrayOptions={nucleo?.vivienda}
      />
      <Select
        nameSelect={"Area del predio"}
        onChangeSelect={handlerData}
        idSelect={"area"}
        arrayOptions={nucleo.area}
      />
      <Select
        nameSelect={"Tipo de Techo"}
        onChangeSelect={handlerData}
        idSelect={"techo"}
        arrayOptions={nucleo.techo}
      />
      <Select
        nameSelect={"Paredes"}
        onChangeSelect={handlerData}
        idSelect={"paredes"}
        arrayOptions={nucleo.paredes}
      />
      <Select
        nameSelect={"Pisos"}
        onChangeSelect={handlerData}
        idSelect={"piso"}
        arrayOptions={nucleo.piso}
      />
      <Select
        nameSelect={"Habitaciones"}
        onChangeSelect={handlerData}
        idSelect={"numHabitaciones"}
        arrayOptions={nucleo.numHabitaciones}
      />
      <Select
        nameSelect={"Baños"}
        onChangeSelect={handlerData}
        idSelect={"numBanos"}
        arrayOptions={nucleo.numBanos}
      />
      <Select
        nameSelect={"Conexion de Baños"}
        onChangeSelect={handlerData}
        idSelect={"conBanos"}
        arrayOptions={nucleo.conBanos}
      />
      <Select
        nameSelect={"En que lugar preparan los alimentos"}
        onChangeSelect={handlerData}
        idSelect={"preAlimentos"}
        arrayOptions={nucleo.preAlimentos}
      />
      <Select
        nameSelect={"Con que combustible se preparan los alimentos"}
        onChangeSelect={handlerData}
        idSelect={"eneCocina"}
        arrayOptions={nucleo.eneCocina}
      />
      <Select
        nameSelect={"De donde se obtiene el agua para consumo"}
        onChangeSelect={handlerData}
        idSelect={"agua"}
        arrayOptions={nucleo.agua}
      />
      <Select
        nameSelect={"Como eliminan los residuos en su hogar"}
        onChangeSelect={handlerData}
        idSelect={"residuos"}
        arrayOptions={nucleo.residuos}
      />
      <Select
        nameSelect={"Que servicios cuentan en su hogar"}
        onChangeSelect={handlerData}
        idSelect={"servicios"}
        arrayOptions={nucleo.servicios}
      />
      <div className={formHome.container_button}>
        <button className={formHome.entrar_button} onClick={pageBack}>
          Atras
        </button>
        <button className={formHome.entrar_button} onClick={addInfoHouse}>
          Agregar vivienda
        </button>
      </div>
    </div>
  );
}

export default FormHome;
