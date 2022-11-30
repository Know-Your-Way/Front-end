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

postData('http://localhost:1337/api/locations/', {
    data: {
        city_name: "Bruxelles",
        sub_urban: "test2",
        lat_number: 50.85057725715527,
        long_number: 4.349991482769102,
        address: "23 sdfsdfsdf road",
        category: "toilet"
    }
}).then((data) => {
    console.log(data);
});

