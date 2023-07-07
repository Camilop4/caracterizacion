
export default function converString(string){
    return string.toUpperCase().split(' ').join("_");
};