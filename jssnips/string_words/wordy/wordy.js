class WordProblem{
    constructor(question){
        this.question = question || "";
        
        this.BINARY_OPERATORS = {
            'plus':          function(l, r) { return l + r; },
            'minus':         function(l, r) { return l - r; },
            'multiplied by': function(l, r) { return l * r; },
            'divided by':    function(l, r) { return l / r; }
        };
        
        this.operators = Object.keys(this.BINARY_OPERATORS);

        this.match = this.question.match(this.pattern());
    }

    /**
     * Computes the answer of the question
     */
    answer(){
        if(this.match === null){
            throw new ArgumentError("I don't understand the question");
        }else{
            return this.evaluate();
        }
    }

    /**
     * Evaluates the arithmetic if it is valid
     */
    evaluate(){
        var out = 0, m = this.match;

        if (m[1] !== undefined && m[2] !== undefined && m[3] !== undefined) {
            out = this.operate(m[2], m[1], m[3]);
        }

        if (m[4] !== undefined && m[5] !== undefined) {
            out = this.operate(m[4], out, m[5]);
        }

        return out;
    }

    /**
     * Performs an arithmetic operation on the given numbers
     * @param {Function} operation to perform on the numbers
     * @param {Number} l left number
     * @param {Number} r right number
     * @returns{Number} result of operation
     */
   operate(operation, l, r) {
       var fn = this.BINARY_OPERATORS[operation] || function() { return 0; };
       return fn(Number(l), Number(r));
    };

    /**
     * Custom regex pattern, used to check if this question is a valid one
     * @return{Regex} object
     */
    pattern(){
        let expression = "";
        let operations = ` (${this.operators.join('|')}) `;

        expression += '(?:what is ([-+]?[\\d]+)';
        expression += operations;
        expression += '([-+]?[\\d]+)(?:';
        expression += operations;
        expression += '([-+]?[\\d]+))?)';

        return new RegExp(expression, "i");
    }

}

class ArgumentError extends Error{
    constructor(){
        super();
    }
}

exports.WordProblem   = WordProblem;
exports.ArgumentError = ArgumentError;
