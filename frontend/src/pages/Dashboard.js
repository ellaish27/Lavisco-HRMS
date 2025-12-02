import React from "react";
import { useUser } from "../services/auth";
import AdminDashboard from "../components/AdminDashboard";
import HRDashboard from "../components/HRDashboard";
import EmployeeDashboard from "../components/EmployeeDashboard";

function Dashboard() {
  const { user } = useUser();

  if (!user) return null;
  if (user.role === "admin") return <AdminDashboard />;
  if (user.role === "hr") return <HRDashboard />;
  if (user.role === "employee") return <EmployeeDashboard />;
  return null;
}

export default Dashboard;