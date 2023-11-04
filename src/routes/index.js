//Pages
import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Upload from '~/Pages/Upload';
//Layout
import { Defautlayout, HeaderOnly } from '~/Layout';

import { Path } from '~/config/route';

const publicRoute = [
    { path: Path.HOME, component: Home, layout: Defautlayout },
    { path: Path.FOLLOWING, component: Following, layout: Defautlayout },
    { path: Path.UPLOAD, component: Upload, layout: HeaderOnly },
];
const privateRoute = [];

export { publicRoute, privateRoute };
