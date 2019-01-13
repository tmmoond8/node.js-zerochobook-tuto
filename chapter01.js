var relationShip1 = {
  name: 'zero',
  friends: ['neo', 'hero', 'xero'],
  logFriends: function() {
    var that = this;
    this.friends.forEach(function(friend) {
      console.log(this);
      console.log(that.name, friend);
    }.bind(this))
  }
}

// relationShip1.logFriends();

const relationShip2 = {
  name: 'zero',
  friends: ['nero', 'hero', 'xero'],
  logFriends() {
    this.friends.forEach(friend => {
      console.log(this.name, friend);
    })
  }
}

// relationShip2.logFriends();

var candyMachine = {
  status: {
    name: 'node',
    count: 5,
  },
  getCandy: function() {
    this.status.count--;
    return this.status.count;
  }
}
// var getCandy = candyMachine.getCandy;
// var count = candyMachine.status.count;
// console.log(candyMachine.getCandy());

const candyMachine2 = {
  status: {
    name: 'node',
    count: 5,
  },
  getCandy() {
    this.status.count--;
    return this.status.count;
  }
}

const { getCandy, status: { count }} = candyMachine2;
console.log(count)