function WeightedAve(){
    var s1 = parseInt(document.getElementById('m1').value);
    var s2 = parseInt(document.getElementById('m2').value);
    var s3 = parseInt(document.getElementById('m3').value);
    var s4 = parseInt(document.getElementById('m4').value);
    var s5 = parseInt(document.getElementById('m5').value);
    var s6 = parseInt(document.getElementById('m6').value);
    var s7 = parseInt(document.getElementById('m7').value);
    var num = s1+s2+s3+s4+s5+s6+s7;
    var num2 = 7;
    var grade = num/num2;

    if(s1>100 || s2>100 || s3>100 || s4>100 || s5>100 || s6>100 || s7>100){
        alert("DOES NOT EXIST")
        return;
    }
  
    if(grade >= 90 || grade == 100){
        alert("Your GWA is: " + grade.toFixed(2) + " PASSED" + "\n" + "OUTSTANDING");
    }
    else if(grade >= 85){
        alert("Your GWA is: " + grade.toFixed(2) + " PASSED" +  "\n" + "VERY SATISFACTORY");
    }
    else if(grade >= 80){
        alert("Your GWA is: " + grade.toFixed(2) + " PASSED" +  "\n" + "SATISFACTORY");
    }
    else if(grade >= 75){
        alert("Your GWA is: " + grade.toFixed(2) + " PASSED" +  "\n" + "FAIRLY SATISFACTORY");
    }
    else {
        alert("Your GWA is: " + grade.toFixed(2) + " FAILED" +  "\n" + "DID NOT MEET EXPECTATIONS");
    }
    
}