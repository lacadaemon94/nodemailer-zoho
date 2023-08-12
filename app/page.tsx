// @/app/page.tsx ---> Home
// UI
import Form from "./ui/Form";

// Styles
import styles from "./styles/contact.module.css";

export default function Page() {
  return (
    <main className={styles.contact}>
      <Form />
    </main>
  );
}
