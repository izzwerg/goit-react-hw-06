import styles from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Name is required!"),
  number: Yup.string()
    .matches(
      /^[\+]?([0-9]{2})?[(]?([0-9]{3})?[)]?[-\s\.]?[0-9]{2,3}[-\s\.]?[0-9]{2}[-\s\.]?[0-9]{2}$/,
      "Invalid phone number"
    )
    .required("Phone number is required"),
});

const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    values.id = nanoid();
    onAdd(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={styles.form}>
        <div className={styles.inputContainer}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            type="text"
            className={styles.input}
            name="name"
            id={nameFieldId}
          ></Field>
          <ErrorMessage className={styles.error} name="name" component="span" />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            type="tel"
            className={styles.input}
            name="number"
            id={numberFieldId}
          ></Field>
          <ErrorMessage
            className={styles.error}
            name="number"
            component="span"
          />
        </div>
        <button className={styles.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
