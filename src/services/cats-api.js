import axios from "axios";

export const getCats = URL => {
    return axios.get(URL).then(
        res => res.data
    ).catch(
        err => {
            throw err;
        }
    );
};