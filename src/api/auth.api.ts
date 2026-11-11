const API_URL = import.meta.env.VITE_API_URL || "https://fira-tech.org/api/v1";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message?: string;
  data: {
    accessToken?: string;
    hrmsRedirect?: boolean;
    hrmsToken?: string;
    user?: {
      id: string;
      name: string;
      email: string;
      role: string;
      [key: string]: any;
    };
    [key: string]: any;
  };
}

export async function login(payload: LoginPayload): Promise<{ data: LoginResponse }> {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const errorMsg = data?.message || "Login failed. Please check your credentials.";
    const error: any = new Error(errorMsg);
    error.response = { data };
    throw error;
  }

  return { data };
}
