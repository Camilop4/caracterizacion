import { create } from "zustand";

const initialState = {
  core: {},
  person: {
    nombre: "",
    edad: 0,
    parentesco: "",
    sexo: "",
    escolaridad: "",
    etnia: "",
    actividadEconomica: "",
    ingresoMensual: "",
    salud: "",
    pension: "",
    discapacidad: "",
    victima: "",
  },
};
export const useCoreExist = create((set) => ({
  ...initialState,
  addPerson: (personInfo) => set(() => ({ person: personInfo })),
  resetPerson: () => set(() => ({ person: initialState.person })),
  reset: () => set(initialState),
  addCore: (core) => set(() => ({ core }))
}));
