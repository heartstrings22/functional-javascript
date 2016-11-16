/*function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.map(function(submittedUser) {
            return goodUsers.some(function(item) {
                return submittedUser.id === item.id;
            });
        }).every(function(element) {
            return element === true;
        });
    };
}*/

function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function(submittedUser) {
            return goodUsers.some(function(goodUser) {
                return goodUser.id === submittedUser.id;
            })
        });
    };
}

module.exports = checkUsersValid;
