function loadUsers(userIds, load, done) {
  let finito = 0;
  const users = [];
  userIds.forEach(function (id, indx) {
    load(id, function (user) {
      users[indx] = user;
      if (++finito === userIds.length) {
        return done(users);
      }
    });
  });
}

module.exports = loadUsers;
