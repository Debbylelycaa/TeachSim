import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { supabase } from "../lib/supabaseClient";

import AuthLayout from "../components/layout/AuthLayout";
import AuthCard from "../components/ui/AuthCard";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

import Background from "../assets/images/auth_bg.png";
import Grid from "../assets/images/auth_grid.png";
import Grass from "../assets/images/grass.png";
import Logo from "../assets/images/logo.png";

import EmailIcon from "../assets/icons/email.svg";
import LockIcon from "../assets/icons/lock.svg";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",

    email: "",

    password: "",
  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({
      ...form,

      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");

    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email: form.email,

      password: form.password,

      options: {
        data: {
          full_name: form.name,
        },
      },
    });

    setLoading(false);

    if (error) {
      setError(error.message);

      return;
    }

    navigate("/login");
  }

  return (
    <AuthLayout background={Background} grid={Grid} grass={Grass}>
      <AuthCard logo={Logo}>
        <form className="auth-form" onSubmit={handleSubmit}>
          <Input
            label="Nama Lengkap"
            name="name"
            placeholder="Masukkan nama lengkap"
            value={form.name}
            onChange={handleChange}
            required
          />

          <Input
            label="Email"
            icon={EmailIcon}
            name="email"
            type="email"
            placeholder="Masukkan email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <Input
            label="Kata Sandi"
            icon={LockIcon}
            name="password"
            type="password"
            placeholder="Minimal 6 karakter"
            value={form.password}
            onChange={handleChange}
            minLength={6}
            required
          />

          {error && <span className="input-error">{error}</span>}

          <Button type="submit" loading={loading}>
            Daftar
          </Button>
        </form>

        <p className="auth-footer">
          Sudah punya akun?{" "}
          <Link className="auth-link" to="/login">
            Masuk
          </Link>
        </p>
      </AuthCard>
    </AuthLayout>
  );
}
