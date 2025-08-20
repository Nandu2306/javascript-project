let user = [
    { name: 'yash', email: 'yas@gmail.com', mobile: 9876543210, salary: 55000 },
    { name: 'nandu', email: 'nandu@gmail.com', mobile: 9567543210, salary: 65000 },
    { name: 'harshu', email: 'hasrh@gmail.com', mobile: 9595743210, salary: 60000 },
    { name: 'nikitha', email: 'niki@gmail.com', mobile: 956754910, salary: 55000 },
    { name: 'suja', email: 'sji@gmail.com', mobile: 9957543210, salary: 63000 },
    { name: 'kashi', email: 'kashi@gmail.com', mobile: 9563443210, salary: 65000 }
]

let totalParticipants = user.length;

let winner = Math.floor(Math.random() * totalParticipants);


if (totalParticipants === 0) {
    console.log("Register first!");
} else {
    console.log(" Winner is " + user[winner].name);
}
