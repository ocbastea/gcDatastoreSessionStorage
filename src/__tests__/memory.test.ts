import {batteryOfTests} from '@shopify/shopify-app-session-storage-test-utils';

import {GCDatastoreSessioNStorage} from '../gcdatastore';

describe('GCDatastoreSessioNStorage', () => {
  let storage: GCDatastoreSessioNStorage;
  beforeAll(async () => {
    storage = new MemorySessionStorage();
  });

  batteryOfTests(async () => storage);
});
