export interface UdpPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
