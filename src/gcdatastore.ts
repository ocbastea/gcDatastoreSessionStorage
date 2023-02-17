import {Session} from '@shopify/shopify-api';
import {SessionStorage} from '@shopify/shopify-app-session-storage';

export class GCDatastoreSessionStorage implements SessionStorage {
  private sessions: {[id: string]: Session} = {};

  public async storeSession(session: Session): Promise<boolean> {
    console.log('[GCDatastoreSessionStorage]: storeSession',session)
    this.sessions[session.id] = session;
    return true;
  }

  public async loadSession(id: string): Promise<Session | undefined> {
    console.log('[GCDatastoreSessionStorage]: loadSession',id)
    return this.sessions[id] || undefined;
  }

  public async deleteSession(id: string): Promise<boolean> {
    console.log('[GCDatastoreSessionStorage]: deleteSession',id)
    if (this.sessions[id]) {
      delete this.sessions[id];
    }
    return true;
  }

  public async deleteSessions(ids: string[]): Promise<boolean> {
    console.log('[GCDatastoreSessionStorage]: deleteSessions',ids)
    ids.forEach((id) => delete this.sessions[id]);
    return true;
  }

  public async findSessionsByShop(shop: string): Promise<Session[]> {
    console.log('[GCDatastoreSessionStorage]: findSessionsByShop',shop)
    const results = Object.values(this.sessions).filter(
      (session) => session.shop === shop,
    );
    return results;
  }
}
