const currentYear = new Date().getFullYear();

const findTheOldest = function (array) {
    return array.reduce((oldest, person) => getAge(person) > getAge(oldest) ? person : oldest);
};

function getAge(person) {
    if ('yearOfDeath' in person)
        return person.yearOfDeath - person.yearOfBirth;
    else   
        return currentYear - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;


// name: 'Carly',
//     yearOfBirth: 1942,
//         yearOfDeath: 1970,