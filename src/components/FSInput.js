import React from 'react';
import { Field } from 'react-final-form';
import PropTypes from 'prop-types';
import { Form, Input } from 'semantic-ui-react';


const FSInput = ({ name, id, required, label, ...rest }) => (
	<Field name={name}>
		{({ input, meta }) => (
			<Form.Field required={required} error={meta.error && meta.touched}>
				{ label && <label htmlFor={id}>{label}</label> }
				<Input {...input} {...rest} />
				{ meta.error && meta.touched && <span className="error">{meta.error}</span> }
			</Form.Field>
		)}
	</Field>
);

FSInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.bool,
  ]),
  id: PropTypes.string,
  required: PropTypes.bool,
};

FSInput.defaultProps = {
  label: false,
  required: false,
};

export default FSInput;
