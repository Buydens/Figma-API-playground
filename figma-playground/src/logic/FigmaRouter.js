"use strict";

import axios from 'axios';
const token = process.env.VUE_APP_figmaApiKey;

export default {

    getFile: async function(figmaId){
        return axios.get('https://api.figma.com/v1/files/' + figmaId, {
            headers: {
                'X-Figma-Token': token
              }
        }).then(response => {
            return response.data;
        });
    },

    getImageFills: async function(figmaId){
        return axios.get('https://api.figma.com/v1/files/' + figmaId + "/images", {
            headers: {
                'X-Figma-Token': token
              }
        }).then(response => {
            return response.data.meta.images;
        });
    },

    getImage: async function(figmaId){
        return axios.get('https://api.figma.com/v1/images/' + figmaId + "?scale=2&ids=0:1&format=svg", {
            headers: {
                'X-Figma-Token': token
            },

        }).then(response => {
            return response.data;
        });
    }

}