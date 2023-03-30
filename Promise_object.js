// A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function. 
// Use : promise_obj.then(successCallback,failureCallback)
// the then() functio returns a new promise different from the original
// the arguments to then are optional and catch(failureCallback) is short for then(null, failureCallback)
// always return results, otherwise callbacks won't catch the result of a previous promise, if the previous handler started a promise but did not return it, there's no way to track its settlement anymore and the promise is siad t be "floating"
// it may be worse if we have race condition if the promise from the last handler is not returned, the next then handler will be called early, and any value it reads may be incomplete. Therefore, as a rule of thumb, whenever your operation encounters a promise, return it and defer its handling to the next then handler.
// Chaining after a catch, it is possible to chain after a catch, which is useful to accomplish new actions even after an action failed in the chain.

new Promise((resolve, reject) => {
    console.log("Initial");
  
    resolve();
  })
    .then(() => {
      throw new Error("Something failed");
  
      console.log("Do this");
    })
    .catch(() => {
      console.error("Do that");
    })
    .then(() => {
      console.log("Do this, no matter what happened before");
    });


    // A Promise is in one of these states:

    // pending: initial state, neither fulfilled nor rejected.
    // fulfilled: meaning that the operation was completed successfully.
    // rejected: meaning that the operation failed.

    // Promise() constructor : used to wrap functions that do not already support promises.
        // Syntax: new Promise(executor) :executor to be executed by the constructor. it receives two functions as parameter: resolveFunction and rejectFunction( an Error instance) , the executor return value is ignored, if an error is thrown in the executor the promise is rejected
            // resolveFunc and rejectFunc are generated at time of generation of new Promise object
            // executor is called synchronously
        // Promise() can only be constructed with new. otherwise cause TypeError
        // Return value: when called via new, the Promise constructor returns a promise object.




    //Promise concurrency
    // The Promise class offers four static methods to facilitate async task concurrency:

    //1 Promise.all()
    // Fulfills when all of the promises fulfill; rejects when any of the promises rejects.
        // static method, takes an iterable of promises as input and returns a single Promise.This returned promise fulfills when all of the input's promises fulfill with an array of the fulfillment values.It rejects when any of the input's promises rejects, with this first rejection reason.
        const promise1 = Promise.resolve(3);
        const promise2 = 42;
        const promise3 = new Promise((resolve, reject) => {
        setTimeout(resolve, 100, 'foo');
        });

        Promise.all([promise1, promise2, promise3]).then((values) => {
        console.log(values);
        });
        // Expected output: Array [3, 42, "foo"]

            // returned promise is :
                // already fulfilled if the iterable passed in empty.
                // asynchronously fulfilled when all the promises in the given iterable fulfill. fullfillment value is an array of fulfillment values, in the order of the promises passed, regardless of completion order. 
                    //if iterable contains no pending promises the returned prmoise is still asyn
                // asynchronously rejected, when any of the promises in the given iterable rejects.


    //2 Promise.allSettled()
    // Fulfills when all promises settle.
        // takes an iterable of promises as input and returns a single Promise. Theis reutrned promise fulfills when all of the input's promises settle
        const promise4 = Promise.resolve(3);
        const promise5 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
        const promises = [promise4, promise5];
        
        Promise.allSettled(promises).
        then((results) => results.forEach((result) => console.log(result.status)));
        
        // Expected output:
        // "fulfilled"
        // "rejected"
        
        // return a Promise that is:
            // already fulfilled, if the iterable passed in empty.
            // asynchronously fulfilled, when all promises in the given iterable have settled(either fulfilled or rejected). the fulfillment value is an array of objects each has the following properties:
                // status : a string either "fulfilled" or "rejected"
                // value : only present if status is "fulfilled"
                // reason : only present if status is "rejected"

    //3 Promise.any()
    // Fulfills when any of the promises fulfills; rejects when all of the promises reject.
        // static method takes an iterable of promises as input and returns a single Promise, this returned promise fulfills when any of the input's promises fulfills, with the first fulfillment value. It rejects when all of the input's promises reject( including when an empty iterable is passed), with an AggregateError containing an array of rejection reasons.

        // the retruned Promise is:
            // Aready rejected, if the iterable passed is emptyl
            // Async fulfilled, when any of the promises in the given iterable fulfills. The fulfillment value is the fulfillment value of the first promise that was fulfilled.
            // Async rejected, when all the promises in given iterable reject, give AggregateError containing an array or rejction reasons in its errors property, in order of the promises passed.
        
        // It does not wait for the other promises to complete once it finds one.
        // unlike Promise.all(return array of fulfillment value) give only one fulfllment value

    //4 Promise.race()
    // Settles when any of the promises settles. In other words, fulfills when any of the promises fulfills; rejects when any of the promises rejects.
        // Static method takes an iterable of promises as input and returns a single Promise. This returned promise settles with the eventual statue of the first promise that settles.
        const promise7 = new Promise((resolve, reject) => {
            setTimeout(resolve, 500, 'one');
          });
          
          const promise8 = new Promise((resolve, reject) => {
            setTimeout(resolve, 100, 'two');
          });
          
          Promise.race([promise7, promise8]).then((value) => {
            console.log(value);
            // Both resolve, but promise2 is faster
          });
          // Expected output: "two"
          
        //   it return a promise that asynchronously settles with the eventual state of the first promise in the iterable to settles 
        // the returned promise remains pending foreever if the iterable passed is empty. 
        // if the iterable passed is non-empty but containes no pending promises, the returned promise is still asynchronously settled.




    // Promise.reject()
        //   static method returns a Promise object that is rejectd with a given reason.
        function resolved(result) {
            console.log('Resolved');
          }
          
          function rejected(result) {
            console.error(result);
          }
          
          Promise.reject(new Error('fail')).then(resolved, rejected);
          // Expected output: Error: fail
    
    // Promise.resolve()
        //   static method "resolves" a given value to a Promise. If the value is a promise, that promise is returned; if the value is a thenable Promise.resolve() will call the then() method with two callbacks it prepared
        const promise9 = Promise.resolve(123);

        promise9.then((value) => {
        console.log(value);
        // Expected output: 123
        });
        // This function flattens nested layers of promise-like objects (e.g. a promise that fulfills to a promise that fulfills to something) into a single layer — a promise that fulfills to a non-thenable value.

    // Promise.prototype.catch()
        // schedules a function to be called when the promsie is rejected. 
        // it is shorcut for Promise.prototype.then(undefined, onRejected)
        const promise10 = new Promise((resolve, reject) => {
            throw new Error('Uh-oh!');
          });
          
          promise10.catch((error) => {
            console.error(error);
          });
          // Expected output: Error: Uh-oh!
        //   it returns a new promise, which is always pending when returned

        // Throwing an error will call the catch() method most of the time:

        const p1 = new Promise((resolve, reject) => {
          throw new Error("Uh-oh!");
        });
        
        p1.catch((e) => {
          console.error(e); // "Uh-oh!"
        });
        
        // Errors thrown inside asynchronous functions will act like uncaught errors:
        const p2 = new Promise((resolve, reject) => {
          setTimeout(() => {
            throw new Error("Uncaught Exception!");
          }, 1000);
        });
        
        p2.catch((e) => {
          console.error(e); // This is never called
        });


        // Errors thrown after resolve is called will be silenced:
        
        const p3 = new Promise((resolve, reject) => {
          resolve();
          throw new Error("Silenced Exception!");
        });
        
        p3.catch((e) => {
          console.error(e); // This is never called
        });
    
    // Promise.prototype.then()
        // take two arguments: callback functions for the fulfilled and rejected cases of the Promise. It immediately returns an equivalent Promsie object allow us to chain calls to other promise methods

    // Promise.prototype.finally()
        // schedules a functio to be called when the promise is settled. It immediately returns an equivalent Promise object, allowing us to chain calls to other methods.

        // Syntax
        // finally(onFinally)

        // finally(() => {
        // // Code that will run after promise is settled (fulfilled or rejected)
        // })

        // finally() method is very similar to calling then(onFinally, onFinally) with some differences
