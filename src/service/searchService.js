import { getSearch } from '~/utils/httpsrRequest';

export const search = async (q, type = 'less') => {
    const res = await getSearch('users/search', {
        params: {
            q,
            type,
        },
    });

    return res;
};
