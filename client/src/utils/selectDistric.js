import { RURAL, URBANA } from "../asest/constans";

export const selectDistrict = (string) => {
    switch (string) {
        case "URB":
            return URBANA;
        case "RUR":
            return RURAL;
        default:
            return [];
    }
}