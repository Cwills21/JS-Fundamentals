const firstArg = process.argv[2];  // third array element is the first user‑supplied argument

if (firstArg === undefined) {
    console.log('No argument');
} else {
    console.log(firstArg);
}