# In-Memory Session Storage

This package implements the `SessionStorage` interface to work with Google Cloud Datastore.

```js
import {shopifyApp} from '@shopify/shopify-app-express';
import {GCDataStoreSessionStorage} from '@ocbastea/shopify-app-session-storage-gcdatastore';

const shopify = shopifyApp({
  sessionStorage: new GCDataStoreSessionStorage(),
  // ...
}); 
```

