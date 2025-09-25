function add(a: number, b: number): Promise<number> {
    let p: Promise<number> = new Promise((resolve, reject) => {
        setTimeout(()=>{
        resolve(a + b);
        },4000);
    });
    return p;
}


add(10, 20).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

console.log("END..........");