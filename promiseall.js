const promise1 = Promise.resolve('Hello World')

const promise2 = 10;

const promise3 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 2000, 'Goodbye World')
})

const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

// Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));

// const recordVideo1 = new Promise((resolve, reject)=>{
//     resolve('Video 1 Recorded')
// })

// const recordVideo2 = new Promise((resolve, reject)=>{
//     resolve('Video 2 Recorded')
// })

// const recordVideo3 = new Promise((resolve, reject)=>{
//     resolve('Video 3 Recorded')
// })

// Promise.all([
//     recordVideo1,
//     recordVideo2,
//     recordVideo3
// ]).then((messagess)=>{
//     console.log(messagess)
// })

// Race promise

// const recordVideo2 = new Promise((resolve, reject)=>{
//     setTimeout(resolve, 2000, 'Video 2 Recorded')
// })
// const recordVideo1 = new Promise((resolve, reject)=>{
//     setTimeout(resolve, 3000, 'Video 1 Recorded')
// })



// const recordVideo3 = new Promise((resolve, reject)=>{
//     setTimeout(resolve, 1000, 'Video 3 Recorded')
// })

// Promise.race([
//     recordVideo1,
//     recordVideo2,
//     recordVideo3
// ]).then((messagess)=>{
//     console.log(messagess)
// })