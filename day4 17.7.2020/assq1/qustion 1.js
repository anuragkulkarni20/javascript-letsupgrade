for (x=1; x <= 100; x++){
    if( x % 3 == 0 ){
        //document. write("fizz")
        console.log("fizz")   
    }
    if( x % 5 == 0 ){
        //document. write("buzz")
        console.log("pong")
    }
    if( ( x % 3 != 0 ) && ( x % 5 != 0 ) ){
        //document.write('fizzbuzz')
        console.log("fizzbuzz")
    }
}