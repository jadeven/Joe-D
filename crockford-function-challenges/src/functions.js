function add (x,y) {
    return x+y 
}

function sub (x,y) {
    return x-y
}

function mul (x,y) {
    return x*y
}

function identity (stuff){
    return stuff
}

function identityf (stuff){
    return function (){
    return stuff
    }
}


function addf (x){
    return function (y){
    return x+ y 
    }
}

var thing = addf(3)
thing (2)


function liftf (fn){
    return function (x){
        return function (y){
            return fn(x,y)
        }
    }
}

function curry (fn, x){
    return function (y){
        return fn (x,y)
}
}

function twice (fn){
    return function (x){
       return fn (x,x)
    }
}

function reverse (fn){
    return function (x,y){
       return fn (y,x)
    }
}

function composeu (fn1,fn2){
    return function (x){

        //let functionOneOutput = fn1(x) //double = return x * 2  so if x = 5, return 10
        // let functionTwoOutput = fn2(functionOneOutput) //square = return functionOneOutput * functionOneOuput so if x = 5, it first gets doubled, and then it gets squared.
        // 5 * 2 = 10
        // 10 * 10 = 100 <-- this is now in functionTwoOutput
        return fn2(fn1(x))
}
}

function composeb (fn1,fn2){
    return function (x,y,z){ 


        return fn2(fn1(x,y), z)
}
}



function limit (fn,n){
    let counter =0

    return function (x,y){
        if (counter < n ){
            counter += 1 
            return fn(x,y)
        }
    }
}

function from (n){
    let counter = n 

    return function (){
        return counter++
    }
}

function to (fn, n){
    return function (){
        const val = fn()
        if (val < n){
        return val
    }
    }
}

function fromTo (start, stop) {
    return to (from (start), stop) 

    }

function element (xs, fn){
    fn = fn || from (0)
    return function (){
        return xs[fn()]
    }
}

function collect (fn, xs){
    return function () {
        const x = fn()

        if (x !== undefined){
        xs.push(x)
        return x 
        }
    }
}

function filter (gen, pred){
    return function (){
        while (true){
        const x = gen()
        if (pred(x) || x=== undefined){
            return x 
        }
    }
}
}

function concat (gen1, gen2){
    return function (){
        const x =gen1()
        if (x !== undefined) {
            return x 
        } 
            else {
                return gen2()
            }
        }
        }
function repeat (gen) {
    let a = gen()
    while (a !== undefined){
        a = gen()
    }

}

function gensymf (str) {
    const gen = from(1)
    return str + gen()

}

function counter (n){
    return {  
        'up' : function (){
            return ++n 
        },
        'down' : function (){
            return --n
        }
}
}

function revocable (fn){
    let count = 0
    return  {
        'invoke' : function (x,y){
            if(count > 0){
                return fn  (x,y)
            }
        else {
            return undefined
        }
    },
        
        'revoke' : function (){
            count++
        }
    }
}

function m (m1, m2){
return m
}

function addm (m1, m2){
    return {
        'm1' : m1
    },
    {
        'm2' : m2
    }
    return m1,m2
    }

function liftm (cbn, str){
    return {
        'm1' : m1
    },
    {
        'm2' : m2
    }
    return m1,m2
    }

function exp ([arr]){
    return function sae(arr){
        return 
    }
}

function liftg (fn){
    return function {
        return fn
    }
}

function arrayg (){
    return function (){
        return []
    }
}

function continuize (fn){
    return function() {
        fn(arr)
    }
}