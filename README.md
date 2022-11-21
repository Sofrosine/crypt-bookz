# CryptBook

<span>
<img src="https://ik.imagekit.io/sofrosine/Screen_Shot_2022-11-21_at_13.25.34.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669011972389" alt="drawing" width="200"/>
<img src="https://ik.imagekit.io/sofrosine/Screen_Shot_2022-11-21_at_13.25.40.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669011971868" alt="drawing" width="200"/>
<img src="https://ik.imagekit.io/sofrosine/Screen_Shot_2022-11-21_at_13.25.47.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669011972558" alt="drawing" width="200"/>
</span>

Clone of Pintu Application, using Pintu open api

## A. Features

- List of Crypto
- Detail modal for Crypto
- Search Crypto by name
- Filter & Sort Crypto list
- Storybook
- Unit testing
- Linting
- Check coverage unit test & linting on pre-commit

## B. Tech Stack

- React Native
- React Query & Axios
- Context API
- React Navigation
- @fortawesome (for icon, provided by FontAwesome)
- react-native-config (for .env)

## C. How to run

### NOTE: Make sure you already follow the react native cli guide below

```
https://reactnative.dev/docs/environment-setup
```

### 1. iOS

- Clone this repository
- Run `yarn` command on root folder
- cd to `ios` folder
- Run `bundle exec pod install` command
- Back to root directory
- Run `yarn ios`

### 2. Android

- Clone this repository
- Run `yarn` command on root folder
- Run `yarn android`

## D. How to add storybook component

- Add new story component folder to `/storybook/stories`
- Add story component file to the folder you just created with `.stories.tsx` suffix file name
- Add your story code **(You can check the existing code for example)**
- Import your file to the `/storybook/stories/index.tsx` file

## E. Available Scripts

```bash

$ yarn android # run android project

$ yarn ios # run ios project

$ yarn start # run project server

$ yarn test # testing

$ yarn lint # linting

$ yarn prepare # install husky

$ yarn pre-commit #  lint-staged

$ yarn storybook # run storybook localhost on web

```

## F. Download APK
You can find the latest apk here
`https://drive.google.com/file/d/1p58M91cKbNc0w0ylKHSGcscHADpk4d2A/view?usp=share_link`

