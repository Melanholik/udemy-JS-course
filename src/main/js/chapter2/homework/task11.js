const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (arr.length > 0) {
        return `Семья состоит из: ${arr.join(" ")}`;
    } else {
        return "Семья пуста";
    }
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    for (const city of arr) {
        console.log(city.toLowerCase());
    }
}

console.log(showFamily(family));
standardizeStrings(favoriteCities);