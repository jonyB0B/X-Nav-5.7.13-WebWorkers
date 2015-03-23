//Usa self para llamar al worker
	self.onmessage = function(event) {
		console.log("Hemos recibido " + event.data);
		var n = 1;
		primelist = "";
		search: while (n<event.data) {
	    n += 1;
	    for (var i = 2; i <= Math.sqrt(n); i += 1)
	    if (n % i == 0)
        continue search;
    	// found a prime!
    	primelist += " " + n;
	}
	self.postMessage(primelist);
}


