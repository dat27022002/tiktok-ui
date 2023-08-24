//Pages
import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Upload from '~/Pages/Upload';
//Layout
import { Defautlayout, HeaderOnly } from '~/Layout';

const publicRoute = [
    { path: '/', component: Home, layout: Defautlayout },
    { path: '/folowing', component: Following, layout: Defautlayout },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];
const privateRoute = [];

export { publicRoute, privateRoute };
