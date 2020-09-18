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
// and by that time, the DOM was painted , this is where asynchronous and promises comes in

function createPosts(post){ 

    return new Promise((resolve, reject)=>{   
        setTimeout(()=>{
            Posts.push(post);
            const error = false;  //error checking

            if(!error){ //if not true
                resolve();
            }
            else{
                reject('Error: something went wrong');
            }
        }, 2000);                                   
    })    
}

async function init(){
    await createPosts({ title: 'Post 3', body: 'This is post three'});

    getPosts();
}

init();
