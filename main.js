console.log('Hello!');

const obj = {
    x: 10,
    y: 5,
    add: function() { console.log(this.x + this.y, this) },
    delete: function() { console.log(this.x - this.y) }
};

const obj1 = {
    x: 7,
    y: 2,
};

//obj.add()
//obj.add.call(obj1);
const func = obj.add.bind(obj1);
func();
//obj.add;

document.addEventListener('click', (e) => console.log(this))