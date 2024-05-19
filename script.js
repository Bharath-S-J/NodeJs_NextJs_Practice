document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submit').addEventListener('click', function() {
        const username = document.getElementById('name').value;
        const password = document.getElementById('pwd').value;

        fetch('/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});


// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('submit').addEventListener('click', function() {
//         const username = document.getElementById('name').value;
//         const password = document.getElementById('pwd').value;

//         fetch('/data', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 username: username,
//                 password: password
//             })
//         })
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//         });
//     });
// });


// // document.getElementById('submit').onclick = () =>{
//     document.getElementById('submit').addEventListener('click', function() {    
//     const username =document.getElementById('name').value

//     const password =document.getElementById('pwd').value
    
//     fetch('/data',{
//         method:'POST',
//         header:{
//             'Content-Type':'application/json'
//         },
//         body:JSON.stringify({
//             username,password
//         })
//     }).then(res => res.json()).then(data=>{
//         console.log(data)
//     })
// });

// document.getElementById('submit').addEventListener('click', function() {
//     // Your event handling code here
// });
