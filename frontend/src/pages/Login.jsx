import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { supabase } from "../lib/supabaseClient";

import AuthLayout from "../components/layout/AuthLayout";
import AuthCard from "../components/ui/AuthCard";
import Input from "../components/ui/Input";
import Checkbox from "../components/ui/Checkbox";
import Button from "../components/ui/Button";

import Background from "../assets/images/auth_bg.png";
import Grid from "../assets/images/auth_grid.png";
import Grass from "../assets/images/grass.png";
import Logo from "../assets/images/logo.png";

import EmailIcon from "../assets/icons/email.svg";
import LockIcon from "../assets/icons/lock.svg";

export default function Login() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [remember, setRemember] = useState(false);

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

        const { error } =
            await supabase.auth.signInWithPassword({

                email: form.email,

                password: form.password,

            });

        setLoading(false);

        if (error) {

            setError("Email atau password salah.");

            return;

        }

        navigate("/");

    }

    return (

        <AuthLayout

            background={Background}

            grid={Grid}

            grass={Grass}

        >

            <AuthCard

                logo={Logo}

            >

                <form

                    className="auth-form"

                    onSubmit={handleSubmit}

                >

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

                        placeholder="Masukkan kata sandi"

                        value={form.password}

                        onChange={handleChange}

                        required

                    />

                    <div className="auth-options">

                        <Checkbox

                            checked={remember}

                            onChange={(e) =>
                                setRemember(
                                    e.target.checked
                                )
                            }

                        >

                            Ingat Saya

                        </Checkbox>

                        <Link

                            to="/forgot-password"

                            className="auth-link"

                        >

                            Lupa Password?

                        </Link>

                    </div>

                    {error && (

                        <span className="input-error">

                            {error}

                        </span>

                    )}

                    <Button

                        type="submit"

                        loading={loading}

                    >

                        Masuk

                    </Button>

                </form>

                <p className="auth-footer">

                Belum punya akun?{" "}

                <Link

                    to="/register"

                    className="auth-link"

                >

                    Daftar

                </Link>

            </p>

            </AuthCard>

        </AuthLayout>

    );

}