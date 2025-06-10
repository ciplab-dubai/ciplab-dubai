let internalPkg;
try {
  // Attempt to load the internal package normally
  internalPkg = require('example-internal-package');
} catch (err) {
  // If it doesn't exist, fallback to a stub so the demo still runs
  console.warn('example-internal-package not found, using fallback implementation.');
  internalPkg = {
    run() {
      console.log('Fallback package running');
    }
  };
}

console.log('This is a demo of a vulnerable app using a fake internal package.');
internalPkg.run();
