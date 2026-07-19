import { createPortal } from "react-dom";
import "../../styles/preview-modal.css";

export default function PreviewModal({ open, material, onClose }) {
  if (!open || !material) return null;

  return createPortal(
    <div className="preview-overlay" onClick={onClose}>
      <div className="preview-modal" onClick={(e) => e.stopPropagation()}>
        <div className="preview-header">
          <h2>Preview Materi</h2>

          <button className="preview-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="preview-body">
          {material.file_url ? (
            <iframe
              title={material.title}
              src={material.file_url}
              className="preview-frame"
            />
          ) : (
            <div className="preview-empty">Preview belum tersedia.</div>
          )}
        </div>

        <div className="preview-footer">
          <span className="preview-filename">{material.title}</span>
        </div>
      </div>
    </div>,
    document.body,
  );
}
