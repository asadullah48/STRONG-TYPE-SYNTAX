//strongly typed syntax
var a = "Pakistan";
a = "USA";
var b = 9;
var c = true;
var d = "abc@xyz_12.com";
//type inference
var e = "USA";
var f = 10.9;
f = 22;
var g = false;
g = true;
var h = "123@abc.com";
//  e.g 2
var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    Box.prototype.getValue = function () {
        return this.value;
    };
    return Box;
}());
var box = new Box(42);
console.log(box.getValue()); // Output: 42
