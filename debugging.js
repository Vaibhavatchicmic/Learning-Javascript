//Sources panel F12
// debugger; //to stop the code here

//common mistakes
    // we can't compare two two objects with ==
    //switch uses strict comparision

    //use "backslash" to break a statement in a string:
        // let x= "hello
        // World!"  //error

        let x= "hello \
World!"
        let y=`asdd
        dkdk`  //it will go to newline
        console.log(x,y)

    //this work fine
        let 
        n
        =
        10;
        console.log(n)

    // but this will return undefined
        function fun(){
            return
            n;
        }
        console.log(fun())


    //don't use narray with named indexes(called associative array/hashes) this will redefine the array to a standard object
    const p=[];
    p['1']=2;
    p['2']=5;
    p['3']=7;
    console.log(typeof p,p.length)
    console.log(p[0]);// will print undefined

    //not use trailing commas in ES5 JSON not use that


    //do this for checking that if an object exists by if (typeof myObj !== "undefined" && myObj !== null) 