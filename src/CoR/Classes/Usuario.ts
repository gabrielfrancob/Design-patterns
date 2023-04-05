export class Usuario {
  constructor(
    public nome: string,
    public idade: number,
    public senha: number,
    public admin: boolean
  ) {}

  isAdmin(): boolean {
    return this.admin;
  }
}
