/* eslint-disable @typescript-eslint/no-unused-vars */
import { WebPlugin } from '@capacitor/core';

import type { UdpPluginPlugin } from './definitions';

export class UdpPluginWeb extends WebPlugin implements UdpPluginPlugin {
  create(_options?: { properties?: { name?: string | undefined; bufferSize?: number | undefined; } | undefined; } | undefined): Promise<{ socketId: number; ipv4: string; ipv6: string; }> {
    throw new Error('Method not implemented.');
  }
  update(_options: { socketId: number; properties: { name?: string | undefined; bufferSize?: number | undefined; }; }): Promise<any> {
    throw new Error('Method not implemented.');
  }
  setPaused(_options: { socketId: number; paused: boolean; }): Promise<any> {
    throw new Error('Method not implemented.');
  }
  bind(_options: { socketId: number; address: string; port: number; }): Promise<any> {
    throw new Error('Method not implemented.');
  }
  send(_options: { socketId: number; address: string; port: number; buffer: string; }): Promise<any> {
    throw new Error('Method not implemented.');
  }
  closeAllSockets(): Promise<any> {
    throw new Error('Method not implemented.');
  }
  close(_options: { socketId: number; }): Promise<any> {
    throw new Error('Method not implemented.');
  }
  getInfo(_options: { socketId: number; }): Promise<{ socketId: number; bufferSize: number; name: string | null; paused: boolean; localAddress?: string | undefined; localPort?: number | undefined; }> {
    throw new Error('Method not implemented.');
  }
  getSockets(): Promise<{ sockets: [{ socketId: number; bufferSize: number; name: string | null; paused: boolean; localAddress?: string | undefined; localPort?: number | undefined; }]; }> {
    throw new Error('Method not implemented.');
  }
  joinGroup(_options: { socketId: number; address: string; }): Promise<any> {
    throw new Error('Method not implemented.');
  }
  leaveGroup(_options: { socketId: number; address: string; }): Promise<any> {
    throw new Error('Method not implemented.');
  }
  setMulticastTimeToLive(_options: { socketId: number; ttl: number; }): Promise<any> {
    throw new Error('Method not implemented.');
  }
  setBroadcast(_options: { socketId: number; enabled: boolean; }): Promise<any> {
    throw new Error('Method not implemented.');
  }
  setMulticastLoopbackMode(_options: { socketId: number; enabled: boolean; }): Promise<any> {
    throw new Error('Method not implemented.');
  }
  getJoinedGroups(): Promise<{ groups: [string]; }> {
    throw new Error('Method not implemented.');
  }
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
