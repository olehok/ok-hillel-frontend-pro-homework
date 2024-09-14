let userBrtYear = prompt('What year were you born?');
let userCity = prompt('What city do you live?');
let userSport = prompt('What is your favorite sport?');

if (!userBrtYear) {
    alert(`Sorry you didn't want to enter your age`);
} else if (!userCity) {
    alert(`Sorry you didn't want to enter your city`);
} else if (!userSport) {
    alert(`Sorry you didn't want to enter your sport`);
}

// User age
let userAge = 2024 - +userBrtYear;
let showUserAge = userAge + ' years old';
if (isNaN(userAge)) {
    showUserAge = 'Unknown';
}

// User location
let showUserLocation = userCity ?? 'Unknown';
switch (showUserLocation) {
    case 'Kyiv':
        showUserLocation = 'You live in a capital of Ukraine';
        break;
    case 'Washington':
        showUserLocation = 'You live in a capital of USA';
        break;
    case 'London':
        showUserLocation = 'You live in a capital of UK';
        break;
    default:
        showUserLocation = `You live in a city of ${userCity}`;
}

// User sports
let showUserSport = userSport ?? 'Unknown';
switch (userSport) {
    case 'chess':
        showUserSport = 'Cool! Do you want to become Magnus Carlsen?';
        break;
    case 'tennis':
        showUserSport = 'Cool! Do you want to become Roger Federer?';
        break;
    case 'boxing':
        showUserSport = 'Cool! Do you want to become Muhammad Ali?';
        break;
}

alert(showUserAge + '. ' + showUserLocation + '. ' + showUserSport);