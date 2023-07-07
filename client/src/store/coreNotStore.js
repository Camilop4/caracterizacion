import { create } from "zustand";

const initialState = {
  zona: "",
  corregimiento: "",
  vereda: "",
  direccion: "",
  vivienda: "",
  area: "",
  techo: "",
  paredes: "",
  piso: "",
  numHabitaciones: "",
  preAlimentos: "",
  servicios: "",
  numBanos: "",
  conBanos: "",
  eneCocina: "",
  agua: "",
  residuos: "",
};
export const useCore = create((set) => ({
  ...initialState,
  addLocation: ({ address, zona, ubicacion, corregimiento }) => set(() => ({ direccion: address, zona, vereda: ubicacion, corregimiento })),
  addHouse: (data) => set(() => ({ ...data })),
  reset: () => set(initialState),
}));
