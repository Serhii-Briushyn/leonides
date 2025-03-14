import { useState } from "react";
import styles from "./FormBlock.module.css";

const FormBlock = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Toto pole musí byť vyplnené";
    if (!formData.email.trim()) {
      newErrors.email = "Toto pole musí byť vyplnené";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Zadajte platný e-mail";
    }
    if (!formData.phone.trim()) newErrors.phone = "Toto pole musí byť vyplnené";
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = "Správa musí obsahovať aspoň 10 znakov";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formWrapper}>
        <div className={styles.leftColumn}>
          {["name", "email", "phone"].map((field) => (
            <label key={field}>
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder={field.toUpperCase()}
                value={formData[field]}
                onChange={(e) =>
                  setFormData({ ...formData, [field]: e.target.value })
                }
              />
              {errors[field] && (
                <span className={styles.error}>{errors[field]}</span>
              )}
            </label>
          ))}
        </div>
        <div className={styles.rightColumn}>
          <label className={styles.messageWrapper}>
            <textarea
              name="message"
              placeholder="ODKAZ..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
            {errors.message && (
              <span className={styles.error}>{errors.message}</span>
            )}
          </label>
        </div>
      </div>
      <button type="submit" className={styles.button}>
        ODOSLAŤ
      </button>
    </form>
  );
};

export default FormBlock;
