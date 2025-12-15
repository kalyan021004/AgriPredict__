import fs from "fs";

const STORE_PATH="data/embeddings/store.json";

if (!fs.existsSync("data/embeddings")) {
  fs.mkdirSync("data/embeddings", { recursive: true });
}

if (!fs.existsSync(STORE_PATH)) {
  fs.writeFileSync(STORE_PATH, JSON.stringify([]));
}

export function addDocuments(docs){
    const db =JSON.parse(fs.readFileSync(STORE_PATH));
    db.push(...docs);
    fs.writeFileSync(STORE_PATH,JSON.stringify(db,null,2));

}

export function retrieveDocuments(query){
    const db=JSON.parse(fs.readFileSync(STORE_PATH));
    return db.filter(d=>
        d.text.toLowerCase().includes(query.toLowerCase())
    );

    
}