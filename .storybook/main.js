module.exports = {
  stories: [
    '../stories/**/*.stories.(js|jsx|mdx)',
    '../lib/**/*.stories.(js|jsx|mdx)',
  ],
  addons: [
    '@storybook/addon-viewport/register',
    '@storybook/addon-docs',
    '@storybook/addon-actions', 
    '@storybook/addon-links',
  ],
};
