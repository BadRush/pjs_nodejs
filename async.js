function samplePromise() {
    return Promise.resolve("badrus");
}

async function run() {
    const name = await samplePromise();
    console.info(name);
}

run();