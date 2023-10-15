function samplePromise() {
    return Promise.resolve("badrus");
}


   const name = await samplePromise();
    console.info(name);


    //   node modules secara default menggunakan async await / asyncronus