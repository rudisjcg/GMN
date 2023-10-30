'use client'
import LayoutPage from "@/components/Layout";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";


export default  function Account() {
const {data: session} = useSession();
const [userData, setUserData] = useState();



async function fetchingData () {
    const userEmail = session?.user?.email;
    const res = axios.post('/api/userPage', userEmail);
    setUserData(res.data);
};

console.log(userData);

useEffect(() => {
    fetchingData();
}
, [session]);

    
    return (
        <>
        <LayoutPage>

        Account
        </LayoutPage>
        </>
    );
}

