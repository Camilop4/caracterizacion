import { create } from "zustand";

const initialState = {
    usuario: {
        "sexo": [],
        "estudio": [],
        "etnia": [],
        "actividad": [],
        "salud": [],
    },
    nucleo: {
        "zona": [],
        "vivienda": [],
        "area": [],
        "techo": [],
        "paredes": [],
        "piso": [],
        "numHabitaciones": [],
        "numBanos": [],
        "conBanos": [],
        "preAlimentos": [],
        "eneCocina": [],
        "agua": [],
        "residuos": [],
        "servicios": []
    },
    ruralUrbano: {
        "rural": {},
        "urbano": [],
    },


};
export const useOptions = create((set) => ({
    ...initialState,
    addUser: (optionUsers) => set(() => ({ usuario: optionUsers })),
    addNucleo: (optionsNucleo) => set(() => ({ nucleo: optionsNucleo })),
    reset: () => set(initialState),
    addRuralUrbano: (optionsRuralUrbano) => set(() => ({ ruralUrbano: optionsRuralUrbano }))
}));
