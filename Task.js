// 3 drinkers - alcohol
// 2nd teensger - beer
// 1st kids - milk



if(PersonAge >= 30){
    console.log(" Server Alcohol")
} else if( PersonAge < 30 && PersonAge <18){
    console.log(" Serve Beer");
} else  {
    console.log(" Serve Milk");
}


const PersonAge = 30;
const AlcoholConsumptionAge = 25;

const ServeDrink = PersonAge >= AlcoholConsumptionAge ? "serve alcohol" : 
                PersonAge < AlcoholConsumptionAge && PersonAge > 18 ? " serve beer" : 
                "serve milk";   

console.log(ServeDrink); 
// Output - serve alcohol 


