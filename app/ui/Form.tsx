import React, { useReducer } from "react";
import { ToastContainer } from "react-toastify";
import { motion } from "framer-motion";

import styles from "../../styles/contact.module.css";
import { formReducer, initialState } from "@/app/utils/formReducer";
import { formHandlers } from "@/app/utils/formHandlers";

type Props = {
  onSubmitSuccess?: () => void;
};

const Form: React.FC<Props> = ({ onSubmitSuccess }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { handleChange, handleSubmit } = useHandlers(initialState);

  return (
    <motion.div
      className={styles.formcontainer}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", duration: 1.5 }}
    >
      <form
        className={styles.form}
        onSubmit={(e) => handleSubmit(e, dispatch, state)}
      ></form>
      {/* ... Rest of the form JSX ... */}
      <ToastContainer />
    </motion.div>
  );
};

export default Form;
