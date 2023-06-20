// Generated from C:/Users/linas/Desktop/GameBakalauras/grammarTest1/src\gameGrammar.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import gameGrammarListener from './gameGrammarListener.js';
import gameGrammarVisitor from './gameGrammarVisitor.js';

const serializedATN = [4,1,38,127,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,1,0,5,0,34,8,0,10,0,12,0,37,9,0,1,0,1,0,1,
1,1,1,1,1,1,1,3,1,45,8,1,1,2,1,2,3,2,49,8,2,1,3,1,3,1,3,1,3,1,3,3,3,56,8,
3,1,4,1,4,3,4,60,8,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,1,8,1,8,1,8,
1,9,5,9,76,8,9,10,9,12,9,79,9,9,1,9,3,9,82,8,9,1,9,1,9,1,10,1,10,1,10,1,
10,1,10,1,10,1,10,1,10,3,10,94,8,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,
10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,5,10,112,8,10,10,10,12,10,115,
9,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,1,15,0,1,20,16,0,
2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,0,5,1,0,2,5,1,0,8,12,1,0,13,17,
1,0,18,29,2,0,31,31,36,36,126,0,35,1,0,0,0,2,44,1,0,0,0,4,48,1,0,0,0,6,50,
1,0,0,0,8,59,1,0,0,0,10,61,1,0,0,0,12,65,1,0,0,0,14,69,1,0,0,0,16,71,1,0,
0,0,18,77,1,0,0,0,20,93,1,0,0,0,22,116,1,0,0,0,24,118,1,0,0,0,26,120,1,0,
0,0,28,122,1,0,0,0,30,124,1,0,0,0,32,34,3,2,1,0,33,32,1,0,0,0,34,37,1,0,
0,0,35,33,1,0,0,0,35,36,1,0,0,0,36,38,1,0,0,0,37,35,1,0,0,0,38,39,5,0,0,
1,39,1,1,0,0,0,40,45,3,4,2,0,41,45,3,14,7,0,42,45,3,16,8,0,43,45,3,6,3,0,
44,40,1,0,0,0,44,41,1,0,0,0,44,42,1,0,0,0,44,43,1,0,0,0,45,3,1,0,0,0,46,
49,3,10,5,0,47,49,3,12,6,0,48,46,1,0,0,0,48,47,1,0,0,0,49,5,1,0,0,0,50,51,
5,33,0,0,51,52,3,20,10,0,52,55,3,18,9,0,53,54,5,34,0,0,54,56,3,8,4,0,55,
53,1,0,0,0,55,56,1,0,0,0,56,7,1,0,0,0,57,60,3,18,9,0,58,60,3,6,3,0,59,57,
1,0,0,0,59,58,1,0,0,0,60,9,1,0,0,0,61,62,5,38,0,0,62,63,5,1,0,0,63,64,3,
20,10,0,64,11,1,0,0,0,65,66,5,38,0,0,66,67,5,1,0,0,67,68,3,20,10,0,68,13,
1,0,0,0,69,70,7,0,0,0,70,15,1,0,0,0,71,72,5,32,0,0,72,73,3,18,9,0,73,17,
1,0,0,0,74,76,3,2,1,0,75,74,1,0,0,0,76,79,1,0,0,0,77,75,1,0,0,0,77,78,1,
0,0,0,78,81,1,0,0,0,79,77,1,0,0,0,80,82,3,20,10,0,81,80,1,0,0,0,81,82,1,
0,0,0,82,83,1,0,0,0,83,84,5,35,0,0,84,19,1,0,0,0,85,86,6,10,-1,0,86,94,3,
30,15,0,87,94,5,38,0,0,88,94,3,12,6,0,89,90,5,6,0,0,90,91,3,20,10,0,91,92,
5,7,0,0,92,94,1,0,0,0,93,85,1,0,0,0,93,87,1,0,0,0,93,88,1,0,0,0,93,89,1,
0,0,0,94,113,1,0,0,0,95,96,10,4,0,0,96,97,3,22,11,0,97,98,3,20,10,5,98,112,
1,0,0,0,99,100,10,3,0,0,100,101,3,24,12,0,101,102,3,20,10,4,102,112,1,0,
0,0,103,104,10,2,0,0,104,105,3,26,13,0,105,106,3,20,10,3,106,112,1,0,0,0,
107,108,10,1,0,0,108,109,3,28,14,0,109,110,3,20,10,2,110,112,1,0,0,0,111,
95,1,0,0,0,111,99,1,0,0,0,111,103,1,0,0,0,111,107,1,0,0,0,112,115,1,0,0,
0,113,111,1,0,0,0,113,114,1,0,0,0,114,21,1,0,0,0,115,113,1,0,0,0,116,117,
7,1,0,0,117,23,1,0,0,0,118,119,7,2,0,0,119,25,1,0,0,0,120,121,7,3,0,0,121,
27,1,0,0,0,122,123,5,30,0,0,123,29,1,0,0,0,124,125,7,4,0,0,125,31,1,0,0,
0,10,35,44,48,55,59,77,81,93,111,113];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class gameGrammarParser extends antlr4.Parser {

    static grammarFileName = "gameGrammar.g4";
    static literalNames = [ null, "'='", "'eik'", "'sok'", "'kairen'", "'desinen'", 
                            "'('", "')'", "'*'", "'/'", "'%'", "'sudauginti'", 
                            "'padalinti'", "'+'", "'-'", "'prideti'", "'sudeti'", 
                            "'atimti'", "'=='", "'!='", "'>'", "'<'", "'>='", 
                            "'<='", "'lygu'", "'nelygu'", "'daugiau'", "'maziau'", 
                            "'daugiaulygu'", "'maziaulygu'", null, null, 
                            "'kartok'", "'jeigu'", "'jeigu ne'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "BOOL_OPERATORS", 
                             "BOOL", "LOOP", "IF", "ELSEIF", "ENDOFBLOCK", 
                             "INTEGER", "Whitespace", "IDENTIFIER" ];
    static ruleNames = [ "program", "line", "statement", "ifBlock", "elseIfBlock", 
                         "assingment", "functionCall", "action", "loop", 
                         "block", "expression", "multOp", "addOp", "compareOp", 
                         "boolOp", "constant" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = gameGrammarParser.ruleNames;
        this.literalNames = gameGrammarParser.literalNames;
        this.symbolicNames = gameGrammarParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 10:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 4);
    		case 1:
    			return this.precpred(this._ctx, 3);
    		case 2:
    			return this.precpred(this._ctx, 2);
    		case 3:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, gameGrammarParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 60) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 67) !== 0)) {
	            this.state = 32;
	            this.line();
	            this.state = 37;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 38;
	        this.match(gameGrammarParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	line() {
	    let localctx = new LineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, gameGrammarParser.RULE_line);
	    try {
	        this.state = 44;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 38:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 40;
	            this.statement();
	            break;
	        case 2:
	        case 3:
	        case 4:
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 41;
	            this.action();
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 42;
	            this.loop();
	            break;
	        case 33:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 43;
	            this.ifBlock();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, gameGrammarParser.RULE_statement);
	    try {
	        this.state = 48;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 46;
	            this.assingment();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 47;
	            this.functionCall();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifBlock() {
	    let localctx = new IfBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, gameGrammarParser.RULE_ifBlock);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.match(gameGrammarParser.IF);
	        this.state = 51;
	        this.expression(0);
	        this.state = 52;
	        this.block();
	        this.state = 55;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===34) {
	            this.state = 53;
	            this.match(gameGrammarParser.ELSEIF);
	            this.state = 54;
	            this.elseIfBlock();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elseIfBlock() {
	    let localctx = new ElseIfBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, gameGrammarParser.RULE_elseIfBlock);
	    try {
	        this.state = 59;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 57;
	            this.block();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 58;
	            this.ifBlock();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assingment() {
	    let localctx = new AssingmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, gameGrammarParser.RULE_assingment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.match(gameGrammarParser.IDENTIFIER);
	        this.state = 62;
	        this.match(gameGrammarParser.T__0);
	        this.state = 63;
	        this.expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionCall() {
	    let localctx = new FunctionCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, gameGrammarParser.RULE_functionCall);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(gameGrammarParser.IDENTIFIER);
	        this.state = 66;
	        this.match(gameGrammarParser.T__0);
	        this.state = 67;
	        this.expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	action() {
	    let localctx = new ActionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, gameGrammarParser.RULE_action);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 60) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	loop() {
	    let localctx = new LoopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, gameGrammarParser.RULE_loop);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.match(gameGrammarParser.LOOP);
	        this.state = 72;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, gameGrammarParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 74;
	                this.line(); 
	            }
	            this.state = 79;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
	        }

	        this.state = 81;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6 || _la===31 || _la===36 || _la===38) {
	            this.state = 80;
	            this.expression(0);
	        }

	        this.state = 83;
	        this.match(gameGrammarParser.ENDOFBLOCK);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 20;
	    this.enterRecursionRule(localctx, 20, gameGrammarParser.RULE_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ConstantExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 86;
	            this.constant();
	            break;

	        case 2:
	            localctx = new IdentifierExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 87;
	            this.match(gameGrammarParser.IDENTIFIER);
	            break;

	        case 3:
	            localctx = new FunctionCallExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 88;
	            this.functionCall();
	            break;

	        case 4:
	            localctx = new ParenthesizedExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 89;
	            this.match(gameGrammarParser.T__5);
	            this.state = 90;
	            this.expression(0);
	            this.state = 91;
	            this.match(gameGrammarParser.T__6);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 113;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 111;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MultiplicativeExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, gameGrammarParser.RULE_expression);
	                    this.state = 95;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 96;
	                    this.multOp();
	                    this.state = 97;
	                    this.expression(5);
	                    break;

	                case 2:
	                    localctx = new AdditiveExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, gameGrammarParser.RULE_expression);
	                    this.state = 99;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 100;
	                    this.addOp();
	                    this.state = 101;
	                    this.expression(4);
	                    break;

	                case 3:
	                    localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, gameGrammarParser.RULE_expression);
	                    this.state = 103;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 104;
	                    this.compareOp();
	                    this.state = 105;
	                    this.expression(3);
	                    break;

	                case 4:
	                    localctx = new BooleanExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, gameGrammarParser.RULE_expression);
	                    this.state = 107;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 108;
	                    this.boolOp();
	                    this.state = 109;
	                    this.expression(2);
	                    break;

	                } 
	            }
	            this.state = 115;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	multOp() {
	    let localctx = new MultOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, gameGrammarParser.RULE_multOp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 116;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 7936) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	addOp() {
	    let localctx = new AddOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, gameGrammarParser.RULE_addOp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 118;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 253952) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	compareOp() {
	    let localctx = new CompareOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, gameGrammarParser.RULE_compareOp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1073479680) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	boolOp() {
	    let localctx = new BoolOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, gameGrammarParser.RULE_boolOp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.match(gameGrammarParser.BOOL_OPERATORS);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	constant() {
	    let localctx = new ConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, gameGrammarParser.RULE_constant);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 124;
	        _la = this._input.LA(1);
	        if(!(_la===31 || _la===36)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

gameGrammarParser.EOF = antlr4.Token.EOF;
gameGrammarParser.T__0 = 1;
gameGrammarParser.T__1 = 2;
gameGrammarParser.T__2 = 3;
gameGrammarParser.T__3 = 4;
gameGrammarParser.T__4 = 5;
gameGrammarParser.T__5 = 6;
gameGrammarParser.T__6 = 7;
gameGrammarParser.T__7 = 8;
gameGrammarParser.T__8 = 9;
gameGrammarParser.T__9 = 10;
gameGrammarParser.T__10 = 11;
gameGrammarParser.T__11 = 12;
gameGrammarParser.T__12 = 13;
gameGrammarParser.T__13 = 14;
gameGrammarParser.T__14 = 15;
gameGrammarParser.T__15 = 16;
gameGrammarParser.T__16 = 17;
gameGrammarParser.T__17 = 18;
gameGrammarParser.T__18 = 19;
gameGrammarParser.T__19 = 20;
gameGrammarParser.T__20 = 21;
gameGrammarParser.T__21 = 22;
gameGrammarParser.T__22 = 23;
gameGrammarParser.T__23 = 24;
gameGrammarParser.T__24 = 25;
gameGrammarParser.T__25 = 26;
gameGrammarParser.T__26 = 27;
gameGrammarParser.T__27 = 28;
gameGrammarParser.T__28 = 29;
gameGrammarParser.BOOL_OPERATORS = 30;
gameGrammarParser.BOOL = 31;
gameGrammarParser.LOOP = 32;
gameGrammarParser.IF = 33;
gameGrammarParser.ELSEIF = 34;
gameGrammarParser.ENDOFBLOCK = 35;
gameGrammarParser.INTEGER = 36;
gameGrammarParser.Whitespace = 37;
gameGrammarParser.IDENTIFIER = 38;

gameGrammarParser.RULE_program = 0;
gameGrammarParser.RULE_line = 1;
gameGrammarParser.RULE_statement = 2;
gameGrammarParser.RULE_ifBlock = 3;
gameGrammarParser.RULE_elseIfBlock = 4;
gameGrammarParser.RULE_assingment = 5;
gameGrammarParser.RULE_functionCall = 6;
gameGrammarParser.RULE_action = 7;
gameGrammarParser.RULE_loop = 8;
gameGrammarParser.RULE_block = 9;
gameGrammarParser.RULE_expression = 10;
gameGrammarParser.RULE_multOp = 11;
gameGrammarParser.RULE_addOp = 12;
gameGrammarParser.RULE_compareOp = 13;
gameGrammarParser.RULE_boolOp = 14;
gameGrammarParser.RULE_constant = 15;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gameGrammarParser.RULE_program;
    }

	EOF() {
	    return this.getToken(gameGrammarParser.EOF, 0);
	};

	line = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineContext);
	    } else {
	        return this.getTypedRuleContext(LineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gameGrammarVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gameGrammarParser.RULE_line;
    }

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	action() {
	    return this.getTypedRuleContext(ActionContext,0);
	};

	loop() {
	    return this.getTypedRuleContext(LoopContext,0);
	};

	ifBlock() {
	    return this.getTypedRuleContext(IfBlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.exitLine(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gameGrammarVisitor ) {
	        return visitor.visitLine(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gameGrammarParser.RULE_statement;
    }

	assingment() {
	    return this.getTypedRuleContext(AssingmentContext,0);
	};

	functionCall() {
	    return this.getTypedRuleContext(FunctionCallContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gameGrammarVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gameGrammarParser.RULE_ifBlock;
    }

	IF() {
	    return this.getToken(gameGrammarParser.IF, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	ELSEIF() {
	    return this.getToken(gameGrammarParser.ELSEIF, 0);
	};

	elseIfBlock() {
	    return this.getTypedRuleContext(ElseIfBlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.enterIfBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.exitIfBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gameGrammarVisitor ) {
	        return visitor.visitIfBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElseIfBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gameGrammarParser.RULE_elseIfBlock;
    }

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	ifBlock() {
	    return this.getTypedRuleContext(IfBlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.enterElseIfBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.exitElseIfBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gameGrammarVisitor ) {
	        return visitor.visitElseIfBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssingmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gameGrammarParser.RULE_assingment;
    }

	IDENTIFIER() {
	    return this.getToken(gameGrammarParser.IDENTIFIER, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.enterAssingment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.exitAssingment(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gameGrammarVisitor ) {
	        return visitor.visitAssingment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gameGrammarParser.RULE_functionCall;
    }

	IDENTIFIER() {
	    return this.getToken(gameGrammarParser.IDENTIFIER, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.enterFunctionCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.exitFunctionCall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gameGrammarVisitor ) {
	        return visitor.visitFunctionCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ActionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gameGrammarParser.RULE_action;
    }


	enterRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.enterAction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.exitAction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gameGrammarVisitor ) {
	        return visitor.visitAction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LoopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gameGrammarParser.RULE_loop;
    }

	LOOP() {
	    return this.getToken(gameGrammarParser.LOOP, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.enterLoop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.exitLoop(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gameGrammarVisitor ) {
	        return visitor.visitLoop(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gameGrammarParser.RULE_block;
    }

	ENDOFBLOCK() {
	    return this.getToken(gameGrammarParser.ENDOFBLOCK, 0);
	};

	line = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineContext);
	    } else {
	        return this.getTypedRuleContext(LineContext,i);
	    }
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.exitBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gameGrammarVisitor ) {
	        return visitor.visitBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gameGrammarParser.RULE_expression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ParenthesizedExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.enterParenthesizedExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.exitParenthesizedExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gameGrammarVisitor ) {
	        return visitor.visitParenthesizedExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

gameGrammarParser.ParenthesizedExpressionContext = ParenthesizedExpressionContext;

class ConstantExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.enterConstantExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.exitConstantExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gameGrammarVisitor ) {
	        return visitor.visitConstantExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

gameGrammarParser.ConstantExpressionContext = ConstantExpressionContext;

class AdditiveExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	addOp() {
	    return this.getTypedRuleContext(AddOpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.enterAdditiveExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.exitAdditiveExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gameGrammarVisitor ) {
	        return visitor.visitAdditiveExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

gameGrammarParser.AdditiveExpressionContext = AdditiveExpressionContext;

class IdentifierExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IDENTIFIER() {
	    return this.getToken(gameGrammarParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.enterIdentifierExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.exitIdentifierExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gameGrammarVisitor ) {
	        return visitor.visitIdentifierExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

gameGrammarParser.IdentifierExpressionContext = IdentifierExpressionContext;

class FunctionCallExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	functionCall() {
	    return this.getTypedRuleContext(FunctionCallContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.enterFunctionCallExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.exitFunctionCallExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gameGrammarVisitor ) {
	        return visitor.visitFunctionCallExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

gameGrammarParser.FunctionCallExpressionContext = FunctionCallExpressionContext;

class ComparisonExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	compareOp() {
	    return this.getTypedRuleContext(CompareOpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.enterComparisonExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.exitComparisonExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gameGrammarVisitor ) {
	        return visitor.visitComparisonExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

gameGrammarParser.ComparisonExpressionContext = ComparisonExpressionContext;

class MultiplicativeExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	multOp() {
	    return this.getTypedRuleContext(MultOpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.enterMultiplicativeExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.exitMultiplicativeExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gameGrammarVisitor ) {
	        return visitor.visitMultiplicativeExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

gameGrammarParser.MultiplicativeExpressionContext = MultiplicativeExpressionContext;

class BooleanExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	boolOp() {
	    return this.getTypedRuleContext(BoolOpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.enterBooleanExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.exitBooleanExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gameGrammarVisitor ) {
	        return visitor.visitBooleanExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

gameGrammarParser.BooleanExpressionContext = BooleanExpressionContext;

class MultOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gameGrammarParser.RULE_multOp;
    }


	enterRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.enterMultOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.exitMultOp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gameGrammarVisitor ) {
	        return visitor.visitMultOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AddOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gameGrammarParser.RULE_addOp;
    }


	enterRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.enterAddOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.exitAddOp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gameGrammarVisitor ) {
	        return visitor.visitAddOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CompareOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gameGrammarParser.RULE_compareOp;
    }


	enterRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.enterCompareOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.exitCompareOp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gameGrammarVisitor ) {
	        return visitor.visitCompareOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BoolOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gameGrammarParser.RULE_boolOp;
    }

	BOOL_OPERATORS() {
	    return this.getToken(gameGrammarParser.BOOL_OPERATORS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.enterBoolOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.exitBoolOp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gameGrammarVisitor ) {
	        return visitor.visitBoolOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConstantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gameGrammarParser.RULE_constant;
    }

	INTEGER() {
	    return this.getToken(gameGrammarParser.INTEGER, 0);
	};

	BOOL() {
	    return this.getToken(gameGrammarParser.BOOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.enterConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gameGrammarListener ) {
	        listener.exitConstant(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gameGrammarVisitor ) {
	        return visitor.visitConstant(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




gameGrammarParser.ProgramContext = ProgramContext; 
gameGrammarParser.LineContext = LineContext; 
gameGrammarParser.StatementContext = StatementContext; 
gameGrammarParser.IfBlockContext = IfBlockContext; 
gameGrammarParser.ElseIfBlockContext = ElseIfBlockContext; 
gameGrammarParser.AssingmentContext = AssingmentContext; 
gameGrammarParser.FunctionCallContext = FunctionCallContext; 
gameGrammarParser.ActionContext = ActionContext; 
gameGrammarParser.LoopContext = LoopContext; 
gameGrammarParser.BlockContext = BlockContext; 
gameGrammarParser.ExpressionContext = ExpressionContext; 
gameGrammarParser.MultOpContext = MultOpContext; 
gameGrammarParser.AddOpContext = AddOpContext; 
gameGrammarParser.CompareOpContext = CompareOpContext; 
gameGrammarParser.BoolOpContext = BoolOpContext; 
gameGrammarParser.ConstantContext = ConstantContext; 
