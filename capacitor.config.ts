import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.BemsProduction.app',
  appName: 'OneClickWork',
  webDir: 'dist/app-test',
  server: {
    androidScheme: 'https'
  }
};

export default config;
