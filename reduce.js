//reduce practice

//finding Min/Max

const nums = [100, 4500, 312000, 5]

const newNums = nums.reduce(function(acc, curr, index){
    // console.log(index)
    // console.log(acc)

    //read the tertiary function as
    //if curr is greater than acc then curr else acc
    //the 0 at the end says to start at 0
    //remove it and it will return 0 for MIN if you
    //change function check to curr < acc
    return (curr > acc) ? curr : acc
}, 0)

console.log(newNums)