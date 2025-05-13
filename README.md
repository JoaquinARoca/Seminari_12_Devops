# Devops tools + API

## Crèdits
- Grup Seminari 5. https://github.com/JoanPerezPerez/APIseminari_EA

## Descripció
Una API bàsica desenvolupada en Node.js amb TypeScript, utilitzant Express i Mongoose per a la gestió de dades en MongoDB. A més, inclou documentació amb Swagger i eines DevOps integrades:

- **Linter** amb regla personalitzada (`console.log` només a middleware)
- **Hooks Git** (`pre-commit`) per bloquejar errors
- **GitHub Actions** per a integració contínua
- **Anàlisi de qualitat amb SonarCloud**

## Requisits previs
Abans d'executar el projecte, assegura't de tenir instal·lat:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Instal·lació
Clona el repositori i executa la següent comanda per instal·lar les dependències:

```sh
npm install
npm install dotenv
```

```.env
MONGODB_URI=mongodb://localhost:27017/la_teva_base_de_dades
SERVER_PORT=9000
```

## Execució
Per iniciar l'API (tsc + cd ./build + node server.js):

```sh
npm start
```

## Documentació
Swagger està disponible a:
```
http://localhost:9000/api-docs
```

## DevOps i Qualitat de Codi
✅ Linter amb hook Git
Configurat amb ESLint (eslint.config.js)

Regla especial per evitar console.log fora de middleware/

Hook pre-commit amb Husky + lint-staged per bloquejar commits amb errors

✅ GitHub Actions
Workflow automàtic que:

Instal·la dependències

Executa eslint amb --max-warnings=0

Genera una imatge Docker (docker build)

Fa anàlisi de qualitat amb SonarCloud

✅ SonarCloud
Integració completa amb SonarCloud

Projecte: JoaquinARoca_Seminari_12_Devops

Secrets i claus gestionats de forma segura

## Scripts utils

```sh
npm run lint     # Executa ESLint
npm run build    # Transpila TypeScript
npm start        # Compila i executa el servidor
```

## Dependències Principals
- `dotenv`: Gestió de variables d'entorn.
- `mongodb` i `mongoose`: Base de dades MongoDB.
- `swagger-jsdoc` i `swagger-ui-express`: Generació de documentació.
- `express`: Framework per a l'API.

## Dependències de Desenvolupament
- `typescript`: Suport per a TypeScript.
- `@types/*`: Definicions de tipus per a biblioteques utilitzades.
- `eslint`: Anàlisi de codi
- `husky`, lint-staged: Gestió de hooks Git
- `@typescript-eslint/*`: Reforç de bones pràctiques en TS