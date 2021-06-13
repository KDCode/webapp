import axios from 'axios';

const url = 'htttp://locslhost:5000/posts';

export const fetchPosts = () => axios.get(url);


