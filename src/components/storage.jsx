import React from "react";

const storage = (data) => {
    const store = [];
    store.push(data);
    for(let i = 0; i <= store.length; i++){
        console.log(store[i]);
    }

}

export default storage;