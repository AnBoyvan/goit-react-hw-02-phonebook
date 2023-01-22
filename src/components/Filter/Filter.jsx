import PropTypes from 'prop-types';
import { Formik, Field, Form } from 'formik';
import css from './Filter.module.css';

export const Filter = ({ value, onChange }) => {
  const handleChange = e => {
    onChange(e.currentTarget.value);
  };

  return (
    <>
      <p className={css.title}>Find contacts by name</p>
      <Formik>
        <Form>
          <Field
            className={css.input}
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

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
