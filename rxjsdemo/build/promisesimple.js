function add(a, b) {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 4000);
    });
    return p;
}
add(10, 20).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
console.log("END..........");
