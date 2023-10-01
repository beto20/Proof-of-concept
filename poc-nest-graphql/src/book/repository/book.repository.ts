export class BookRepository {

    public dataSource(): BookData[] {
      return [
        {
            id: 1,
            title: "mock maria",
            description: "",
            price: 100.00,
            authorId: 1
        },
        {
            id: 2,
            title: "mock maria",
            description: "",
            price: 100.00,
            authorId: 1
        },
        {
            id: 3,
            title: "mock maria",
            description: "",
            price: 100.00,
            authorId: 1
        },
        {
            id: 4,
            title: "mock maria",
            description: "",
            price: 100.00,
            authorId: 3
        },
        {
            id: 5,
            title: "mock maria",
            description: "",
            price: 100.00,
            authorId: 3
        },
        {
            id: 6,
            title: "mock maria",
            description: "",
            price: 100.00,
            authorId: 2
        }
      ]
    }

}
  
export interface BookData {
    id: number;
    title: string;
    description: string;
    price: number;
    authorId: number;
}
  