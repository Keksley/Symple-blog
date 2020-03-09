class ApiService {
    constructor(baseUrl) {
        this.url = baseUrl;
    }
    async createPost(post) {
        try {
            const request = new Request(this.url + '/posts.json', {
                method: 'post',
                body: JSON.stringify(post) //Превращает в строку
            });
            return useRequest(request);
        } catch(error) {
            console.error(error);
        }
    }
    async fetchPosts () {
        try {
            const request = new Request(this.url + '/posts.json'); //Поумолчанию метод === get
            return useRequest(request);
        } catch(error) {
            console.error(error);
        }
    }

    async fetchPostById(id) {
        try {
            const request = new Request(this.url + `posts/${id}.json`); //Поумолчанию метод === get
            return useRequest(request);
        } catch(error) {
            console.error(error);
        }
    }
}

async function useRequest(request) {
    const response = await fetch(request);//Нужно подождать создания request
    return await response.json();
}


export const apiService = new ApiService('https://vanillajs-blog.firebaseio.com/');