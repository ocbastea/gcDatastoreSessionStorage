"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCDatastoreSessionStorage = void 0;
var tslib_1 = require("tslib");
var GCDatastoreSessionStorage = /** @class */ (function () {
    function GCDatastoreSessionStorage() {
        this.sessions = {};
    }
    GCDatastoreSessionStorage.prototype.storeSession = function (session) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                console.log('[GCDatastoreSessionStorage]: storeSession', session);
                this.sessions[session.id] = session;
                return [2 /*return*/, true];
            });
        });
    };
    GCDatastoreSessionStorage.prototype.loadSession = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                console.log('[GCDatastoreSessionStorage]: loadSession', id);
                return [2 /*return*/, this.sessions[id] || undefined];
            });
        });
    };
    GCDatastoreSessionStorage.prototype.deleteSession = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                console.log('[GCDatastoreSessionStorage]: deleteSession', id);
                if (this.sessions[id]) {
                    delete this.sessions[id];
                }
                return [2 /*return*/, true];
            });
        });
    };
    GCDatastoreSessionStorage.prototype.deleteSessions = function (ids) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                console.log('[GCDatastoreSessionStorage]: deleteSessions', ids);
                ids.forEach(function (id) { return delete _this.sessions[id]; });
                return [2 /*return*/, true];
            });
        });
    };
    GCDatastoreSessionStorage.prototype.findSessionsByShop = function (shop) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var results;
            return tslib_1.__generator(this, function (_a) {
                console.log('[GCDatastoreSessionStorage]: findSessionsByShop', shop);
                results = Object.values(this.sessions).filter(function (session) { return session.shop === shop; });
                return [2 /*return*/, results];
            });
        });
    };
    return GCDatastoreSessionStorage;
}());
exports.GCDatastoreSessionStorage = GCDatastoreSessionStorage;
//# sourceMappingURL=gcdatastore.js.map