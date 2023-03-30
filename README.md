# quasar-test-symlinks


   1. clone repo
   2. cd test-app
   3. pnpm install
   4. create symliks (for windows there is __MAKE_LINK.BAT)
   5. npx run spa:dev ,or npx run electron:dev
   6. play with changing the settings in quasar.config.js
      - enable linting  (uncoment //warnings: true, and  //errors: true,)
      - uncoment  // viteConf.resolve.preserveSymlinks = true;
