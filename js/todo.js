export class Todo {
  id = "";
  name = "";
  status = false;
  constructor(id, name) {
    this.id = id;
    this.name = name;
    //false means not done and true means done
    this.status = false;
  }

  toggleStatus() {
    this.status = !this.status;
  }
}
