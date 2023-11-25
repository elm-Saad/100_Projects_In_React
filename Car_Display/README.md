# CMS Project

## What to learn

* implementing  headless CMS
* using [Contentful ](https://www.contentful.com/)


##### Create Data

Setup content type and create few entries

#### Explore API

Get Space ID, Access Token and explore code examples.

Space ID - 
Access Token - 

#### Install SDK

- npm install contentful

#### Get Entries

```js
import { createClient } from 'contentful'

const client = createClient({
  space: '____________',
  environment: 'master', // defaults to 'master' if not set
  accessToken: import.meta.env.VITE_API_KEY,
})


client
  .getEntries({ content_type: '<entry_id>' })// get all the entry on a single space
  .then((response) => console.log(response.items))
  .catch(console.error);
```


#### Parse Data

Setup projects array

#### Setup Products Component

Render data in Products component


