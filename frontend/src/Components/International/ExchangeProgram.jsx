import React, { useState } from "react";
import { FaFileUpload, FaGraduationCap } from "react-icons/fa";

const FeeReceiptUploadModern = () => {
  const [semester, setSemester] = useState("");
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!semester || !file) {
      setMessage("❌ Please select semester and upload your receipt.");
      setError(true);
      return;
    }
    setMessage("✅ Fee receipt uploaded successfully.");
    setError(false);
    setSemester("");
    setFile(null);
    setPreviewUrl(null);
    e.target.reset();
  };

  const styles = {
    wrapper: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(to right, #e0e7ff, #f8fafc)",
      fontFamily: "'Poppins', sans-serif",
      padding: "100px 20px",
    },
    card: {
      display: "flex",
      flexDirection: "row",
      background: "#ffffff",
      boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
      borderRadius: "16px",
      overflow: "hidden",
      width: "100%",
      maxWidth: "900px",
      flexWrap: "wrap",
    },
    leftPanel: {
      background: "linear-gradient(to bottom right, #1e3a8a, #3b82f6)",
      flex: "0.6",
      maxWidth: "300px",
      minWidth: "200px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 20px",
      color: "#ffffff",
    },
    animatedIcon: {
      fontSize: "130px",
      color: "#f8fafc",
      animation: "bounce 2s infinite",
    },
    leftTitle: {
      fontSize: "24px",
      fontWeight: "700",
      marginTop: "20px",
    },
    formPanel: {
      flex: "1",
      minWidth: "200px",
      padding: "40px 30px",
    },
    title: {
      fontSize: "26px",
      fontWeight: "600",
      color: "#1e293b",
      marginBottom: "28px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    label: {
      fontSize: "15px",
      fontWeight: "500",
      marginBottom: "8px",
      color: "#475569",
      display: "block",
    },
    select: {
      width: "100%",
      padding: "12px",
      borderRadius: "10px",
      border: "1px solid #cbd5e1",
      marginBottom: "24px",
      fontSize: "14px",
      outline: "none",
    },
    uploadBoxCustom: {
      border: "1px solid #94a3b8",
      borderRadius: "12px",
      padding: "20px",
      backgroundColor: "#f1f5f9",
      color: "#1e293b",
      cursor: "pointer",
      marginBottom: "24px",
      fontSize: "14px",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },
    uploadIconArea: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    uploadIcon: {
      fontSize: "20px",
      color: "#14532d",
    },
    uploadText: {
      fontWeight: "600",
      color: "#14532d",
      textDecoration: "underline",
    },
    subText: {
      fontSize: "13px",
      color: "#374151",
    },
    input: {
      display: "none",
    },
    button: {
      width: "50%",
      padding: "10px",
      backgroundColor: "#3b82f6",
      color: "#ffffff",
      fontWeight: "600",
      border: "none",
      borderRadius: "10px",
      fontSize: "16px",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    message: {
      marginTop: "20px",
      fontSize: "14px",
      textAlign: "center",
      color: error ? "#dc2626" : "#16a34a",
    },
  };

  return (
    <>
      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
        `}
      </style>

      <div style={styles.wrapper}>
        <form style={styles.card} onSubmit={handleSubmit}>
          {/* Left Panel */}
          <div style={styles.leftPanel}>
            <FaFileUpload style={styles.animatedIcon} />
            <h2 style={styles.leftTitle}> Upload</h2>
          </div>

          {/* Right Panel */}
          <div style={styles.formPanel}>
            <div style={styles.title}>
              <FaGraduationCap /> Upload Fee Receipt
            </div>

            <label htmlFor="semester" style={styles.label}>
              Select Semester <span style={{ color: "red" }}></span>
            </label>
            <select
              id="semester"
              style={styles.select}
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              required
            >
              <option value="">-- Select Semester --</option>
              {[...Array(8)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  Semester {i + 1}
                </option>
              ))}
            </select>

            {/* Upload Box with Right-Aligned Preview */}
            <label htmlFor="file-upload" style={styles.uploadBoxCustom}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                {/* Left Section */}
                <div style={{ flex: 1 }}>
                  <div style={styles.uploadIconArea}>
                    <FaFileUpload style={styles.uploadIcon} />
                    <span style={styles.uploadText}>Upload file</span>
                  </div>
                  <div style={styles.subText}>PDF, JPEG or PNG</div>
                </div>

                {/* Right Section */}
                <div style={{ flex: 1, textAlign: "right" }}>
                  {previewUrl ? (
                    <img
                      src={previewUrl}
                      alt="Preview"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100px",
                        borderRadius: "8px",
                        objectFit: "contain",
                      }}
                    />
                  ) : file && file.type === "application/pdf" ? (
                    <div>
                      <FaFileUpload style={{ fontSize: "40px", color: "#1e293b" }} />
                      <div
                        style={{
                          fontSize: "12px",
                          marginTop: "4px",
                          wordBreak: "break-word",
                        }}
                      >
                        {file.name}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>

              <input
                id="file-upload"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                style={styles.input}
                onChange={(e) => {
                  const selectedFile = e.target.files[0];
                  setFile(selectedFile);

                  if (selectedFile && selectedFile.type.startsWith("image/")) {
                    const reader = new FileReader();
                    reader.onloadend = () => setPreviewUrl(reader.result);
                    reader.readAsDataURL(selectedFile);
                  } else {
                    setPreviewUrl(null);
                  }
                }}
                required
              />
            </label>

            <button type="submit" style={styles.button}>
              Submit
            </button>

            {message && <div style={styles.message}>{message}</div>}
          </div>
        </form>
      </div>
    </>
  );
};

export default FeeReceiptUploadModern;
