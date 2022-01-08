$(document).ready(function(){
    $('#orderButton').click(function(){
        let name = $("input[name=username]").val();
        let coffeeType= $("input[name=coffeeType]:checked").val();
        let extras= [];
        $("input[name=extras]:checked").each(function(){
            extras.push($(this).val());
        });

        let total = 0;

        //Add the coffee type cost
        if(coffeeType == "turkish"){
            total = total + 3;
        }else if(coffeeType == "american"){
            total = total + 5;
        }else if(coffeeType == "iced_latte"){
            total = total + 7;
        }

        //Add the extras cost
        for(let i = 0; i < extras.length; i++)
        {
            let extra = extras[i];

            if(extra == "extra_coffee"){
                total = total + 1.5;
            }else if(extra == "whipped_cream"){
                total = total + 3;
            }
        }

        //Print report
        let output = `Name: ${name} <br>`; //"Name: " + name + "<br>"
        output += `Total: $ ${total}`;

        $('#result').html(output);
    });
});