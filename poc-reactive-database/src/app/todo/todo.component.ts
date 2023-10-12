import { Component } from '@angular/core';
import { RxDatabase, addRxPlugin, createRxDatabase } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
import { DatabaseService } from '../database.service';

addRxPlugin(RxDBDevModePlugin);

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  constructor(private readonly databaseService: DatabaseService) { }


  insert() {
    this.databaseService
  }

  // schema = {
  //   version: 0,
  //   primaryKey: 'id',
  //   type: 'object',
  //   properties: {
  //     id: {
  //       type: 'string',
  //       maxLength: 100
  //     },
  //     name: {
  //       type: 'string',
  //       maxLength: 100
  //     },
  //     done: {
  //       type: 'boolean'
  //     },
  //     timestamp: {
  //       type: 'date-time'
  //     }
  //   },
  //   required: ['id', 'name', 'done', 'timestamp']

  // }
  // Promise<RxDatabase>

  // async instanceDatabase() {
  //   const database = await createRxDatabase({
  //     name: 'poc-db-1234',
  //     storage: getRxStorageDexie()
  //   });

  //   database.addCollections({
  //     todos: {
  //       schema: this.schema
  //     }
  //   });

  //   const row = {
  //     id: '123',
  //     name: 'Crear funcion',
  //     done: true,
  //     timestamp: new Date().toISOString()
  //   }

  //   const mock = database.insertLocal(row.id, row);

  //   const get = database.getLocal('123')

  //   console.log("insert:: ", mock)
  //   console.log("get::", get)
  //   // return database
  // }



}
