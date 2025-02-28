import { supabase } from "../Supabase/SupaClient"
import { addUser } from "../Store/AuthSlice";
import { useDispatch } from "react-redux";
import React from 'react'

const SupaAuth = () => {
    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            useDispatch(addUser(session))
        });

        supabase.auth.onAuthStateChange((_event, session) => {
            useDispatch(addUser(session))
        });
    }, []);
}

export default SupaAuth
export const SignUpNewUser = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password

    })
    if (error) {
        console.log(error);
        return { sucess: false, data }
    }
    else {
        console.log(data);
        return { sucess: true, data }
    }
}