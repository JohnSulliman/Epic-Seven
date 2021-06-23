export const API = {

    //Informações base
    baseUrl: 'https://blue-backend-modulo4front.herokuapp.com',
    authorization: 'johnatantc@hotmail.com',

    //Visualizar os itens
    readAllUrl: () => API.baseUrl + '/',
    readSingleUrl: id => API.baseUrl + '/' + id,

    //Criar um item
    createUrl: () => API.baseUrl + '/',

    //Deletar todos os itens
    deleteAllUrl: () => API.baseUrl + '/',

    //Visualizar Post
    buildAPIGetRequest: url => {
        return fetch(url, {
            method: "GET",
            headers: new Headers({
                Authorization: API.authorization,
            })

        })
    },

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