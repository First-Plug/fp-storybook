import { getStoryContext } from '@storybook/test-runner';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

const customViewports = {
  mobile: {
    name: 'Mobile',
    styles: {
      width: '320px',
      height: '568px',
    },
  },
};

export default {
  async preRender(page, story) {
    const context = await getStoryContext(page, story);
    if (context.parameters?.viewport) {
      const viewport = {
        ...MINIMAL_VIEWPORTS,
        ...customViewports,
      }[context.parameters.viewport];
      if (viewport) {
        await page.setViewportSize({
          width: parseInt(viewport.styles.width),
          height: parseInt(viewport.styles.height),
        });
      }
    }
  },
  async postRender(page, context) {
    // Espera a que el componente esté completamente renderizado
    await page.waitForTimeout(1000);
  },
};