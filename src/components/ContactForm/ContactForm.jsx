import { Formik, Form, Field } from 'formik';

export const ContactForm = ({ addContact }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    addContact(values);
    resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <label htmlFor="name">
          Name
          <Field type="text" name="name" />
        </label>
        <label htmlFor="number">
          Number
          <Field type="text" name="number" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
