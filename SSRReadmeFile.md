=> When you create a new app with SSR Please follow following steps
1) set package.json

"scripts": {
    "start": "node ./dist/server",
    "build": "webpack"
  },

  then run "npm run-script build" to build your app

2) After successful build you can run your react app with "npm start"


=> Whenever you change anything in your app, and you want to see it as result on your web or terminal then follow following steps.
1) Build your app with "npm run-script build"
2) After successful build you can run your react app with "npm start"