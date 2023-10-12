import { Injectable } from '@angular/core';
import { RxCollection, RxDatabase, createRxDatabase } from 'rxdb';
import { getRxStorageMemory } from 'rxdb/plugins/storage-memory';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private dbPromise: Promise<RxDatabase>;
  private tasksCollectionPromise: Promise<{
    tasks: RxCollection;
  }>;


  constructor() {
    this.dbPromise = this.initDb();
    this.tasksCollectionPromise = this.initTasksCollection();
  }

  private async initDb(): Promise<RxDatabase<any>> {
    const db = await createRxDatabase({
      name: 'tasksdb' + Math.random() * 100, // <- name
      storage: getRxStorageMemory(), // <- RxStorage
      password: 'myPassword', // <- password (optional)
    });
    return db;
  }

  private async initTasksCollection() {
    const db = await this.dbPromise;
    const tasksCollection = await db.addCollections({
      tasks: {
        schema: {
          title: 'tasks schema',
          version: 0,
          primaryKey: 'id',
          type: 'object',
          properties: {
            id: {
              type: 'string',
              maxLength: 100, // <- the primary key must have set maxLength
            },
            title: {
              type: 'string',
            },
            description: {
              type: 'string',
            },
            completed: {
              type: 'boolean',
            },
          },
        },
      },
    });
    return tasksCollection;
  }



}
