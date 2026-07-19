import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";
import { useMaterials } from "../hooks/useMaterials";

import MainLayout from "../components/layout/MainLayout";

import UploadSection from "../components/materials/UploadSection";
import ProcessingSection from "../components/materials/ProcessingSection";
import SavedMaterialsSection from "../components/materials/SavedMaterialsSection";
import PreviewModal from "../components/materials/PreviewModal";

import Background from "../assets/images/auth_bg.png";
import Grid from "../assets/images/auth_grid.png";
import Grass from "../assets/images/grass.png";

import "./materials.css";

export default function Materials() {
  const navigate = useNavigate();

  const { user } = useAuth();

  const {
    materials,

    loading,

    uploadQueue,

    upload,

    preview,

    closePreview,

    selectedMaterial,
  } = useMaterials();

  const [queue] = useState([]);

  function handleUse(material) {
    navigate(`/simulation/${material.id}`);
  }

  return (
    <MainLayout
      background={Background}
      grid={Grid}
      grass={Grass}
      isLoggedIn={!!user}
      user={user}
    >
      <div className="materials-page">
        <div className="materials-left">
          <UploadSection upload={upload} />
          <ProcessingSection queue={uploadQueue} />{" "}
        </div>

        <div className="materials-right">
          <SavedMaterialsSection
            materials={materials}
            loading={loading}
            onPreview={preview}
            onUse={handleUse}
          />
        </div>
      </div>

      <PreviewModal
        open={selectedMaterial !== null}
        material={selectedMaterial}
        onClose={closePreview}
      />
    </MainLayout>
  );
}
