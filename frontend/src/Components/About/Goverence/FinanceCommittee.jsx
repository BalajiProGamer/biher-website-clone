import React, { useState } from "react";
import { FaUserPlus, FaSave, FaTrash } from "react-icons/fa";

const styles = {
  container: {
    maxWidth: "1000px",
    margin: "40px auto",
    padding: "30px",
    background: "#f9fbfd",
    borderRadius: "10px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.06)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  header: {
    background: "linear-gradient(to right, #003366, #00509e)",
    color: "#fff",
    padding: "18px 20px",
    borderRadius: "8px",
    fontSize: "22px",
    fontWeight: "600",
    marginBottom: "30px",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  },
  formGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "24px",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  label: {
    fontSize: "13px",
    fontWeight: "500",
    marginBottom: "6px",
    color: "#2f3542",
  },
  input: {
    padding: "12px",
    fontSize: "14px",
    borderRadius: "6px",
    border: "1px solid #ced6e0",
    backgroundColor: "#fff",
    transition: "all 0.2s ease-in-out",
    boxShadow: "inset 0 1px 3px rgba(0,0,0,0.05)",
  },
  inputFocus: {
    border: "1px solid #00509e",
  },
  buttonContainer: {
    marginTop: "40px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  button: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "12px 22px",
    fontSize: "15px",
    fontWeight: "600",
    color: "#fff",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
  },
  addButton: {
    backgroundColor: "#28a745",
  },
  updateButton: {
    backgroundColor: "#007bff",
  },
  deleteButton: {
    backgroundColor: "#dc3545",
  },
};

const defaultStudent = {
  admissionNo: "",
  firstName: "",
  lastName: "",
  fullName: "",
  email: "",
  registerNumber: "",
  dob: "",
  contactInfo: {
    phoneNo: "",
    address: "",
  },
};

const ManageStudents = () => {
  const [student, setStudent] = useState(defaultStudent);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleNestedChange = (section, key, value) => {
    setStudent((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value,
      },
    }));
  };

  const handleAddStudent = () => {
    console.log("Adding student:", student);
  };

  const handleUpdateStudent = () => {
    console.log("Updating student:", student);
  };

  const handleDeleteStudent = () => {
    console.log("Deleting student:", student.admissionNo);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>🎓 Manage Student Details</div>

      <div style={styles.formGrid}>
        {[
          { label: "Admission No", name: "admissionNo", value: student.admissionNo },
          { label: "First Name", name: "firstName", value: student.firstName },
          { label: "Last Name", name: "lastName", value: student.lastName },
          { label: "Full Name", name: "fullName", value: student.fullName },
          { label: "Email", name: "email", value: student.email },
          { label: "Register Number", name: "registerNumber", value: student.registerNumber },
        ].map((field) => (
          <div key={field.name} style={styles.field}>
            <label style={styles.label}>{field.label}</label>
            <input
              type="text"
              style={styles.input}
              name={field.name}
              value={field.value}
              onChange={handleChange}
            />
          </div>
        ))}

        <div style={styles.field}>
          <label style={styles.label}>Phone Number</label>
          <input
            type="text"
            style={styles.input}
            name="phoneNo"
            value={student.contactInfo.phoneNo}
            onChange={(e) =>
              handleNestedChange("contactInfo", "phoneNo", e.target.value)
            }
          />
        </div>

        <div style={styles.field}>
          <label style={styles.label}>Address</label>
          <input
            type="text"
            style={styles.input}
            name="address"
            value={student.contactInfo.address}
            onChange={(e) =>
              handleNestedChange("contactInfo", "address", e.target.value)
            }
          />
        </div>

        <div style={styles.field}>
          <label style={styles.label}>Date of Birth</label>
          <input
            type="date"
            style={styles.input}
            name="dob"
            value={student.dob}
            onChange={handleChange}
          />
        </div>
      </div>

      <div style={styles.buttonContainer}>
        <button
          style={{ ...styles.button, ...styles.addButton }}
          onClick={handleAddStudent}
        >
          <FaUserPlus /> Add
        </button>
        <button
          style={{ ...styles.button, ...styles.updateButton }}
          onClick={handleUpdateStudent}
        >
          <FaSave /> Update
        </button>
        <button
          style={{ ...styles.button, ...styles.deleteButton }}
          onClick={handleDeleteStudent}
        >
          <FaTrash /> Delete
        </button>
      </div>
    </div>
  );
};

export default ManageStudents;
