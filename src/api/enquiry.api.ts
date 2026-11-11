const API_URL = import.meta.env.VITE_API_URL || "https://fira-tech.org/api/v1";

export interface EnquiryPayload {
  purpose: string;
  name: string;
  companyName: string;
  email: string;
  phone: string;
  city?: string;
  employeeCount?: number | null;
  services?: string[];
  message?: string;
}

export interface EnquiryResponse {
  success: boolean;
  message?: string;
  data?: any;
}

export async function createEnquiry(payload: EnquiryPayload): Promise<{ data: EnquiryResponse }> {
  const response = await fetch(`${API_URL}/enquiries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const errorMsg = data?.message || "Could not send your enquiry. Please try again.";
    const error: any = new Error(errorMsg);
    error.response = { data };
    throw error;
  }

  return { data };
}
