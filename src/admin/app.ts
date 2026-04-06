import { setPluginConfig, defaultHtmlPreset } from '@_sh/strapi-plugin-ckeditor';

export default {
  register() {
    setPluginConfig({
      presets: [defaultHtmlPreset],
    });
  },
};
