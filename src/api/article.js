import fetch from 'utils/fetch';

/*����api start*/
export function articleList(token) {
    return fetch({
        url: '/admin/article/list',
        method: 'get',
        params: {token}
    });
}

/*����api end*/

