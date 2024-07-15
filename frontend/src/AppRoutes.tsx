import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/layout"
import HomePage from "./pages/HomePage"
import AutchCallbackPage from "./pages/AutchCallbackPage"
import UserProfilePage from "./pages/UserProfilePage"
import ProtectedRoute from "./auth/ProtectedRoute"
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout showHero={true}>{<HomePage />}</Layout>} />

            <Route path="/auth-callback" element={<AutchCallbackPage />} />
            <Route element={<ProtectedRoute />}>
                <Route path="/user-profile" element={<Layout showHero={false}><UserProfilePage /></Layout>} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />


        </Routes>)
}


export default AppRoutes