
export const transform = (data) => {
    let dataFormat = {}
    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
            const dataTransfom = data[key].map((elem, index) => ({ id: index + 1, value: elem }));
            dataFormat = { ...dataFormat, [key]: dataTransfom }
        }
    }
    return dataFormat;
};

export const townships = (ruralObjetc) => {
    const dataTownships = [];
    let contador = 1;
    for (const key in ruralObjetc) {
        if (Object.hasOwnProperty.call(ruralObjetc, key)) {
            dataTownships.push({ id: contador, value: key });
            contador++;
        }
    }
    return dataTownships
};

const replaceSpace = (string) => {
    return string.split(" ").join("%20");
};

export const buildRouteCore = (routeBase, zona, township, sidewalk) => {
    let sidewalkFormat;
    const townshipFormat = replaceSpace(township);
    if (sidewalk)
        sidewalkFormat = replaceSpace(sidewalk);
    return sidewalk ? `${routeBase}zona=${zona}&corregimiento=${townshipFormat}&vereda=${sidewalkFormat}` : `${routeBase}zona=${zona}&corregimiento=${townshipFormat}`;
};
