// 1. window 객체
console.log("this 1", this);

function myFunction() {
  console.log("this 1 in myFunction", this);
}
myFunction();

// 2. DOM element
function doSearch(obj) {
  console.log("this 2", obj);
}

function doChange(obj) {
  console.log("this 2", obj);
  console.log("this 2, obj.value", obj.value);
}

// 3. Object
const person = {
  firstName: "John",
  lastName: "Doe",
  getFullName_fn: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  getFullName_arrowFn: () => {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(person.getFullName_fn()); // John Doe
console.log(person.getFullName_arrowFn()); // undefined undefined
