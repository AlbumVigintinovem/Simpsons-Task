import axios from 'axios';

export function fetchData() {
    const simpsons = axios.get('https://5fc9346b2af77700165ae514.mockapi.io/simpsons')
}
