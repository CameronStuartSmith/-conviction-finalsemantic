import React, { Component } from 'react';

import { FSInput } from '@conviction/finalsemantic';
import { Form as FinalForm, Field } from 'react-final-form';
import { Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const App = () => (
	<div style={{ padding: 30 }}>
		<FinalForm
			onSubmit={(values) => console.log(values)}
			render={({ handleSubmit, values }) => (
				<Form onSubmit={handleSubmit}>
					<FSInput name="name" type="password" />
					<p>{JSON.stringify(values)}</p>
				</Form>
			)}
		/>
	</div>
);

export default App;