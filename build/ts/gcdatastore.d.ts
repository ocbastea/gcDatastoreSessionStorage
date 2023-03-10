import { Session } from '@shopify/shopify-api';
import { SessionStorage } from '@shopify/shopify-app-session-storage';
export declare class GCDatastoreSessionStorage implements SessionStorage {
    private sessions;
    storeSession(session: Session): Promise<boolean>;
    loadSession(id: string): Promise<Session | undefined>;
    deleteSession(id: string): Promise<boolean>;
    deleteSessions(ids: string[]): Promise<boolean>;
    findSessionsByShop(shop: string): Promise<Session[]>;
}
//# sourceMappingURL=gcdatastore.d.ts.map