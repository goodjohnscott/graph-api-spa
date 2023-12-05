import { graphConfig, listConfig } from "./authConfig";

/**
 * Attaches a given access token to a MS Graph API call. Returns information about the user
 * @param accessToken 
 */
export async function get(accessToken, endpoint) {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };

    return fetch(endpoint, options)
        .then(response => response.json())
        .catch(error => console.log(error));
}

/**
 * Attaches a given access token to a MS Graph API call. Returns information about the user
 * @param accessToken 
 */
export async function callMsGraph(accessToken) {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };

    return fetch(graphConfig.graphMeEndpoint, options)
        .then(response => response.json())
        .catch(error => console.log(error));
}

export async function getSiteId(accessToken) {    
    const response = await get(accessToken, graphConfig.getSiteIdEndpoint(listConfig.siteHost, listConfig.siteRelativePath));
    return response.id;
}

export async function getListId(accessToken, siteId) {
    var listId = null;    
    const response = await get(accessToken, graphConfig.getListsEndpoint(siteId));
    response.value.forEach(item => {
        if (item.name === listConfig.listName) {
            listId = item.id;            
        }
    });

    return listId;
}

export async function getListItems(accessToken, siteId, listId) {
    const response = await get(accessToken, graphConfig.getListItemsEndpoint(siteId, listId));
    return response.value;
}
