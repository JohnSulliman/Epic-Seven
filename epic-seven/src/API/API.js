export const API = {

    //Informações base
    baseUrl: 'https://blue-backend-modulo4front.herokuapp.com',
    authorization: 'johnatantc@hotmail.com',
    
    //Rota para criar um item
    createUrl: () => API.baseUrl + '/',

    //Rota para visualizar os itens
    readAllUrl: () => API.baseUrl + '/',
    readSingleUrl: id => API.baseUrl + '/' + id,

    //Rota para atualizar os internal
    updateSingleUrl: id => API.baseUrl + '/' + id,

    //Rota para deletar os itens
    deleteAllUrl: () => API.baseUrl + '/',
    deleteSingleUrl: id => API.baseUrl + '/' + id,
    
    //Criar Post
    buildAPIPostRequest: (url, body) => {
        return fetch(url, {
            method: "POST",
            headers: new Headers({
                Authorization: API.authorization,
                "Content-type": "application/json",
            }),
            body: JSON.stringify(body)
        })
    },
    
    //Visualizar Post
    buildAPIGetRequest: url => {
        return fetch(url, {
            method: "GET",
            headers: new Headers({
                Authorization: API.authorization,
            })

        })
    },

    //Atualizar Post
    buildAPIPutRequest: (url, body) => {
        return fetch(url, {
            method: "PUT",
            headers: new Headers({
                Authorization: API.authorization,
                'Content-type': 'application/json'
            }),
            body: JSON.stringify(body)
        })
    },

    //Apagar Post
    buildAPIDeleteRequest: url => {
        return fetch(url, {
            method: "DELETE",
            headers: new Headers({
                Authorization: API.authorization
            })
        })
    },
}