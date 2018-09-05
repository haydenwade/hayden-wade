import axios from 'axios';
import moment from 'moment';
import config from '../../../config';
import { getAccessToken, getUserProfile } from '../../../utils/auth/auth-service';

const a = axios.create({
    baseURL: config.viApi,
    headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${getAccessToken()}`
    }
});
//TODO: add error handling
const api = {
    getBriefings: () => {
        return new Promise((resolve, reject) => {
            getUserProfile().then((profile) => {
                const feedName = profile[config.auth.siteDomain + '/app_metadata'].feeds[0];
                a.get(`/briefings/${feedName}`).then((res) => {
                    res.data.forEach(function (briefing) {
                        briefing.publishDate = moment.utc(briefing.publishDate).format('YYYY-MM-DD');
                    });
                    resolve(res.data);
                });
            });
        });
    },
    updateBriefings: (briefings, files) => {
        return new Promise((resolve, reject) => {
            getUserProfile().then((profile) => {
                const feedName = profile[config.auth.siteDomain + '/app_metadata'].feeds[0];

                const data = new FormData();
                data.append('briefings', JSON.stringify(briefings));
                files.forEach(file=>{
                    data.append(file.name, file);
                });

                a.post(`/briefings/${feedName}`,data).then(() => {
                    resolve();
                });
            });

        });
    }
};
export default api;