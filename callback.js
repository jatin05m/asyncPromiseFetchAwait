// making an array of post
const Posts = [
    { title: 'Post 1', body: 'This is post one'},
    { title: 'Post 2', body: 'This is post two'}
];

//fetching data from Post array
function getPosts() {
    setTimeout(() =>{ // Using timeOut to hypothetically consider it like coming from server

        let output='';

        Posts.forEach((post, index) =>{
            output += `<li>${post.title}</li>`  //use of string template
        });

        document.body.innerHTML = output;  // printing over the screen

    }, 1000)
}

// adding data in the Posts Array but initially 
// when callback function is not used, createPosts() took 2 seconds longer the getPosts() method
// and by that time, the DOM was painted , this is where asynchronous and callback comes in

function createPosts(post ,callback){ // we make use of callback function
    setTimeout(()=>{

        Posts.push(post);
        callback();
    }, 2000);
}

//getPosts();

createPosts({ title: 'Post 3', body: 'This is post three'}, getPosts);  

