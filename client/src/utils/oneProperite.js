export default function setOneTrue(obj, trueProp) {
  Object.keys(obj).forEach((key) => {
    obj[key] = key === trueProp;
  });
  return obj;
}