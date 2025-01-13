# Expenser

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

Install dependencies

   ```bash
   npm install
   ```

### Building the app

- Build all (shared and backend)

   ```bash
   npm run build
   ```

- Build shared only

   ```bash
   npm run build:shared
   ```

### Starting the expo app **&&** backend concurrently

> Note: This will start the app and the backend concurrently.
> 
> Because you're using `concurrently`, many of the expo qr code features will not work. It is recommended to use `start:app` and `start:backend` in separate terminals.

- expo app **&&** concurrent backend

   ```bash
   npm start
   ```

- expo app **with** a clean build **&&** concurrent backend

   ```bash
   npm run start:clean
   ```

### Starting **just** the expo app

> In the output, you'll find options to open the app in a
> 
> - [development build](https://docs.expo.dev/develop/development-builds/introduction/)
> - [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
> - [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
> - [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

- Start the expo app

   ```bash
   npm run start:app
   ```
   
   > equivalent to running `npx expo start` in the `app` directory

- Start the expo app with a clean build

   ```bash
   npm run start:app:clean
   ```

Optionally, you can run the following commands to start the app in a specific environment:

- Start the app for the web

   ```bash
   npm run start:web
   ```

- Start the app for Android

   ```bash
   npm run start:android
   ```

- Start the app for iOS

   ```bash
   npm run start:ios
   ```

### Starting the backend

- Start the backend (production)

   ```bash
   npm run start:backend
   ```

- Start the backend (development with hot reloading)

   ```bash
   npm run start:backend:dev
   ```

### Linting

- Lint the project

   ```bash
   npm run lint
   ```

- Lint the project and fix issues

   ```bash
   npm run lint:fix
   ```




