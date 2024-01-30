//the key word C is for - Celsius
//the key word F is for - Fahrenheit
//the key word K is for - Kelvin

let from= prompt(" In which metric is the temperature you are converting? \n C - Celsius \n F - Fahrenheit \n K - Kelvin").toUpperCase();  //select the metrics in which the temperature you are about to conver is in  
let temperature= Number(prompt(" Please input the temperature you want to convert"));
let convertto= prompt(" To which metric would you like to convert the temperature? \n C - Celsius \n F - Fahrenheit \n K - Kelvin").toUpperCase(); //select the metrics you want your  temperature to be in 

if (from == "C" && convertto == "F")   //when changing from C to F
{
   CF = temperature * 9/5 + 32;
   console.log(temperature + "°C" + " is " + CF+ " F") ;
}
else if (from == "F" && convertto == "C") //when changing from F to C
{
    FC = (temperature -32) * 5/9;
   console.log(temperature + "F "+ "is "+ FC+ "°C ") ;//when changing from F to C
}
else if (from == "C" && convertto == "K")
{
    CK= (temperature + 273.15)  ;
   console.log(temperature + "°C"+ "is "+ CK+ " K"); //when changing from C to K
  
}
else if (from == "K" && convertto == "C")
{
    KC= (temperature - 273.15);
   console.log(temperature + "K "+ "is " + KC+ "°C") ;//when changing from K to C 
}
else if (from == "F" && convertto == "K")
{
    FK = (temperature + 459.67) * (5/9);
   console.log(temperature + "F " + "is " +FK+ " K") //when changing from C to F
}
else if (from == "K" && convertto == "F")
{
    KF= temperature * 9/5 - 459.67;
   console.log(temperature + "K " + "is " + KF+ " F") //when changing from C to F
}

