
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const UserDetails = () => {
    const {id} = useParams();
    const [user, setuser] = useState([]);
    const [loading,setLoading] = useState(false);
    
    const getuser = async () => {
        setLoading(true);
        const url = `https://reqres.in/api/users/${id}`;
        let res = await fetch(url);
        let data = await res.json();
        console.log(data)
        setuser(data);
        setLoading(false);
    }

    useEffect(() => {
getuser();
    },[])

    return (
        <div>
            user details page
        </div>
    )
}

export default UserDetails;