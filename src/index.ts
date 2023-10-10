import { registerPlugin } from '@capacitor/core';

import type { UdpPlugin } from './definitions';

const UdpPlugin = registerPlugin<UdpPlugin>('UdpPlugin', {
  web: () => import('./web').then(m => new m.UdpPluginWeb()),
});

export const UdpPluginUtils = {
  bufferToString: function (buffer: ArrayBuffer): string {
      const charcodes = new Uint8Array(buffer);
      //  btoa(String.fromCharCode.apply(null, charcodes));
      return new TextDecoder("utf-8").decode(charcodes);
  },
  stringToBuffer: function (base64String: string): ArrayBuffer {
      const str = atob(base64String);
      const buf = new ArrayBuffer(str.length);
      const bufView = new Uint8Array(buf);
      for (let i = 0, strLen = str.length; i < strLen; i++) {
          bufView[i] = str.charCodeAt(i);
      }
      return buf;
  }
}


export * from './definitions';
export { UdpPlugin };
