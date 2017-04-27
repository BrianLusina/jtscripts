class Proverb{
    constructor(){
        this.last = arguments[arguments.length - 1];
        this.chain = Array.from(arguments);
        this.options = {};

        if(typeof this.last == "object" && this.last.hasOwnProperty("qualifier")){
            this.options = this.chain.pop();
        }

        this.qualifier = this.options.qualifier ? this.options.qualifier + " " : "";
    }

    /**
     * 
     */
    toString(){
        return this.eventChain + this.conclustion;
    }

    eventChain(){
        return this.causeAndEffects.map(function(entry){
            return "For want of a " + entry.cause + " the "  + entry.effect + " was lost.\n";
        }).join("");
    }

    causeAndEffects(){
        return this.chain.reduce(function(array, event, index){
            if(index < this.chain.length - 1){
                array.push({ cause: event, effect: this.chain[index + 1] });
            }
            return array;
        }, []);
    }

    conclusion(){
        return "And all for the want of a " + this.qualifier + this.chain[0] + ".";
    }
}

module.exports = Proverb;
