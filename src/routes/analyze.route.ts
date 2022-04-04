import { Router } from 'express';
import AnalyzeController from '@controllers/analyze.controller';
import { Routes } from '@interfaces/routes.interface';

class AnalyzeRoute implements Routes {
  public path = '/';
  public router = Router();
  public analyzeController = new AnalyzeController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}analyze`, this.analyzeController.analyze);
  }
}

export default AnalyzeRoute;
