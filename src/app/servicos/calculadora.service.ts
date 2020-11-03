import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  static readonly SOMA: String = '+';
  static readonly SUBTRACAO: String = '-';
  static readonly MULTIPLICACAO: String = '*';
  static readonly DIVISAO: String = '/';
  /*
  São variaveis contant, o que determina é o readonly;
  Conveção constat em letras maiusculas
  Por ser static é possivel chamar essas variaveis sem precisar de instância a class
  */

  calcular(num1: number, num2: number, operacao: string): number{
    let resultado: number;

    switch(operacao){
      case CalculadoraService.SOMA: resultado = num1 + num2;
      break;
      case CalculadoraService.SUBTRACAO: resultado = num1 - num2;
      break;
      case CalculadoraService.MULTIPLICACAO: resultado = num1 * num2;
      break;
      case CalculadoraService.DIVISAO: resultado = num1 / num2;
      break;
      default: resultado = 0;
    }

    return resultado;

  }

  constructor() { }
}
