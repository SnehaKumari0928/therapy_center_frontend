// src/utils/roleRedirect.js
export const getDashboardRoute = (role) => {

    const r = role?.toLowerCase();
    console.log(r)
  switch (r) {
    case "Admin":
      return "/admin";
    case "Doctor":
      return "/doctor";
    case "Receptionist":
      return "/receptionist";
    case "Patient":
    case "Guardian":
      return "/patient";
    default:
      return "/";
  }
};