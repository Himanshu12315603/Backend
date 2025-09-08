const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a Promise");
        //resolve("success");
        reject("not exectut");
    });
};


let promise = getPromise();

// when the promisee will successfully exectue 
promise.then((res) => {
    console.log("promise fullfiled", res);
});


promise.catch((err) => {
    console.log("promise rejected", err);
});
