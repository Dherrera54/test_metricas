export class Collector {
  id: number;
  name: string;
  telephone: string;
  email: string;

  constructor(
    id: number,
    name: string,
    telephone: string,
    email: string
  ) {
    this.id = id;
    this.name = name;
    this.telephone = telephone;
    this.email = email;
  }
 }
