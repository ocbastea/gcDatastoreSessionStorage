// import {batteryOfTests} from '@shopify/shopify-app-session-storage-test-utils';

import {GCDatastoreSessionStorage} from '../gcdatastore';

describe('GCDatastoreSessionStorage', () => {
  let storage: GCDatastoreSessionStorage;
  beforeAll(async () => {
    storage = new GCDatastoreSessionStorage();
  });

  // batteryOfTests(async () => storage);
});
