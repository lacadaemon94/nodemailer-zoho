"use client";
import React, { useReducer } from "react";
import { ToastContainer } from "react-toastify";
import { motion } from "framer-motion";

// Custom Hooks
import { formReducer, initialState } from "@/app/utils/formReducer";
import { useHandlers } from "@/app/utils/formHandlers";

// UI
import Button from "@/app/ui/Button";
import SendIcon from "@/app/assets/icons/SendIcon";
import LoadingIcon from "@/app/assets/icons/LoadingIcon";
import DoneIcon from "@/app/assets/icons/DoneIcon";

// Styles
import "react-toastify/dist/ReactToastify.css";
import styles from "../styles/contact.module.css";

type Props = {
  // In case you need some other action in the parent
  onSubmitSuccess?: () => void;
};

const Form: React.FC<Props> = ({ onSubmitSuccess }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { handleChange, handleSubmit } = useHandlers(initialState, dispatch);

  return (
    <motion.div
      className={styles.formcontainer}
      initial={{
        opacity: 0,
        x: 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        duration: 1.5,
      }}
    >
      <form
        className={styles.form}
        onSubmit={(e) => handleSubmit(e, dispatch, state)}
        data-isstatus={state.status}
      >
        <div className={styles.row}>
          <div className={styles.inputwrapper}>
            <input
              required={true}
              type="text"
              name="fname"
              autoComplete="no-autocomplete-fname"
              className={styles.formfield}
              onChange={handleChange}
            />
            <label className={styles.inputlabel}>Nombre</label>
          </div>
          <div className={styles.inputwrapper}>
            <input
              required={true}
              type="text"
              name="lname"
              autoComplete="no-autocomplete-lname"
              className={styles.formfield}
              onChange={handleChange}
            />
            <label className={styles.inputlabel}>Apellido</label>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.inputwrapper}>
            <input
              required={true}
              type="text"
              name="email"
              autoComplete="no-autocomplete-email"
              className={styles.formfield}
              onChange={handleChange}
              style={{ textTransform: "none" }}
            />
            <label className={styles.inputlabel}>Correo</label>
          </div>
          <div className={styles.inputwrapper}>
            <input
              required={true}
              type="text"
              name="phone"
              autoComplete="no-autocomplete-phone"
              className={styles.formfield}
              onChange={handleChange}
              style={{ textTransform: "none" }}
            />
            <label className={styles.inputlabel}>Teléfono</label>
          </div>
        </div>
        <fieldset
          name="service"
          className={styles.fieldset}
          onChange={handleChange}
        >
          <legend>¿Que tipo de servicio necesitas?</legend>
          <input
            type="radio"
            id="web-design"
            name="service"
            value={"web design"}
          />
          <label htmlFor="web-design">
            <button type="button">
              <div></div>
            </button>
            <p>Diseño Web</p>
          </label>
          <input type="radio" id="app-dev" name="service" value={"app dev"} />
          <label htmlFor="app-dev">
            <button type="button">
              <div></div>
            </button>
            <p>Desarrollo de App</p>
          </label>
          <input
            type="radio"
            id="d-marketing"
            name="service"
            value={"digital marketing"}
          />
          <label htmlFor="d-marketing">
            <button type="button">
              <div></div>
            </button>
            <p>Marketing Digital</p>
          </label>
          <input type="radio" id="other" name="service" value={"other"} />
          <label htmlFor="other">
            <button type="button">
              <div></div>
            </button>
            <p>Otros</p>
          </label>
        </fieldset>
        <div className={styles.messagewrapper}>
          <textarea
            name="message"
            id="message"
            minLength={20}
            maxLength={250}
            placeholder="Escribe tu mensaje"
            autoComplete="off"
            onChange={handleChange}
          ></textarea>
          <div
            className={styles.textareacounter}
            style={{
              color:
                state.values.message.length >= 250
                  ? "#cc3300"
                  : "var(--color-neutral-light-2)",
            }}
          >
            {state.messageLength}/250
          </div>
        </div>
        <Button
          type="submit"
          className={styles.submit}
          disabled={state.status === "sent" ? true : false}
        >
          <p>{`${state.status}`}</p>
          <div>
            {state.status === "send" && <SendIcon />}
            {state.status === "sending..." && <LoadingIcon />}
            {state.status === "sent" && <DoneIcon />}
          </div>
        </Button>
      </form>
      <ToastContainer />
    </motion.div>
  );
};

export default Form;
