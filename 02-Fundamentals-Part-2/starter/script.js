
/*const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;



const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
    }
    else if (avgKoalas >= 2 * avgDolphins) {
        return `Koalas win (${avgDolphins} vs. ${avgKoalas})`;
    }
    else
        return `No team wins...`;
}

console.log(checkWinner(scoreDolphins, scoreKoalas));


const tip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    }
    return bill * 0.2;
};


const bills = [125, 555, 44];
const tips = [tip(bills[0]), tip(bills[1]), tip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return;
    }
};
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
    }
};

if (john.calcBMI() > mark.calcBMI()) {
    console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than Mark Miller's (${mark.BMI})`);
} else {
    console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than John Smith's (${john.BMI})`);
}*/
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i <= bills.length - 1; i++) {
    let temp = calcTip(bills[i]);
    tips.push(temp);
    totals.push(tips[i] + bills[i]);
}
console.log(tips);
console.log(totals);
const calcAverage = function (avg) {
    let sum = 0;
    for (let i = 0; i < avg.length - 1; i++) {
        sum += avg[i];
    }
    return sum / avg.length;
};

console.log(calcAverage(totals));

