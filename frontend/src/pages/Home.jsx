import { useNavigate } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

import MainLayout from "../components/layout/MainLayout";
import Button from "../components/ui/Button";

import Background from "../assets/images/auth_bg.png";
import Grid from "../assets/images/auth_grid.png";
import Grass from "../assets/images/grass.png";
import HeroLogo from "../assets/images/logo1.png";

export default function Home() {

    const navigate = useNavigate();

    const { user } = useAuth();

    function handleStart() {

        if (user) {

            navigate("/simulation");

        } else {

            navigate("/login");

        }

    }

    return (

        <MainLayout

            background={Background}

            grid={Grid}

            grass={Grass}

            isLoggedIn={!!user}

            user={user}

        >

            <section className="hero">

                <img

                    src={HeroLogo}

                    alt="TeachSim"

                    className="hero-logo"

                />

                <div className="hero-subtitle">

                    Platform Simulasi Microteaching Berbasis AI

                </div>

                <Button

                    variant="hero"

                    fullWidth={false}

                    onClick={handleStart}

                >

                    MULAI!

                </Button>

            </section>

        </MainLayout>

    );

}