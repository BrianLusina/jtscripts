function checkUsersValid(goodUsers) {
     return function allUsersValid(submittedUsers) {
       return submittedUsers.every(function(elem){
         return goodUsers.some(function(val){
           return val.id == elem.id;
         });
       });
     };
}

module.exports = checkUsersValid
