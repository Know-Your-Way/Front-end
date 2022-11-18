// Api for public parking locations
fetch('https://bruxellesdata.opendatasoft.com/api/records/1.0/search/?dataset=bruxelles_parkings_publics&q=&rows=30')
.then((response) => response.json())
.then(data => 
    console.log(data.records[0].fields.coordonnes_coordinaten, 'parking'))
   // console.log(data, 'parking'))

// Api for public toilet
fetch('https://bruxellesdata.opendatasoft.com/api/records/1.0/search/?dataset=public-toilets&q=open&rows=30')
.then((response) => response.json())
.then(data => console.log(data, 'toilets'))

//Api for taxi station
fetch('https://opendata.bruxelles.be/api/records/1.0/search/?dataset=aires-de-stationnements-taxi&q=&facet=voirie')
.then((response) => response.json())
.then(data => console.log(data, 'taxi'))

// Api for playgrounds
fetch('https://opendata.bruxelles.be/api/records/1.0/search/?dataset=playgrounds&q=&rows=30')
.then((response) => response.json())
.then(data => console.log(data, 'playgrounds'))

// APi for pharmacy
fetch('https://opendata.bruxelles.be/api/records/1.0/search/?dataset=pharmacies1&q=&rows=30')
.then((response) => response.json())
.then(data => console.log(data, 'pharmacies'))

// APi for hospitals
fetch('https://opendata.bruxelles.be/api/records/1.0/search/?dataset=pharmacies1&q=&rows=30')
.then((response) => response.json())
.then(data => console.log(data, 'hospitals'))

