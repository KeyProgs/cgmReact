import data from './Data'

function Friends(){
    return(
        <>
       Liste des amis
        {data.map((friend)=> <li>{friend.name}</li>)}
        </>
    )
}

export default Friends