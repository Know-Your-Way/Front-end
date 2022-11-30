const ourStrapiData = []

const getData = async () => {
    const response = await fetch('taxi.json')
    const result = await response.json();
    const data = await result.records;
    data.map((item)=>{
    const sub_urban = item.fields.mu_nl
    const lat_number = item.geometry.coordinates[1]
    const long_number = item.geometry.coordinates[0]
    const address = item.fields.adres_nl

    postData('http://localhost:1337/api/locations/', {
            data: {
                city_name: "Bruxelles",
                sub_urban: sub_urban,
                lat_number: lat_number,
                long_number: long_number,
                address: address,
                category: "TAXI"
            }
        }).then((data) => {
            console.log(data);
        });

    })
    // console.log(data)
    return data;
};




async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

// getData()