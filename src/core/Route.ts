import { Router } from 'express';

export abstract class Route {
  public router: Router;

  protected constructor() {
    this.router = Router();
  }

  abstract config(): void;
}
