import React, { useEffect } from "react";
import landing from "./landing.module.css";
import { getApi } from "../../services/getApi";
import { useOptions } from "../../store/constantes";
import { transform } from "../../services/transformRequest";

function Landing({ page }) {
  const [addUser, addNucleo, addRuralUrbano] = useOptions((state) => [
    state.addUser,
    state.addNucleo,
    state.addRuralUrbano,
  ]);
  useEffect(() => {
    Promise.all([
      getApi("/nucleo/opciones"),
      getApi("/ruralurbano"),
      getApi("/usuario/opciones"),
    ]).then(
      ([
        { data: optionNucleo },
        { data: optionRuralUrbano },
        { data: optionUser },
      ]) => {
        addNucleo(transform(optionNucleo));
        addRuralUrbano(optionRuralUrbano);
        addUser(transform(optionUser));
      }
    );
  }, [addNucleo, addRuralUrbano, addUser]);

  return (
    <div>
      <header>
        <h1 className={landing.title}>Caracterización del Municipio</h1>
        <nav className={landing.nav_landing}>
          <ul>
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#caracteristicas">Características</a>
            </li>
            <li>
              <a href="#equipo">Equipo</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="inicio">
        <h2 className={landing.subTitle}>
          Bienvenido a la Aplicación de Caracterización del Municipio
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
          lorem vel turpis laoreet efficitur eget et est. Duis eu placerat
          lacus. Sed in tortor ultrices, posuere mi vitae, dictum justo. Sed sed
          metus dui. Aenean ac ullamcorper massa, id ultricies arcu. Proin nec
          turpis mi. Suspendisse eu lectus vitae eros auctor finibus a in orci.
        </p>
      </section>

      <section id="caracteristicas">
        <h2 className={landing.subTitle}>Características de la Aplicación</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
          lorem vel turpis laoreet efficitur eget et est. Duis eu placerat
          lacus. Sed in tortor ultrices, posuere mi vitae, dictum justo. Sed sed
          metus dui. Aenean ac ullamcorper massa, id ultricies arcu. Proin nec
          turpis mi. Suspendisse eu lectus vitae eros auctor finibus a in orci.
        </p>
      </section>

      <section id="equipo">
        <h2 className={landing.subTitle}>Nuestro Equipo</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
          lorem vel turpis laoreet efficitur eget et est. Duis eu placerat
          lacus. Sed in tortor ultrices, posuere mi vitae, dictum justo. Sed sed
          metus dui. Aenean ac ullamcorper massa, id ultricies arcu. Proin nec
          turpis mi. Suspendisse eu lectus vitae eros auctor finibus a in orci.
        </p>
      </section>

      <section id="contacto">
        <h2 className={landing.subTitle}>Contacto</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
          lorem vel turpis laoreet efficitur eget et est. Duis eu placerat
          lacus. Sed in tortor ultrices, posuere mi vitae, dictum justo. Sed sed
          metus dui. Aenean ac ullamcorper massa, id ultricies arcu. Proin nec
          turpis mi. Suspendisse eu lectus vitae eros auctor finibus a in orci.
        </p>
      </section>
      <button className={landing.entrarButton} onClick={page}>
        Entrar
      </button>
    </div>
  );
}

export default Landing;
