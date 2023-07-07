import { useEffect, useState } from "react";
import Select from "../../components/select/Select";
import { Input } from "../../components/Input/Input";
import { useCore } from "../../store/coreNotStore";
import location from "./location.module.css";
import { useOptions } from "../../store/constantes";
import { townships } from "../../services/transformRequest";

function Location({ pageBack, pageNext }) {
  const [addLocation] = useCore((state) => [state.addLocation]);
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
  const [address, setAddress] = useState({});
  const [isSidewalk, setIsSidewalk] = useState(false);

  const hadlerZona = ({ target: { value } }, set) => {
    if (value === "default") set("default");
    else set(value);
  };

  const hadlerInput = ({ target: { value, name } }) => {
    setAddress({
      ...address,
      [name]: value,
    });
  };

  const buttonAdress = (e) => {
    e.preventDefault();
    if (zona !== "default" && district !== "default" && address.direccion) {
      if (zona === "rural" && sidewalk !== "default") {
        addLocation({
          address: address.direccion,
          zona,
          ubicacion: district,
          corregimiento: sidewalk,
        });
        pageNext();
      } else {
        addLocation({
          address: address.direccion,
          zona,
          ubicacion: district,
          corregimiento: "No aplica",
        });
        pageNext();
      }
    } else {
      console.error("Faltan datos");
    }
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
  }, [zona, district, zonaApi, ruralUrbano]);

  return (
    <form className={location.container_main} autoComplete="false">
      <h1>Datos de ubicacion del nucleo familiar</h1>
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
          nameSelect={"Seleccione su corregimiento o cacerio de la zona rural"}
          idSelect={"corregimiento"}
        />
      )}
      <Input
        typeInput={"text"}
        nameInput={"Ingresa la direccion de la vivienda"}
        idInput={"direccion"}
        valueInput={address["direccion"]}
        onChangeInput={hadlerInput}
        placeholderInput={"Ingresa tu direccion"}
        classInput={"input_ubicacion"}
        classLabel={"label_ubicacion"}
      />
      <div className={location.container_button}>
        <button className={location.entrar_button} onClick={pageBack}>
          Atras
        </button>
        <button className={location.entrar_button} onClick={buttonAdress}>
          Agregar ubicacion
        </button>
      </div>
    </form>
  );
}

export default Location;
