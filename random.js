var getRandomNumber = function getRandomNumber(min, max){
    max = Math.floor(max);
    min = Math.ceil(min);
    return Math.floor(Math.random() * (max - min +1) + min);
};
