// knip.config.js for a pnpm monorepo
/** @type {import('knip').KnipConfig} */
module.exports = {
  workspaces: {
    'apps/*': {},
    'packages/*': {},
  },
  // Add further customization here if needed
};
