# Redux boilerplate

Minimal react-redux-webpack setup with hot reloading and distribution builds.


## Setup

`npm i & bower i`

## Workflow

- `npm run serve` - serve your project with hot reload 
- `npm run dist` - build your project for deployment


- `npm run test:e2e` - run e2e tests once
- `npm run test` - run e2e & unit tests once


- `npm run test:unit` - run unit tests once
- `npm run test:unit:watch` - run unit tests with file watcher


- `npm run test:e2e` - run e2e tests once
- `npm run test:e2e:watch` - run e2e tests with file watcher

## Internationalization

For internationalization we use [react-intl library](https://github.com/yahoo/react-intl).
Localised messages are in translation folder in files `en-US.json` and `sk-SK.json` and files are composed in `all.js`.
To use localised message in React, use

  <FormattedMessage id="greeting" tagName="p" />
  
You can also pass parameters to the message
  
  <FormattedMessage
    id="sentence"
    values={{
      name: 'Annie',
      numPhotos: 2,
      takenDate: Date.now(),
    }}
  />  

## e2e test

For tests we use [cucumber](https://cucumber.io/).
Tests are in features folder. You can run them by
  
  npm run test:e2e
  
As a headless browser we use [zombie](http://zombie.js.org/). There is also better [documentation](http://zqdevres.qiniucdn.com/data/20110811173813/index.html) for it.
To generate test element id use in React `{...getTestSelector('<SELECTOR>')}` in React
  
  <select onChange={this.actions.localeOnChange} {...getTestSelector('locale')}>
    <option value="en-US">English</option>
    <option value="sk-SK">Slovensky</option>
  </select>
  
The id will not be generated in produciton build
Then you can use this id in step_definitions. All step definitions are shared in all feature files.  

