import React       from 'react';
import InputLabel  from '@material-ui/core/InputLabel';
import MenuItem    from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select      from '@material-ui/core/Select';
import styled      from 'styled-components';

const Control = styled(FormControl)` 
	&& {
		width: 100px;
		margin-right: 15px;
		font-size: 13px;
	}
`;

const SortControl = props => {
	const { label, value, onChange, items, ...rest} = props;
	return (
		<Control {...rest}>
			<InputLabel>{label}</InputLabel>
			<Select
				value={value}
				onChange={onChange}
			>
				<MenuItem value=''><em>None</em></MenuItem>
				{items.map( item => (
					<MenuItem key={item.value} value={item.value}>{item.text}</MenuItem>
				))}

			</Select>
		</Control>
	)
}

export default SortControl
