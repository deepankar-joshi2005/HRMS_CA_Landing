const API_URL = import.meta.env.VITE_API_URL || "https://fira-tech.org/api/v1";

export interface HrmsSsoResponse {
  success: boolean;
  message?: string;
  data: { token: string };
}

// Powers the "log in once, land in HRMS" flow — CA-Management has already
// verified this user's password, so it trades their (verified) session for a
// real HRMS session token instead of asking them to log in a second time.
export async function getMyHrmsSsoToken(accessToken: string): Promise<{ data: HrmsSsoResponse }> {
  const response = await fetch(`${API_URL}/business-clients/me/hrms-sso`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const errorMsg = data?.message || "Could not start your HRMS session.";
    const error: any = new Error(errorMsg);
    error.response = { data };
    throw error;
  }

  return { data };
}
