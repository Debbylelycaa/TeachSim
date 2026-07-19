import "./saved-materials.css";

import pdfIcon from "../../assets/icons/pdf.svg";
import playIcon from "../../assets/icons/play.svg";
import previewIcon from "../../assets/icons/preview.svg";

export default function MaterialCard({ material, onPreview, onUse, last }) {
  return (
    <div className={`material-row ${last ? "last" : ""}`}>
      <div className="material-left">
        <img src={pdfIcon} alt="PDF" className="pdf-icon" />
        <div className="material-text">
          <h3>{material.title}</h3>

          <p>
            Diunggah:{" "}
            {new Date(material.created_at).toLocaleDateString("id-ID")}
          </p>
        </div>
      </div>

      <div className="material-actions">
        <button className="use-btn" onClick={() => onUse(material)}>
          <img src={playIcon} alt="" className="play-icon" />

          <span>Gunakan</span>
        </button>

        <button className="preview-btn" onClick={() => onPreview(material)}>
          <img src={previewIcon} alt="" className="preview-icon" />

          <span>Preview</span>
        </button>
      </div>
    </div>
  );
}
