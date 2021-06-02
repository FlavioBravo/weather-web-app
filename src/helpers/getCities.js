export const getCities = async( city ) => {

    const resp = require( "../server/city.list.partial_PE_US.json" );
    const arr = resp.map(item => item);
    const cities = arr.filter(item => item.name.includes(city));

    return new Promise((resolve, reject) => {
        resolve(cities);
    });

}