// The function below uses plain old Promises. Rewrite it as an "async" method!

let getDogsOwnersBestFriend = () => {
    return get('/dog/1').then(dog => {
        return get(`/owner/${dog.owner}`);
    }).then( owner => {
        return get(`/friend/${owner.bestFriend}`);
    }).then( friend => {
        return friend.name;
    })
}

// es6
let getDogsOwnersBestFriend = async () => {
    try {
        const response1 = await get('dog/1');
        const response2 = await get(`/owner/${response1.owner}`);
        const response3 = await get(`/friend/${response2.bestFriend}`);
        return response3.name;
    } catch (error) {
        console.log(error);
    }
}