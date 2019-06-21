import React      from 'react';
import Paper      from '@material-ui/core/Paper';
import InputBase  from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import styled     from 'styled-components';

const InputContainer = styled(Paper)` 
	display: flex;
	flex-direction: row;
	border-radius: 25px;
	padding: 2px 15px;
	align-items: center;
	height: 46px;
	width: ${props => (props.width ? props.width : '200px')};
	border: 1px solid rgba(223,225,229,1) !important;
	box-shadow: none !important;
	
	&:hover,
	&:active,
  	&:focus {
		box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28) !important;
  	}
`;
const Input = styled(InputBase)`
	margin-left: 8px;
	flex: 1;
`;

const CustomButton = styled(Button)` && {
	width: 100px;
	height: 46px;
	margin-right: -15px;
	border-radius: 0px 25px 25px 0px;
}`

const SearchInput = props => {
	const { width, placeholder, showButton, onClick, ...rest} = props;
	return (
		<InputContainer square width={width} {...rest}>
			<SearchIcon/>
			<Input
				placeholder={placeholder || 'Search'}
				inputProps={{ 'aria-label': placeholder || 'Search' }}
				{...rest}
			/>
			{showButton &&
			<CustomButton color="primary" onClick={onClick}>
				Search
			</CustomButton>}

		</InputContainer>
	)
};

export default SearchInput
