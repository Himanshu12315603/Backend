function getData(dataId, getNextData) {

    setTimeout(() => {
        console.log("data", dataId);
        if(getNextData) {
            getNextData();
        }
    }, 2000);
}

// difficult to read and understand that's why come promises
// call back hell

getData(1, () => {
    console.log("Getting data2....");
    getData(2, () => {
        console.log("Getting data3....");
        getData(3, () => {
            console.log("Getting data4....");
        });
    });
});
