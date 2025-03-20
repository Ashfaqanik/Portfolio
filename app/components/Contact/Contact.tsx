import { useState } from "react";
import styles from "./Contact.module.css";

interface ContactProps {
  isDarkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);

    formData.append("access_key", "b3ca63db-ab71-400d-b7cb-42e76b909f4b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setModalMessage(
        "Thank you! Your message has been received. I'll get back to you soon. 😊"
      );
      setIsModalOpen(true);
      formElement.reset();
    } else {
      console.error("Error", data);
      setModalMessage("Oops! Something went wrong. Please try again.");
      setIsModalOpen(true);
    }
  };

  return (
    <div id="contact" className={styles.contactSection}>
      <h4 className={styles.contactHeading}>Contact Me</h4>
      <p className={styles.contactDescription}>
        I’d love to connect! If you have any questions, thoughts, or feedback,
        don’t hesitate to reach out.
      </p>
      <div
        className={`${styles.contactContainer} ${
          isDarkMode ? styles.contactContainerDark : ""
        }`}
      >
        <h2 className={styles.contactTitle}>Get in touch</h2>

        <form onSubmit={onSubmit} className={styles.formContainer}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className={`${styles.inputField} ${
                isDarkMode ? styles.inputFieldDark : ""
              }`}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className={`${styles.inputField} ${
                isDarkMode ? styles.inputFieldDark : ""
              }`}
            />
          </div>
          <textarea
            name="message"
            placeholder="Enter your message"
            required
            className={`${styles.textArea} ${
              isDarkMode ? styles.textAreaDark : ""
            }`}
          ></textarea>

          <button type="submit" className={styles.submitButton}>
            Submit Now
          </button>
        </form>

        {/* Modal Alert */}
        {isModalOpen && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
              <p>{modalMessage}</p>
              <button
                onClick={() => setIsModalOpen(false)}
                className={styles.modalButton}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
