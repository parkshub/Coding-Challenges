//////////////////
// THIS LESSON //
/////////////////

// when a function is inside an object, it is a method and when it is a method, THIS refers to the object
// when it is a function this refers to the global object, which is 'window' on the browser and 'global' in node


// because the function inside is a method, it'll refer to the object that it's being called on
const Test = {
  title: 'title',
  showVid() {
    console.log('playing ', this.title)
  }
}

// because the function is not inside a method, this will refer to the global object
function testGlobalThis() {
  console.log(this)
}

// we can however, make functions to utilize this by making a constructor function
function TestThis(title) {
  this.title = title
  this.showVid = function() {
    console.log('this is the title ', this.title)
  }
}

const a = new TestThis('a')
// console.log(a.showVid())
    //only works when you invoke it with a new operator. The new operator creates a new empty object makes the constructor function to point to the empty object

// using this for forEach
const video = {
  title: 'a',
  tags: [1,2,3],
  showVid() {
    console.log('this is the title', this.title)
  },
  showTags1() {
    this.tags.forEach(function(tag) {
      console.log(this.title + ':' + tag)
    })
  },
  showTags2() {
    this.tags.forEach(function(tag) {
      console.log(this.title, ':', tag)
    }, this) // not all methods in javascript allow you to pass this, but for each does
  },
  showTags3() {
    this.tags.forEach(x => console.log(this.title + x)) // you can simplify the above using this method, when using nested functions or callbacks using arrow functions will create an instance of this that refers to the parent object. In other words, binds the this keyword to the parent object
    // !!!!! However, it should be noted that arrow function can never be a method nor can it be a constructor
  }
}
// video.showTags1() this will not work, because this is referencing the callback function and therefore this will refer to the global object
video.showTags2() // this works 

// if you want an inner function within a method to have access to the this object you can create closure by doing creating a self object that refers to this

// remember this is a method within a constructor
function method() {
  let self = this
  function innerfunction() {
    console.log(self.something)
  }
}