
const add =(
    a,b,callback
)=> {
    setTimeout(() => {
        callback(a+b)
    }, 2000)
}

