grammar gameGrammar;

program: line* EOF;

line: statement | action | loop | ifBlock;
statement: assingment|functionCall;
ifBlock: IF expression block (ELSEIF elseIfBlock)?;
elseIfBlock: block|ifBlock;
assingment: IDENTIFIER '=' expression;
functionCall: IDENTIFIER '=' expression;

action  : 'eik'
        | 'sok'
        | 'kairen'
        | 'desinen'
        ;

loop: LOOP  block;
block:  line* expression? ENDOFBLOCK;

expression
          : constant                                #constantExpression
          | IDENTIFIER                              #identifierExpression
          | functionCall                            #functionCallExpression
          | '(' expression ')'                      #parenthesizedExpression
          | expression multOp expression            #multiplicativeExpression
          | expression addOp expression             #additiveExpression
          | expression compareOp expression         #comparisonExpression
          | expression boolOp expression            #booleanExpression
          ;

multOp: '*' | '/' | '%'| 'sudauginti'| 'padalinti';
addOp: '+' | '-' | 'prideti'| 'sudeti'| 'atimti';
compareOp: '==' | '!=' | '>' | '<' | '>=' | '<=' | 'lygu' | 'nelygu' | 'daugiau' | 'maziau' | 'daugiaulygu'| 'maziaulygu';
boolOp: BOOL_OPERATORS;

BOOL_OPERATORS: 'ir' | 'arba';

constant: INTEGER | BOOL;

BOOL: 'true' | 'false';
LOOP: 'kartok';
IF: 'jeigu';
ELSEIF: 'jeigu ne';
ENDOFBLOCK: 'kartu' | 'kartus'| 'vykdyk' | 'daryk';

INTEGER: [0-9]+;


Whitespace: [ \t\r\n]+ -> skip;
IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]*;