export const ROLES = {
  SUPER_ADMIN: "super_admin",
  CA_FIRM_ADMIN: "ca_firm_admin",
  CA_FIRM_STAFF: "ca_firm_staff",
  BUSINESS_CLIENT_ADMIN: "business_client_admin",
  BUSINESS_CLIENT_EMPLOYEE: "business_client_employee",
};

export const ROLE_LABELS = {
  [ROLES.SUPER_ADMIN]: "Super Admin",
  [ROLES.CA_FIRM_ADMIN]: "CA Firm Admin",
  [ROLES.CA_FIRM_STAFF]: "CA Firm Staff",
  [ROLES.BUSINESS_CLIENT_ADMIN]: "Business Client Admin",
  [ROLES.BUSINESS_CLIENT_EMPLOYEE]: "Employee",
};

// Business Client Admin/Employee have no reason to see CA-Management's own UI —
// their whole job lives in HRMS, so anywhere this role turns up authenticated
// should hand off to HRMS instead of showing a CA-Management page first.
export const BUSINESS_CLIENT_ROLES = [ROLES.BUSINESS_CLIENT_ADMIN, ROLES.BUSINESS_CLIENT_EMPLOYEE];

export const ROLE_BASE_PATHS: Record<string, string> = {
  [ROLES.SUPER_ADMIN]: "super-admin",
  [ROLES.CA_FIRM_ADMIN]: "firm-admin",
  [ROLES.CA_FIRM_STAFF]: "firm-staff",
  [ROLES.BUSINESS_CLIENT_ADMIN]: "client-admin",
  [ROLES.BUSINESS_CLIENT_EMPLOYEE]: "employee",
};

export function getRoleBasePath(role?: string) {
  if (!role) return "/login";
  return `/${ROLE_BASE_PATHS[role] || role}`;
}
