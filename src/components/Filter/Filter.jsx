import { Formik, Field, Form } from 'formik';

export const Filter = ({ value, onChange }) => {
  const handleChange = e => {
    onChange(e);
  };
  return (
    <>
      <p>Find contacts by name</p>
      <Formik>
        <Form>
          <Field
            type="text"
            name="filter"
            value={value}
            onChange={handleChange}
          ></Field>
        </Form>
      </Formik>
    </>
  );
};
