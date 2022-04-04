import { HttpException } from '@exceptions/HttpException';
import { isEmpty } from '@utils/util';
import { Result } from '@interfaces/analyze.interface';
const parser = require('@solidity-parser/parser');

class AnalyzeService {

  public analyze(code : string) : Result {
    if (isEmpty(code)) throw new HttpException(400, "There's no code!!!");

    const parsedCode = parser.parse(code);

    let result : Result = {
        imports: [],
        contracts: []
    }
    parsedCode.children.map((child: any) => {
        if (child.type === "ImportDirective")   result.imports.push(child.path);
        if (child.type === "ContractDefinition")    result.contracts.push(child.name);
    })
    
    return result;
  }
}

export default AnalyzeService;
