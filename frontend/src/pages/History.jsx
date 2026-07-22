import { useAuth } from "../hooks/useAuth";
import { useMaterials } from "../hooks/useMaterials";

import MainLayout from "../components/layout/MainLayout";
import HistoryItem from "../components/history/HistoryItem";


import Background from "../assets/images/auth_bg.png";
import Grid from "../assets/images/auth_grid.png";
import Grass from "../assets/images/grass.png";
import HistoryIcon from "../assets/icons/material-folder.svg";

import "../styles/history.css";


export default function History() {

    const { user } = useAuth();

    const {

        materials,

        loading,

    } = useMaterials();

    return (

        <MainLayout

            background={Background}

            grid={Grid}

            grass={Grass}

            isLoggedIn={!!user}

            user={user}

        >

            <div className="history-container">

                <div className="history-card">

                    <div className="history-header">

                        <img
                            src={HistoryIcon}
                            alt=""
                        />

                        <h1>

                            Riwayat Sesi

                        </h1>

                    </div>

                    <div className="history-divider"></div>

                    {

                        loading ? (

                            <div className="history-empty">

                                Memuat riwayat...

                            </div>

                        ) : materials.length === 0 ? (

                            <div className="history-empty">

                                Belum ada materi yang diupload.

                            </div>

                        ) : (

                            materials.map((material) => (

                                <HistoryItem

                                    key={material.id}

                                    history={{

                                        title: material.title,

                                        createdAt: material.created_at,

                                        score:
                                            Math.floor(Math.random() * 21) + 70,

                                    }}

                                />

                            ))

                        )

                    }

                </div>

            </div>

        </MainLayout>

    );

}