import React, { useState, useEffect } from "react";
import Select from "../../components/select/Select";
import { useCoreExist } from "../../store/coreExistStore";
import { useOptions } from "../../store/constantes";
import core from "./coreSelection.module.css";
import { buildRouteCore, townships } from "../../services/transformRequest";
import config from "../../asest/config";
import { getApiUrl } from "../../services/getApi";

function CoreSelection({ pageBack, pageCore, pageUser }) {
  const [datos, setDatos] = useState({});
  const [addCore] = useCoreExist((state) => [state.addCore]);
  const [zonaApi, ruralUrbano] = useOptions((state) => [
    state.nucleo.zona,
    state.ruralUrbano,
  ]);
  const [zona, setZona] = useState("default");
  const [isZona, isSetZona] = useState(false);
  const [district, setDistrict] = useState("default");
  const [sidewalk, setSidewalk] = useState("default");
  const [constZona, setConstZona] = useState([]);
  const [constSidewalk, setConstSidewalk] = useState([]);
  const [coreApi, setCoreApi] = useState([]);
  const [isSidewalk, setIsSidewalk] = useState(false);

  const hadlerZona = ({ target: { value } }, set) => {
    if (value === "default") set("default");
    else set(value);
  };

  useEffect(() => {
    if (zona !== "default") {
      isSetZona(true);
      const zone =
        zona === zonaApi[0].value
          ? ruralUrbano[zona]
          : townships(ruralUrbano[zona]);
      setConstZona(zone);
    } else isSetZona(false);
    if (zona === zonaApi[1].value && district !== "default") {
      setIsSidewalk(true);
      setConstSidewalk(ruralUrbano.rural[district]);
    } else {
      setIsSidewalk(false);
    }
    if (
      zona === zonaApi[1].value &&
      district !== "default" &&
      sidewalk !== "default"
    ) {
      const route = buildRouteCore(config.coreRoute, zona, district, sidewalk);
      getApiUrl(route)
        .then(({ data }) => {
          const dataTransform = data.map(({ id, direccion }) => ({
            id,
            value: direccion,
          }));
          setCoreApi(dataTransform);
        })
        .catch((error) => console.error(error.message));
    } else if (zona === zonaApi[0].value && district !== "default") {
      const route = buildRouteCore(config.coreRoute, zona, district);
      getApiUrl(route)
        .then(({ data }) => {
          const dataTransform = data.map(({ id, direccion }) => ({
            id,
            value: direccion,
          }));
          setCoreApi(dataTransform);
        })
        .catch((error) => console.error(error.message));
    }
  }, [zona, district, ruralUrbano, zonaApi, sidewalk]);

  const hadlerSelect = ({ target: { value, name } }, setState) => {
    setState({
      ...datos,
      [name]: value,
    });
  };

  const addMember = (e) => {
    e.preventDefault();
    if (!datos.core) {
      console.error("No has seleccionado un nucleo familiar");
    } else {
      const coreObject = coreApi.find(({ value }) => value === datos.core);
      addCore(coreObject);
      pageUser();
    }
  };

  const addCoreNew = (e) => {
    e.preventDefault();
    pageCore();
  };

  return (
    <div className={core.container_main}>
      <h1 className={core.title}>Selección de Núcleo</h1>
      <section className={core.instruction}>
        <p>¡Bienvenido! Por favor, selecciona un núcleo familiar:</p>
        <ol>
          <li>En el menu desplegable selecciona tu nucleo familiar</li>
          <li>
            En caso de encontrar tu nucleo presiona el boton agregar miembro
          </li>
          <li>
            En caso de no encontrar tu nucleo familiar procede a crearlo
            presionando el boton crear
          </li>
          <li>
            Pasaras a un menu donde debes ingresar las indicaciones del estado
            de la vivienda en la que viven los miembros del nucleo familiar
          </li>
          <li>
            Luego agregaras informacion pertinente a el miembro del nucleo
            familiar
          </li>
        </ol>
      </section>
      <section className={core.selector_container}>
        <div className="existenucleo">
          <h1 className={core.title}>Seleciona tu nucleo si existe</h1>
          <div>
            <Select
              arrayOptions={zonaApi}
              nameSelect={"Escoje la zona donde esta ubicado"}
              idSelect={"zona"}
              onChangeSelect={(e) => hadlerZona(e, setZona)}
            />
            {isZona && (
              <Select
                onChangeSelect={(e) => hadlerZona(e, setDistrict)}
                arrayOptions={constZona}
                nameSelect={"Seleccione su ubicacion"}
                idSelect={"ubicacion"}
              />
            )}
            {isSidewalk && (
              <Select
                onChangeSelect={(e) => hadlerZona(e, setSidewalk)}
                arrayOptions={constSidewalk}
                nameSelect={
                  "Seleccione su corregimiento o cacerio de la zona rural"
                }
                idSelect={"corregimiento"}
              />
            )}
            {coreApi.length ? (
              <Select
                onChangeSelect={(e) => hadlerSelect(e, setDatos)}
                idSelect={"core"}
                nameSelect={"Selecciona tu nucleo familiar"}
                arrayOptions={coreApi}
              />
            ) : null}
            <button onClick={addMember} className={core.button_selector}>
              Agregar miembro
            </button>
          </div>
        </div>
        <div className="noexiste">
          <h1 className={core.title}>Aqui agregas tu nucleo sino existe</h1>
          <button onClick={addCoreNew} className={core.button_selector}>
            Agregar nucleo
          </button>
        </div>
      </section>
      <button
        className={core.button_selector}
        onClick={(e) => {
          e.preventDefault();
          pageBack();
        }}
      >
        Atras
      </button>
    </div>
  );
}

export default CoreSelection;
