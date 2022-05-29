import axios from 'axios';

export default async function fetchImages(imgName, page) {
    const API_KEY = `7652668-fcb425495cfb1d754d33171ff`;
    const API_GET = 'https://pixabay.com/api/?';
try {
    const resolve = await axios.get(
    `${API_GET}q=${imgName}&key=${API_KEY}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return resolve.data;
    } catch (error) {
    console.log(error);
    }
}