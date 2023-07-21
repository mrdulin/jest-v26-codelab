import { PowerSettingsNew } from '@mui/icons-material';
import { render } from '@testing-library/react';
import React from 'react';
import LabelIconButton from './LabelIconButton';
import LabelIconButtonDisconnection from './LabelIconButtonDisconnection';

jest.mock('./LabelIconButton', () => {
	return jest.fn(() => <div>Mock LabelIconButton</div>);
});

describe('LabelIconButtonDisconnection', () => {
	it('appelle le composant LabelIconButton avec les bonnes props', () => {
		render(<LabelIconButtonDisconnection />);
		expect(LabelIconButton).toHaveBeenCalledWith(
			{
				title: 'déconnexion',
				icon: PowerSettingsNew,
			},
			{},
		);
	});
});
