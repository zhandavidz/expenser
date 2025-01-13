# Expenser

Allow a group of people to scan and split a receipt automatically when each item on the receipt will be split differently amongst the group.

Built with [Expo](https://expo.dev/), [React Native](https://reactnative.dev/), and [Express](https://expressjs.com/). Styled with [NativeWind](https://www.nativewind.dev/) (which is [TailWind](https://tailwindcss.com/) for React Native). Written in [TypeScript](https://www.typescriptlang.org/).

## Why Expenser?

Say a group of roommates goes on a grocery run. One person buys the groceries, say milk, eggs, and bread. One of the roommates is allergic to milk, and one of the roommates is gluten-free, but the rest will be split equally among the roommates.

Usually, the person who bought the groceries would have to manually calculate how much each person owes for each item, add that up separately, and possibly even account for the fact that only some items are taxed! This app automates that process.

The person who bought the groceries scans the receipt, and the app will translate the receipt full of acronyms and codes into a list of human-readable items. Then, the person can select the items that need to be split differently amongst the group. The app will then prompt the user to select the people who need to pay for each item. The app will then calculate the total amount each person needs to pay and send a notification to each person with the total amount they need to pay.

As a college student currently living in an apartment with 3 of my friends, I have experienced this problem firsthand. Having to manually calculate how much each person owes for each item is a pain. This app will make it easier for people to split the cost of items that need to be split differently amongst the group. I know I most certainly will be using this app all the time!

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


## Contributing

This is a passion project of mine, and I'm only planning on working on this by myself and a few friends in my free time. As just practice for myself, I'm not looking for any contributors at the moment so I can figure it all out. However, if you have any suggestions, feedback, or have found any bugs, we welcome you to open an issue or a pull request. We will review it and get back to you as soon as possible. Thanks!

