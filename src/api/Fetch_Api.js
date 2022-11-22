import axios from 'axios'

const Fetch_Api = () => {
    fetch('http://localhost:1337/api/locations')
    .then((res)=> res.json()).then((data)=>{
        console.log(data , 'hi')
    })
}

export default Fetch_Api