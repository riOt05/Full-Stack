import { Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import LazySuspense from "./components/LazySuspense";
// import AdminLayout from "./pages/admin/AdminLayout";
const LazyLogin = lazy(() => import("./pages/auth/Login"));
const LazyRegister = lazy(() => import("./pages/auth/Register"));
const LazyForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));
const LazyHome = lazy(() => import("./pages/user/Home"));
const LazyExploreAllEvents = lazy(() =>
  import("./pages/user/ExploreAllEvents")
);
const LazyEventsBooking = lazy(() => import("./pages/user/EventsBooking"));
const LazyContactUs = lazy(() => import("./pages/user/ContactUs"));
const LazyDashBoard = lazy(() => import("./pages/user/DashBoard"));
const LazyProfile = lazy(() => import("./pages/user/Profile"));
const LazyAdminLayout = lazy(() => import("./pages/admin/AdminLayout"));
const LazyAdminHome = lazy(() => import("./pages/admin/AdminHome.jsx"));
const LazyUserDetails = lazy(() => import("./pages/admin/UserDetails"));

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<LazySuspense component={LazyHome} />} />
      <Route
        path="/exploreallevents"
        element={<LazySuspense component={LazyExploreAllEvents} />}
      />
      <Route
        path="/eventsbooking"
        element={<LazySuspense component={LazyEventsBooking} />}
      />
      <Route
        path="/contactus"
        element={<LazySuspense component={LazyContactUs} />}
      />
      <Route
        path="/dashboard"
        element={<LazySuspense component={LazyDashBoard} />}
      />
      <Route
        path="/profile"
        element={<LazySuspense component={LazyProfile} />}
      />
    </Routes>
  );
};
const AdminRoutes = () => {
  return (
    <LazyAdminLayout>
      <Routes>
        <Route
          path="/adminhome"
          element={<LazySuspense component={LazyAdminHome} />}
        />
        <Route
          path="/userdetails"
          element={<LazySuspense component={LazyUserDetails} />}
        />
      </Routes>
    </LazyAdminLayout>
  );
};
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LazySuspense component={LazyLogin} />} />
      <Route
        path="/register"
        element={<LazySuspense component={LazyRegister} />}
      />
      <Route
        path="/forgot-password"
        element={<LazySuspense component={LazyForgotPassword} />}
      />
      <Route
        path="/adminhome"
        element={<LazySuspense component={LazyAdminHome} />}
      />
<Route
  path="/userdetails"
  element={<LazySuspense component={LazyUserDetails} />}
/>
      <Route path="/user/*" element={<LazySuspense component={UserRoutes} />} />
      <Route
        path="/admin/*"
        element={<LazySuspense component={AdminRoutes} />}
      />
    </Routes>
  );
}
export default App;
