import React from 'react';
import firestore from '../firestore.js';
// Create Read Update Delete

const product = [
    { name: "Soy milk", price: 3, description: "freshly made with soybeans grown organially at our farm. Nothing but soybeans and water.", imgURL: "" }
];

const seedProducts = async () => {
    // defining the collection we want to read from firebase
    const col = firestore.collection("product");

    // creating a promise for the data from "product" collection (??)
    const data = await col.get();

    // if no data exists, nothing will be returned
    if (data.size > 0) {
        return;
    }
    // promises for each product in product collection ??
    const promises = product.map(async (prod) => {
        return await col.add(prod);
    });
    // waiting for all promises??
    const resolvedReferences = await Promise.all(promises);
}

//Read - create filters to return data based on a limit abd/or price
export const getProducts = async (limit, price) => {
    //defining collection to get data from
    let col = firestore.collection("product");
    // setting statements for if a limit or age filter is defined
    col = limit ? col.limit(limit) : col;
    col = price ? col.where("price", "==", price) : col;
    // promise for data 
    const queryData = await col.get();
    // 
    const documents = queryData.docs;
    // mapping through products and splitting/removing id (only related to firebase) and rest of data
    return documents.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export const getProduct = async (id) => {
    const col = firestore.collection('product');
    const ref = col.doc(id);
    const doc =  await ref.get();

    if(!doc.exists) {
        return;
    }

    return { id: doc.id, ...doc.data() };
};


// // D in CRUD
// export const deleteColleague = async (id) => {
//     // DocumentReference
//     const col = firestore.collection("colleagues").doc(id);
//     // DocumentReference.delete
//     await col.delete();
// };

// // U in CRUD
// export const updateColleagues = async (id, record) => {
//     const ref = firestore.collection("colleagues").doc(id);
//     await ref.update(record);
// };

// export const createColleague = async (record) => {
//     const col = firestore.collection("colleagues");
//     await col.add(record);
// };

