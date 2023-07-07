import React, { useEffect, useMemo } from "react";
import { Input } from "../../components/Input/Input";
import { useState } from "react";
import Select from "../../components/select/Select";
import { useOptions } from "../../store/constantes";
import { useCoreExist } from "../../store/coreExistStore";
import { useCore } from "../../store/coreNotStore";
import Loading from "../../components/Loading/Loading";
import config from "../../asest/config";
import formPerson from "./formPerson.module.css";

function FormPerson({ pageNext, pageBack }) {
  const [data, setData] = useState({});
  const [isWait, setIsWait] = useState(true);
  const [userOptions] = useOptions((state) => [state.usuario]);
  const [{ id }, addCore, addPerson, person] = useCoreExist((state) => [
    state.core,
    state.addCore,
    state.addPerson,
    state.person,
  ]);
  const {
    tipoVivienda,
    area,
    techo,
    paredes,
    pisos,
    habitaciones,
    salas,
    cocina,
    banos,
    conBanos,
    address,
    zona,
    ubicacion,
    corregimiento,
  } = useCore((state) => state);

  const postInfo = useMemo(() => {
    return {
      tipoVivienda,
      area,
      techo,
      paredes,
      pisos,
      habitaciones,
      salas,
      cocina,
      banos,
      conBanos,
      address,
      zona,
      ubicacion,
      corregimiento,
    };
  }, [
    tipoVivienda,
    area,
    techo,
    paredes,
    pisos,
    habitaciones,
    salas,
    cocina,
    banos,
    conBanos,
    address,
    zona,
    ubicacion,
    corregimiento,
  ]);

  function hadlerData(event) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  }

  useEffect(() => {
    const postCore = async (url, data, token = "lksdjflkas") => {
      setIsWait(false); // hay que cambiar esto apenas se monte el backend
      try {
        const response = await fetch(`${url}/nucleo`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }

        const responseData = await response.json();
        setIsWait(false);
        return responseData;
      } catch (err) {
        console.error(err);
      }
    };

    if (id) {
      setIsWait(false);
    } else {
      const newCore = postCore(config.url, postInfo);
      addCore(newCore);
    }
  }, [addCore, id, postInfo]);

  const addPersonState = (e) => {
    e.preventDefault();
    const props = Object.keys(person);
    console.log(person);
    const hasAllProperties = props.every((propiedad) =>
      data.hasOwnProperty(propiedad)
    );
    if (hasAllProperties) {
      addPerson(data);
      pageNext();
    } else {
      console.error("faltan datos");
    }
  };
  return (
    <main className={formPerson.container_main}>
      {isWait ? (
        <Loading />
      ) : (
        <div>
          <h1 className={formPerson.title}>Datos de Usuario</h1>
          <Input
            typeInput={"text"}
            classInput={"input-usuario"}
            nameInput={"Nombre"}
            idInput={"nombre"}
            onChangeInput={hadlerData}
            valueInput={data["nombre"]}
            placeholderInput={"Ingresa tu nombre completo"}
            classLabel={"label-usuario"}
          />
          <Input
            typeInput={"number"}
            classInput={"input-usuario"}
            nameInput={"Edad"}
            idInput={"edad"}
            onChangeInput={hadlerData}
            valueInput={data["edad"]}
            placeholderInput={"Ingresa tu edad"}
            classLabel={"label-usuario"}
          />
          <Input
            typeInput={"text"}
            classInput={"input-usuario"}
            nameInput={"Parentesco dentro del nucleo familiar"}
            idInput={"parentesco"}
            onChangeInput={hadlerData}
            valueInput={data["parentesco"]}
            placeholderInput={"Ingresa el paresteco en tu nucleo"}
            classLabel={"label-usuario"}
          />
          <Select
            nameSelect={"Sexo"}
            onChangeSelect={hadlerData}
            idSelect={"sexo"}
            arrayOptions={userOptions.sexo}
          />
          <Select
            nameSelect={"Nivel de escolaridad"}
            onChangeSelect={hadlerData}
            idSelect={"estudio"}
            arrayOptions={userOptions.estudio}
          />
          <Select
            nameSelect={"Esta estudiando actualmente"}
            onChangeSelect={hadlerData}
            idSelect={"isEstudio"}
            arrayOptions={[
              { id: 1, value: "Si" },
              { id: 2, value: "No" },
            ]}
          />
          <Select
            nameSelect={"Ingreso a la universidad"}
            onChangeSelect={hadlerData}
            idSelect={"isUniversidad"}
            arrayOptions={[
              { id: 1, value: "Si" },
              { id: 2, value: "No" },
            ]}
          />
          <Select
            nameSelect={"Grupo etnico"}
            onChangeSelect={hadlerData}
            idSelect={"etnia"}
            arrayOptions={userOptions.etnia}
          />
          <Select
            nameSelect={"Actividad economica"}
            onChangeSelect={hadlerData}
            idSelect={"actividad"}
            arrayOptions={userOptions.actividad}
          />
          <Input
            typeInput={"number"}
            classInput={"input-usuario"}
            nameInput={"Cuanto gana mensualmente"}
            idInput={"salario"}
            onChangeInput={hadlerData}
            valueInput={data["ingresoMensual"]}
            placeholderInput={
              "Cuanto devenga mensualmente de su actividad economica"
            }
          />
          <Select
            nameSelect={"Cual es su regimen de salud"}
            onChangeSelect={hadlerData}
            idSelect={"salud"}
            arrayOptions={userOptions.salud}
          />
          <Select
            nameSelect={"Cotiza usted pension"}
            onChangeSelect={hadlerData}
            idSelect={"pension"}
            arrayOptions={[
              { id: 1, value: "Si" },
              { id: 2, value: "No" },
            ]}
          />
          <Select
            nameSelect={"Es usted discapacitado"}
            onChangeSelect={hadlerData}
            idSelect={"discapacidad"}
            arrayOptions={[
              { id: 1, value: "Si" },
              { id: 2, value: "No" },
            ]}
          />
          <Select
            nameSelect={"Es victima del conflicto"}
            onChangeSelect={hadlerData}
            idSelect={"victima"}
            arrayOptions={[
              { id: 1, value: "Si" },
              { id: 2, value: "No" },
            ]}
          />
          <div className={formPerson.container_button}>
            <button className={formPerson.entrar_button} onClick={pageBack}>
              Atras
            </button>
            <button
              className={formPerson.entrar_button}
              onClick={addPersonState}
            >
              Finalizar
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default FormPerson;
