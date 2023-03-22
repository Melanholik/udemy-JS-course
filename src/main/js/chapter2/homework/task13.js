const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    const shops = data["shops"];
    let sum = 0;
    shops.forEach((element) => {
        sum += element.width * element.length * data.height * data.moneyPer1m3;
    });
    if (sum < data.budget) {
        return "Бюджета достаточно";
    }
    return "Бюджета недостаточно";
}

console.log(isBudgetEnough(shoppingMallData));