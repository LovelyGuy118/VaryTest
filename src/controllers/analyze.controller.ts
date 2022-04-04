import { NextFunction, Request, Response } from 'express';
import { Result } from '@interfaces/analyze.interface';

import AnalyzeService from '@services/analyze.service';

class AnalyzeController {
  public analyzeService = new AnalyzeService();

  public analyze =  (req: Request, res: Response, next: NextFunction): void => {
    try {
      const code: string = req.body.code;
      const result: Result = this.analyzeService.analyze(code);
      res.status(200).json({ result, message: 'analyze' });
    } catch (error) {
      next(error);
    }
  };
}

export default AnalyzeController;
