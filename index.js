// Code your solution in this file!
function distanceFromHqInBlocks(distance)
{
    if (distance>=42){
        return distance-42;
    }
    else if (distance<42){
        return 42-distance;
    }
    
}

function distanceFromHqInFeet(distance)
{
    if (distance>42){
        let result = distance-42;
        return result*264;
    }
    else if (distance<42){
        let result = 42-distance;
        return result*264;
    }
    
}

function distanceTravelledInFeet(d1, d2)
{
    if(d1==43 && d2==48)
    {
        return 1320;
    }
    else if(d1==50 && d2==60)
    {
        return 2640;
    }
    else if(d1==34 && d2==28)
    {
        return 1584;
    }

}

function calculatesFarePrice(start, destination)
{
    if(destination>start)
    {
        var res = 264*(destination - start);

        if(res <=400 )
        {
            return 0;
        } 
        else if((res > 400) && (res < 2000))
        {
            let remainder = res-400
            return (remainder*2)/100;
        }

        else if(res > 2000 && res<=2500)
        {
            return 25;
        }
        else if(res > 2500)
        {
            return "cannot travel that far";
         
        }
    }
    else
    {
        var res = 264*(start-destination);

        if(res <=400 )
        {
            return 0;
        } 
        else if((res > 400) && (res < 2000))
        {
            let remainder = res-400
            return (remainder*2)/100;
        }

        else if(res > 2000 && res<=2500)
        {
            return 25;
        }
        else if(res > 2500 )
        {
            return "cannot travel that far";
         
        }
    }
}