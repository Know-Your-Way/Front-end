const ourStrapiData = []

const getData = async () => {
    const response = await fetch('toiletten.json')
    const result = await response.json();
    const data = await result;
    data.map(item => {
        postData('http://localhost:1337/api/locations/', {
            data: {
                city_name: "Bruxelles",
                sub_urban: item.fields.z_pcdd_fr,
                lat_number: item.fields.wgs84_lat,
                long_number: item.fields.wgs84_long,
                address: item.fields.adrvoisfr,
                category: item.fields.typeeng
            }
        }).then((data) => {
            console.log(data);
        });

    })
    // console.log(data)
    return data;
};




// async function postData(url = '', data = {}) {
//     const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     });
//     return response.json();
// }


