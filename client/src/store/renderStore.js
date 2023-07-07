import { create } from "zustand";
import setPage from "../utils/oneProperite";

export const usePage = create((set) => ({
  page: {
    landing: true,
    formUser: false,
    formHome: false,
    formCore: false,
    selection: false,
    infoPerson: false,
  },
  landingUse: () => set((state) => setPage(state.page, "landing")),
  formUserUse: () => set((state) => setPage(state.page, "formUser")),
  formHomeUse: () => set((state) => setPage(state.page, "formHome")),
  formCoreUse: () => set((state) => setPage(state.page, "formCore")),
  selectionUse: () => set((state) => setPage(state.page, "selection")),
  infoPersonUse: () => set((state) => setPage(state.page, "infoPerson")),
}));
