export class AuthorRepository {

  public dataSource(): AuthorData[] {
    return [
      {
        id: 1,
        name: 'Maria',
        lastname: 'Gonzales',
        books: [
          {
            id: 1,
            title: "mock maria",
            description: "",
            price: 100.00,
          },
          {
            id: 2,
            title: "mock maria",
            description: "",
            price: 100.00,
          }
        ]
      },
      {
        id: 1,
        name: 'Carlos',
        lastname: 'Marin',
        books: [
          {
            id: 1,
            title: "mock carlos",
            description: "",
            price: 100.00,
          }
        ]
      }
    ]
  }

}

export interface AuthorData {
  id: number;
  name: string;
  lastname: string;
  books: BookData[];
}

export interface BookData {
  id: number;
  title: string;
  description: string;
  price: number;
}
