// Generated from C:/Users/linas/Desktop/GameBakalauras/grammarTest1/src\gameGrammar.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';

export default class gameGrammarVisitor extends antlr4.tree.ParseTreeVisitor {
  constructor() {
    super();
    this.variables = {};
  }
	visitProgram(ctx) {
	  return this.visitChildren(ctx);
	}


visitLine(ctx) {
  if (ctx.statement()) {
    return this.visit(ctx.statement());
  } else if(ctx.action()){
      this.visit(ctx.action());
  } else if(ctx.loop()){
      this.visit(ctx.loop());
  }else if(ctx.ifBlock()){
      this.visit(ctx.ifBlock());
    return null; 
  }
  }


  visitStatement(ctx) {
    if (ctx.assingment()) {
      this.visit(ctx.assingment());
    } else if (ctx.functionCall()) {
      this.visit(ctx.functionCall());
    }
  }


  visitIfBlock(ctx) {
    const condition = this.visit(ctx.expression());
    if(condition){
      this.visit(ctx.block());
    } else if(ctx.elseIfBlock()){
      this.visit(ctx.elseIfBlock());
    }
  }


	visitElseIfBlock(ctx) {
    if (ctx.block()) {
      this.visit(ctx.block());
    } else if (ctx.ifBlock()) {
      this.visit(ctx.ifBlock());
    }
	}

  visitAssingment(ctx) {
    const identifier = ctx.IDENTIFIER().getText();
    const value = this.visit(ctx.expression());
    this.variables[identifier] = value;
  }


  visitFunctionCall(ctx) {
    return {
      type: "functionCall",
      identifier: ctx.IDENTIFIER().getText(),
      expression: this.visit(ctx.expression()),
    };
  }

visitAction(ctx) {
  const action = ctx.getText();
  switch (action) {
    case 'eik':
      var myList = document.getElementById("generatedCode");
      var newListItem = document.createElement("li");
      newListItem.textContent = 'eik';
      myList.appendChild(newListItem);
      break;
    case 'sok':
      var myList = document.getElementById("generatedCode");
      var newListItem = document.createElement("li");
      newListItem.textContent = 'sok';
      myList.appendChild(newListItem);
      break;
    case 'kairen':
      var myList = document.getElementById("generatedCode");
      var newListItem = document.createElement("li");
      newListItem.textContent = 'kairen';
      myList.appendChild(newListItem);
      break;
    case 'desinen':
      var myList = document.getElementById("generatedCode");
      var newListItem = document.createElement("li");
      newListItem.textContent = 'desinen';
      myList.appendChild(newListItem);
      break;
    default:
      console.log(`Unknown action: ${action}`);
  }
  return null;
  }


visitLoop(ctx) {
  this.visitBlock(ctx.block());
  return null;
  }
 

visitBlock(ctx) {
  const line = ctx.line(); 
  if(ctx.expression()){
    const count = this.visit(ctx.expression())
    for (let i = 0; i < count; i++) {
      this.visit(line); 
    }
  }else{
    this.visit(line); 
  }
  return null;
  }

visitConstantExpression(ctx) {
  var value = parseInt(ctx.constant().getText());
  if (value < 999 && value > -999){
    return value;
  } 
  }

visitIdentifierExpression(ctx) {
    const identifier = ctx.getText();
    const count = this.variables[identifier];
  return count;
  }

visitFunctionCallExpression(ctx) {
  return this.visit(ctx.functionCall);
  }

visitParenthesizedExpression(ctx) {
  return this.visit(ctx.expression);
  }

visitMultiplicativeExpression(ctx) {
  const left = this.visit(ctx.expression(0));
  const right = this.visit(ctx.expression(1));
  const operator = this.visit(ctx.multOp())
  switch (operator) {
    case '*':
      return left * right;
    case '/':
      return left / right;
    case '%':
      return left % right;
    default:
      throw new Error(`Unknown comparison operator: ${operator}`);
}
  }

visitAdditiveExpression(ctx) {
  const left = this.visit(ctx.expression(0));
  const right = this.visit(ctx.expression(1));
  const operator = this.visit(ctx.addOp())
  switch (operator) {
    case '+':
      return left + right;
    case '-':
      return left - right;
    default:
      throw new Error(`Unknown comparison operator: ${operator}`);
}
  } 

visitComparisonExpression(ctx) {
  const left = this.visit(ctx.expression(0))
  const operator = this.visit(ctx.compareOp())
  const right = this.visit(ctx.expression(1))
  switch (operator) {
    case '==':
      return left === right;
    case '!=':
      return left !== right;
    case '>':
      return left > right;
    case '<':
      return left < right;
    case '>=':
      return left >= right;
    case '<=':
      return left <= right;
    default:
      throw new Error(`Unknown comparison operator: ${operator}`);
  }
  }





visitBooleanExpression(ctx) {
  const left = this.visit(ctx.expression[0]);
  const right = this.visit(ctx.expression[1]);
  switch (ctx.boolOp.type) {
    case GrammarLexer.ANDR:
      return left && right;
    case GrammarLexer.ORR:
      return left || right;
    default:
      throw new Error(`Unknown boolean operator: ${ctx.boolOp.text}`);
  }
  }


	visitMultOp(ctx) {
    const operator = ctx.getText();
    switch (operator) {
      case '*':
      case 'sudauginti':
        return '*';
      case '/':
      case 'padalinti':
        return '/';
      case '%':
        return '%';
      default:
        throw new Error(`Unknown addOp: ${operator}`);
    }
  }


	visitAddOp(ctx) {
    const operator = ctx.getText();
    switch (operator) {
      case '+':
      case 'prideti':
      case 'sudeti':
        return '+';
      case '-':
      case 'atimti':
        return '-';
      default:
        throw new Error(`Unknown addOp: ${operator}`);
    }
  }


	visitCompareOp(ctx) {
    const operator = ctx.getText();
    switch (operator) {
      case '==':
      case 'lygu':
        return '==';
      case '!=':
      case 'nelygu':
        return '!=';
      case '>':
      case 'daugiau':
        return '>';
      case '<':
      case 'maziau':
        return '<';
      case '>=':
      case 'daugiaulygu':
        return '>=';
      case '<=':
      case 'maziaulygu':
        return '<=';
      default:
        throw new Error(`Unknown addOp: ${operator}`);
    }
  }

	visitBoolOp(ctx) {
	  return this.visitChildren(ctx);
	}
  
}