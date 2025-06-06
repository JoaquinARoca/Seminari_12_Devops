import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './modules/users/user_routes.js'; // Nota el .js al final
import forumRoutes from './modules/forum/forum_routes.js'; // Nota el .js al final
import { corsHandler } from './middleware/corsHandler.js';
import { loggingHandler } from './middleware/loggingHandler.js';
import { messageHandler } from './middleware/messageHandler.js';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

dotenv.config(); // Cargamos las variables de entorno desde el archivo .env

const app = express();

const LOCAL_PORT = process.env.SERVER_PORT || 9000;

const a = 1234;
console.log("Hello World");

// Configuración de Swagger
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Usuarios',
            version: '1.0.0',
            description: 'Documentación de la API de Usuarios'
        },
        tags: [
            {
              name: 'Users',
              description: 'Rutas relacionadas con la gestión de usuarios',
            },
            {
              name: 'Forum',
              description: 'Rutas relacionadas con el forum',
            },
            {
              name: 'Main',
              description: 'Rutas principales de la API',
            }
          ],
        servers: [
            {
                url: `http://localhost:${LOCAL_PORT}`
            }
        ]
    },
    apis: ['./modules/users/*.js', './modules/forum/*.js'] // Asegúrate de que esta ruta apunta a tus rutas
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Middleware
app.use(express.json());
app.use(loggingHandler);
app.use(corsHandler);
//rutas
app.use('/api', userRoutes);
app.use('/api', forumRoutes);
// Rutes de prova
app.get('/', (req, res) => {
    res.send('Welcome to my API');
});

// Conexión a MongoDB
//mongoose;
mongoose
    .connect(process.env.MONGODB_URI || 'mongodb+srv://joan:1234@cluster0.3owhs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => messageHandler('Connected to DB','info'))
    .catch((error) => messageHandler('DB Connection Error:'+error, 'error'));

// Iniciar el servidor
app.listen(LOCAL_PORT, () => {
    messageHandler('Server listening on port: ' + LOCAL_PORT, 'info');
    messageHandler(`Swagger disponible a http://localhost:${LOCAL_PORT}/api-docs`,'info');
});
