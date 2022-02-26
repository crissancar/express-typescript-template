import { TemplateBackendApp } from './TemplateBackendApp';

try {
  new TemplateBackendApp().start().then();
} catch (error) {
  console.error(error);
  process.exit(1);
}

process.on('uncaughtException', (error) => {
  console.error('uncaughtException', error);
  process.exit(1);
});
