import { WebPlugin } from '@capacitor/core';

import type { UdpPluginPlugin } from './definitions';

export class UdpPluginWeb extends WebPlugin implements UdpPluginPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
