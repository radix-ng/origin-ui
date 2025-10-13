import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { config } from './app/app.config.server';
import { Layout } from './app/layout';

const bootstrap = (context: BootstrapContext) => bootstrapApplication(Layout, config, context);

export default bootstrap;
