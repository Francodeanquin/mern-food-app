import { useAuth0 } from '@auth0/auth0-react'
import { useCreateMyUser } from '../api/MyUserApi'
import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AutchCallbackPage() {
    const navigate = useNavigate()
    const { user } = useAuth0()
    const { createUser } = useCreateMyUser()

    const hasCreatedUser = useRef(false) //creates a false state
    useEffect(() => {
        if (user?.sub && user?.email && !hasCreatedUser.current) {
            createUser({ auth0Id: user.sub, email: user.email })
            hasCreatedUser.current = true
        }

        navigate("/")
    }, [createUser, navigate, user])
    return <>Loading...</>
}
