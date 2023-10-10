import { registerPlugin } from '@capacitor/core';

import type { UdpPluginPlugin } from './definitions';

const UdpPlugin = registerPlugin<UdpPluginPlugin>('UdpPlugin', {
  web: () => import('./web').then(m => new m.UdpPluginWeb()),
});

export * from './definitions';
export { UdpPlugin };
