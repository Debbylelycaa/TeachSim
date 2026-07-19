import MaterialCard from "./MaterialCard";
import "./saved-materials.css";

import folderIcon from "../../assets/icons/material-folder.svg";

export default function SavedMaterialsSection({
  materials = [],
  loading,
  onPreview,
  onUse,
}) {
  return (
    <section className="saved-materials">
      <div className="saved-header">
        <div className="saved-title">
          <img src={folderIcon} alt="Folder" className="saved-title-icon" />

          <h2>Materi Tersimpan</h2>
        </div>

        <div className="saved-divider"></div>
      </div>

      <div className="saved-content">
        {loading ? (
          <div className="saved-loading">Memuat materi...</div>
        ) : materials.length === 0 ? (
          <div className="saved-empty">
            <div className="saved-empty-icon">📂</div>

            <h3>Belum ada materi</h3>

            <p>Upload materi terlebih dahulu agar muncul di sini.</p>
          </div>
        ) : (
          materials.map((material, index) => (
            <MaterialCard
              key={material.id}
              material={material}
              onPreview={onPreview}
              onUse={onUse}
              last={index === materials.length - 1}
            />
          ))
        )}
      </div>
    </section>
  );
}
