function User() {
    (this.name = "John Doe"),
      (this.score = 20),
      (this.sayUser = function () {
        // when `this` is accessible
        console.log(this.name);
  
        let innerFunction = () => {
          // when `this` refers to the global scope/object
          console.log(this.name);
        };
  
        innerFunction();
      });
  }
  let name = new User();
  name.sayUser();