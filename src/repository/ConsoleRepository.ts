import { ConsoleModel } from "../model/ConsoleModel";

export class ConsoleRepository {
  private consoles: ConsoleModel[] = [
    new ConsoleModel("Atari 2600", "atari.png", new Date("1978-05-11")),
    new ConsoleModel("Nintendo", "nintendo.png", new Date("1983-11-17")),
  ];

  insert(cons: ConsoleModel) {
    this.consoles.push(cons);
  }

  findAll(): ConsoleModel[] {
    return this.consoles;
  }
}
