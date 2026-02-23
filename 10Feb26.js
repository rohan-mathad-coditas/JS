const range = [
    {
        min:30,
        max:70
    },
    {
        min:40,
        max:80
    },
    {
        min:10,
        max:50
    },
    {
        min:20,
        max:80
    },
    {
        min:60,
        max:120
    }

]

const calculateAverage = (range) => {
    
    let avgMin = 0;
    let avgMax = 0;
    let avgAvg = []

    for(let key of range){
        avgMin += range[key].min;
        avgMax += range[key].max;
        avgAvg.push((range[key].min + range[key].max) / range.length[key].length)
    }

    let finalAvreageMin = avgMin/range.length;
    let finalAverageMax = avgMax/range.length;
    return [finalAverageMax, finalAvreageMin, avgAvg];
}

const calculateNewAverage = (range) => {

    let avg_min = 0;
    let avg_max = 0;
    let avg_avg = 0;

    const avgResult = range.reduce((accum, curr) => {
        avg_min+=curr.min;
        avg_max+=curr.max;
        // avg_avg = ((curr.min + curr.max)/2);
        return (curr.min + curr.max)/2 +  accum;
    })

    return [(avg_min/range.length), (avg_max/range.length), (avgResult/range.length)];
}

calculateNewAverage(range);