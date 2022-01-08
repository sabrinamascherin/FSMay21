function CalculateBMI(weight, height) {
    try {
        return (weight / Math.pow(height, 2));
    }
    catch
    {
        return -1;
    }
}

function ValideInput(input, name){
    if(input.length == 0){
        alert(`Please enter ${name}`);
        return false;
    }
    else{
        if(name == "height" && input == 0){
            alert("Height cannot be '0'.");
            return false;
        }
    }

    return true;
}

function BmiDescription(bmi) {

    if (bmi == -1 || bmi == Infinity)
        return "Invalid calculation."

    var bmiDisplay = `BMI: ${bmi.toFixed()}`;

    if (bmi <= 18.5)
        return `${bmiDisplay} Under weight`;
    else if (bmi <= 24.9)
        return `${bmiDisplay} Normal weight`;
    else if (bmi <= 29.9)
        return `${bmiDisplay} Overweight`;
    else if (bmi <= 34.9)
        return `${bmiDisplay} Obese`;
    else if(bmi > 34.9)
        return `${bmiDisplay} Extremly Obese`;
    else
        return "Undefined";
}

function DisplayResult(result){
    $("#resultHeading").html("Your Results:");
    $("#result").html(result);
}

$(document).ready(function () {
    $("#calculate").click(function () {

        var weight = $("#weight").val();
        var height = $("#height").val();
        if(!ValideInput(weight, "weight"))
            return;

        if(!ValideInput(height, "height"))
            return;

        var bmi = CalculateBMI(weight, height);

        var bmiDescription = BmiDescription(bmi);
        DisplayResult(bmiDescription);

        ChangeStyle(bmi);

        ToggleImage(bmiDescription, bmi);
    });

    $("#reset").click(function () {
        Reset()
    });
});