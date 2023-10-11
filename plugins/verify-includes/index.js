const spawnSync = require('child_process').spawnSync;

module.exports = function (context, options) {
  return {
    name: 'verify-includes',
    async postBuild({siteConfig = {}, routesPaths = [], outDir}) {
      const child = spawnSync('grep',
          // -l - only print filenames
          // -R - recursive
          // -w - prints only matched words rather than entire lines
          // -E - egrep mode so that it accepts the (.*) syntax
          ['-wRoE',
            'include file not found: (.*) \-\-',
            outDir], {
        encoding: 'utf-8',
        stdio: [process.stdin, 'pipe', process.stderr]
      });
      // Exit codes:
      //      The grep utility exits with one of the following values:
      //
      //      0     One or more lines were selected.
      //      1     No lines were selected.
      //      >1    An error occurred.
      // So we expect 1 - no lines were selected, and no errors.
      if (child.status !== 1) {
        console.error("Found missing includes in these files:")
        console.error(child.stdout);
        throw new Error("Found missing includes");
      }
    },
  };
};