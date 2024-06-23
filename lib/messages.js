import sql from "better-sqlite3";
import { cache } from "react";
import { unstable_cache } from "next/cache";
const db = new sql("messages.db");

function initDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY, 
      text TEXT
    )`);
}

initDb();

export function addMessage(message) {
  db.prepare("INSERT INTO messages (text) VALUES (?)").run(message);
}

// unstable_cache allows you to cache the results of expensive operations, like database queries, and reuse them across multiple requests; besides the cache that caches requests.
export const getMessages = unstable_cache(
  cache(function getMessages() {
    console.log("Fetching messages from db");
    return db.prepare("SELECT * FROM messages").all();
  })
);
