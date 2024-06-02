

var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];




const frd = (friends) => {

    let big_friend = friends[0];

    for (let i =0;i<friends.length;i++){

        if (friends[i].length >  big_friend.length ){
            big_friend = friends[i];
        }
    }
    return big_friend;
}


const ans = frd(friends);
console.log(ans);