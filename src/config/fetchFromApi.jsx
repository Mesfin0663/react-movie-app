import axios from "axios";


// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }
const BASE_URL = 'https://moviesdatabase.p.rapidapi.com'
const fetchFromApi = async(endPoint)=>{
    const options = {
        method: 'GET',
        url: BASE_URL+endPoint,
        // params: {year: '2023'},

        headers: {
          'X-RapidAPI-Key': '91c1f39d51msh21e425064297fcap10772ejsn99273125779c',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
      };

    // if(nextPageToken){
    //   options.params.pageToken=`${nextPageToken}`;
    // } 
     return await axios.request(options);
      
  }
  
  export default fetchFromApi;