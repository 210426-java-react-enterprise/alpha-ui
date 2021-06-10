import axios from 'axios';
import {User} from '../models/models';

export const alphacastAuthenticatedClient = axios.create({
    baseURL: 'https://alphaapi-env.eba-8crzsjmu.us-west-1.elasticbeanstalk.com/',
    headers:{
        'Content-Type':'application/json',
        'Authorization: ': 'jwt-token implementation' //implement jwt token
    }
});

export const alphacastUnauthenticatedClient = axios.create({
    baseURL: 'https://alphaapi-env.eba-8crzsjmu.us-west-1.elasticbeanstalk.com/',
    headers:{
        'Content-Type':'application/json'
    }
});
