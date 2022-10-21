
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./UserDetails.css"
import { AiOutlineMail } from "react-icons/ai";
const UserDetails = () => {
    const { id } = useParams();
    const [user, setuser] = useState([]);
    const [loading, setLoading] = useState(false);

    

    useEffect(() => {
        const getuser = async () => {
            try {
                setLoading(true);
                const url = `https://reqres.in/api/users/${id}`;
                let res = await fetch(url);
                let data = await res.json();
                console.log(data)
                setuser(data);
                setLoading(false);
            } catch (e) {
                console.log(e)
            }


        }
        getuser();
    }, [])
    const ShowUserDetails = () => {
        return (
            <>

                {user.data ?
                    <div id="details_maindiv">
                        <div>
                            <div>
                                <img src={user.data.avatar} alt="" />
                                {console.log(user)}
                            </div>
                            <div>
                                <p>{user.data.first_name} {user.data.last_name}</p>
                                <div id="hrtag">
                                    <hr />

                                </div>
                                <p>Contact :-</p>
                                <span><AiOutlineMail /></span><i>{user.data.email}</i>
                            </div>
                        </div>
                    </div>
                    : "Loading"}

            </>
        )
    }
    return (
        <>
            <div id="nav">
                <div>User Details</div>
            </div>
            {loading ? "Loading" : <ShowUserDetails />}
        </>
    )
}

export default UserDetails;