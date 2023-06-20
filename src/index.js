import antlr4 from 'antlr4';
import MyGrammarLexer from './gameGrammarLexer.js';
import MyGrammarParser from './gameGrammarParser.js';
import MyGrammarListener from './gameGrammarListener.js';
import MyGrammarVisitor from './gameGrammarVisitor.js';
import './styles/main.scss'
let tree;
var ul = document.getElementById("generatedCode");

const vykdytiBtn = document.getElementById('vykdyti')
if(vykdytiBtn){
vykdytiBtn.addEventListener('click', generateTree);
}

function generateTree() {
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }

  const chars = new antlr4.InputStream(document.getElementById("code").value);
  const lexer = new MyGrammarLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new MyGrammarParser(tokens);
  parser.buildParseTrees = true;
  tree = parser.program();
  const visitor = new MyGrammarVisitor();
  visitor.visit(tree);

  const script = document.getElementById("runCode");
  const functionDefinition = script.textContent;
  eval(functionDefinition);
  runCode();
}
