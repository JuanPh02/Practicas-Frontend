import React from 'react'
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Students from "../pages/Students/Students";
import Companies from "../pages/Companies/Companies";
import {SignupCompanies} from '../pages/Signup/SignupCompanies/SignupCompanies';
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Layout from "./Layout";
import RequireAuth from "./RequireAuth";
import { Routes, Route } from "react-router-dom";
import { Profile } from '../components/Profile/Profile';
import { CreateOffer } from '../pages/Offers/CreateOffer/CreateOffer';
import { ViewOffers } from '../pages/Offers/ViewOffers/ViewOffers';

const ROLES = {
  'Student': 2001,
  'Company': 1984,
  'Admin': 5150
}

export default function Views() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup-companies" element={<SignupCompanies />} />
        {/* <Route path="/signup-contacts" element={<SignupContacts />} /> */}
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/create-offer" element={<CreateOffer />} />
        <Route path="/offers" element={<ViewOffers />} />

        {/* Private Routes */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/students" element={<Students />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
