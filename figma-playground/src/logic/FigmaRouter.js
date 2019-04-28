"use strict";

import axios from 'axios';
const token = process.env.VUE_APP_figmaApiKey;

export default {

    getFile: async function(figmaId){
        return axios.get('https://api.figma.com/v1/files/' + figmaId, {
            headers: {
                'X-Figma-Token': token
              }
        });
    }
    
}