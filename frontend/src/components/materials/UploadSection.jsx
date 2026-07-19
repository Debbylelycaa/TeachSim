import UploadIcon from "../../assets/icons/upload.svg"; // ganti sesuai asset nanti
import "./upload-section.css";

export default function UploadSection({ upload, uploading }) {
  function handleChange(e) {
    const file = e.target.files?.[0];

    if (!file) return;

    upload(file);
  }

  return (
    <section className="upload-section">
      <input
        id="material-upload"
        type="file"
        accept=".pdf,.tex"
        hidden
        onChange={handleChange}
        disabled={uploading}
      />

      <label htmlFor="material-upload" className="upload-dropzone">
        <img src={UploadIcon} alt="" className="upload-icon" />

        <p className="upload-title">
          Seret & lepas file di sini, atau klik untuk memilih
        </p>

        <p className="upload-subtitle">
          Format yang didukung: PDF, LaTeX (.tex) · Maks. 20MB
        </p>

        <span className="upload-button">Pilih File</span>
      </label>
    </section>
  );
}
