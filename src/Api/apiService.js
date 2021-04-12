    /*
     *  Окремий об'єкт apiService.js для виконання/збереження логіки    
     *  REST-пагінація   
     *  !!! отримати на цю адресу запит 
     *  https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12  
     *  async 
     * 
     *  Фетч fetchArticles по пошуковому запросу
     */
import axios from 'axios';
import { API_KEY, BASE_URL, PER_PAGE } from './apiVars';

const fetchArticles = async (text, page=1) => {
    try {
        const { data } = await axios.get(
            `${BASE_URL}?key=${API_KEY}&q=${text}&page=${page}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`,
        );    // звернення до GET-ера  

        return data;
               // Show error  
    } catch (error) {
        console.error('Something wrong with API search fetch: ' + error);
    }
};

export default { fetchArticles };













/* ВАРІАНТ без error */
// import axios from 'axios';
// import { API_KEY, BASE_URL, PER_PAGE } from './apiVars';

// const fetchArticles = async (query, page) => {
//   const url = `${BASE_URL}?key=${API_KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`;
      
//   const response = await axios.get(url);
//   const data = response.data;

//   return data;
// }

// export default { fetchArticles };
