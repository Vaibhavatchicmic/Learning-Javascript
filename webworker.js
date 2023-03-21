//A webworker is a JS running in background without affecting the performace of the page

// first we need to check the web worker support
if (typeof(Worker) !== "undefined") {
    // Yes! Web worker support!
    // Some code.....
  } else {
    // Sorry! No Web Worker support..
  }

//create a web worker file
    // has call to postMessage() method which is used to post a message back to the HTML page.

// now we need to call it from our js script of HTML
//create a new web worker object
w= new Worker("worker.js");
//now we can send and receive messages from the web worker
w.onmessage = function(event){
    document.getElementById("result").innerHTML = event.data;
  };
//terminate a web worker 
w.terminate()