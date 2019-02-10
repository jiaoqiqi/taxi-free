module.exports = function main(kilo, waitMin) {

    let money = 6 + waitMin * 0.25;

    money += (kilo<8) ? (kilo - 2) * 0.8: 4.8 + (kilo - 8) * 1.2;

    console.log(Math.round(money));
};
