import axios from 'axios';
import moment from 'moment';
import config from '../../../config';
const a = axios.create({
    baseURL: config.viApi,
    headers:{
        'content-type':'application/json'
    }
});
//TODO: add error handling
const api = {
    getBriefings: () => {
        return new Promise((resolve, reject) => {
            //TODO: pull feed name from user profile
            a.get('/briefings/feed').then((res) => {
                res.data.forEach(function(briefing){
                    briefing.publishDate = moment(briefing.publishDate).format('YYYY-MM-DD');
                });
                resolve(res.data);
            });
        });
    },
    updateBriefings: (briefings) => {
        return new Promise((resolve, reject) => {
            //TODO: pull feed name from user profile
            a.post('/briefings/feed',{briefings}).then(() => {
                resolve();
            });
        });
    }
};
export default api;