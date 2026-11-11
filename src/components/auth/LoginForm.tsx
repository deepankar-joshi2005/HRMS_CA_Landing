import { useState, type FormEvent } from "react";
import * as authApi from "../../api/auth.api";
import { getMyHrmsSsoToken } from "../../api/businessClient.api";
import { BUSINESS_CLIENT_ROLES, getRoleBasePath } from "../../config/roles";
import Input from "../ui/Input";
import Button from "../ui/Button";

const MAIN_SITE_URL = (import.meta.env.VITE_MAIN_SITE_URL || "https://fira-tech.org").replace(/\/$/, "");

export default function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data } = await authApi.login({ email: form.email, password: form.password });

      if (data.data?.hrmsRedirect) {
        window.location.href = `${MAIN_SITE_URL}/hrms-app/sso?token=${encodeURIComponent(data.data.hrmsToken || "")}`;
        return;
      }

      const user = data.data?.user;
      const accessToken = data.data?.accessToken;

      // Business Client accounts belong in HRMS, not on CA-Management's own
      // dashboard — trade the login we just did for an HRMS session token and
      // hand off there directly, same as CA-Management's own /login does.
      if (user && accessToken && BUSINESS_CLIENT_ROLES.includes(user.role)) {
        try {
          const { data: sso } = await getMyHrmsSsoToken(accessToken);
          window.location.href = `${MAIN_SITE_URL}/hrms-app/sso?token=${encodeURIComponent(sso.data.token)}`;
          return;
        } catch {
          // HRMS not provisioned for this account yet — fall through below.
        }
      }

      if (accessToken) {
        localStorage.setItem("accessToken", accessToken);
      }
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      }

      const rolePath = getRoleBasePath(user?.role);
      window.location.href = `${MAIN_SITE_URL}${rolePath}`;
    } catch (err: any) {
      const msg = err.response?.data?.message || err.message || "Login failed. Please try again.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {error && (
        <div className="rounded-lg border border-danger/30 bg-danger-bg px-3.5 py-2.5 text-sm text-danger">
          {error}
        </div>
      )}
      <Input
        label="Email address"
        type="email"
        name="email"
        autoComplete="email"
        required
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        placeholder="you@firm.com"
      />
      <Input
        label="Password"
        type="password"
        name="password"
        autoComplete="current-password"
        required
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        placeholder="••••••••"
      />
      <Button type="submit" variant="brand" size="lg" loading={loading} className="mt-2 w-full">
        Log in
      </Button>
    </form>
  );
}
