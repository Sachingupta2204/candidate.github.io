const data = [
    {
        name: 'Alex Hales',
        user: 'ahales@gmail.co.uk',
        password: 123456,
        birth: '22/03/1995',
        address: 'California',
        image1: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: 'John Walker',
        user: 'jwalker@gmail.co.uk',
        password: 789456,
        birth: '22/08/1993',
        address: 'Los Angeles',
        image1: 'https://randomuser.me/api/portraits/men/74.jpg'
    },
    {
        name: 'Jason Roy',
        user: 'royjason@yahoo.co.uk',
        password: 741258,
        birth: '03/09/2001',
        address: 'New York',
        image1: 'https://randomuser.me/api/portraits/men/73.jpg'
    },
    {
        name: 'Scarlett Jones',
        user: 'sjones@gmail.co.uk',
        password: 963258,
        birth: '06/06/1991',
        address: 'London',
        image1: 'https://randomuser.me/api/portraits/women/75.jpg'
    }
];


function Itretor(profiles){
    let nextCandidate = 0;
    return {
        next: function(){
            return nextCandidate<profiles.length?
            {value: profiles[nextCandidate++], done: false} :
            {done:true}
        }
    }
}

let candidate = Itretor(data)
submitForm()

let submit = document.getElementById('submit');
submit.addEventListener('click', submitForm) 

function submitForm(){
    console.log('form submited');
    const currentCandidate = candidate.next().value;
    let image = document.getElementById('image')
    let profile = document.getElementById('profile')
    let icons = document.getElementById('icons')
    let title = document.getElementById('title')

    if (currentCandidate != undefined) {
        image.innerHTML = `<img src="${currentCandidate.image1}" class="rounded-circle border border-primary p-2" alt="..." width="200px" height="200px"/>
                            <h3 id='title'>My Name is</h3> `;
        profile.innerHTML = `${currentCandidate.name}`;
        icons.innerHTML =  `<div class="container  my-3 ">
                                <div class="row row-cols-2 row-cols-lg-6 g-2 g-lg-3 mx-auto font-monospace justify-content-center">
                                    <button type="button" class="btn btn-outline-primary btn-lg me-2" id="name">Name</button>
                                    <button type="button" class="btn btn-outline-secondary btn-lg me-2" id="email">Email</button>
                                    <button type="button" class="btn btn-outline-info btn-lg me-2 " id="password">Password</button>
                                    <button type="button" class="btn btn-outline-warning btn-lg me-2" id="birth">Birthday</button>
                                    <button type="button" class="btn btn-outline-dark btn-lg me-2" id="address">Address</button>
                                </div>
                            </div>`      
        } else {
        alert('Candidate List Over!');
        window.location.reload();
    }
    let email = document.getElementById('email')
    email.addEventListener('click', addEmail)

    function addEmail(){
        console.log('email Done');
        profile.innerHTML = `${currentCandidate.user}`;
        document.getElementById('title').innerHTML = 'My Email is';
        
    }
    let password = document.getElementById('password')
    password.addEventListener('click', addPass)

    function addPass(){
        console.log('password Done');
        profile.innerHTML = `${currentCandidate.password}`;
        document.getElementById('title').innerHTML = 'My Password is';        
    }
    let birth = document.getElementById('birth')
    birth.addEventListener('click', addBirth)

    function addBirth(){
        console.log('password Done');
        profile.innerHTML = `${currentCandidate.birth}`;
        document.getElementById('title').innerHTML = 'My Birthday is';
    }
    let address = document.getElementById('address')
    address.addEventListener('click', addAddress)

    function addAddress(){
        console.log('password Done');
        profile.innerHTML = `${currentCandidate.address}`;
        document.getElementById('title').innerHTML = 'My Address is';
    }
    
    
}
