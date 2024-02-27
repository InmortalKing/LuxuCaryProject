import express from "express";
import {dirname,join} from "path";
import { fileURLToPath } from "url";

import router from './routes/appRoutes.js';

    const app = express();

    //Ruta Absoluta de nuestro dir src
    const __dirname = dirname(fileURLToPath(import.meta.url));
 // Mandar al servidor la carpeta public igual como la carpeta views
    app.set('views', join( __dirname,'views'));
    app.use(express.static(join(__dirname,'public')));
    app.use(router);

    app.set('view engine','ejs');
    console.log(join(__dirname,'public'));

    app.listen(3000);
