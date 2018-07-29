import React from 'react'
import styled, { css } from 'styled-components'

import { Row, Col } from '../grid'
import { Input, Label } from './forms_core'
import { HelperText } from '../typo'
import { Button } from '../buttons'


export const LayerGroup = styled.div`
	width: 100%;
	position: relative;
	padding: 2px 4px ${({ noHelper }) => noHelper ? '2px' : '18px'};
	margin: 2px 0 5px;
	overflow: hidden;
`
export const GroupLabel = styled(Label)`
	display: block;
	font-size: 13px;
	color: inherit;
	font-weight: bold;
	width: 100%;
	padding: 2px 10px;
	${({ theme: {colors}, error })=> error ? css`color:${colors.formError}` : ''}

	${({ required }) => !required ? null : css`
		&:after {
			content: "*"
		}
	`}
`

export const GroupInput = styled(Input)`
	width:100%;
	color: rgba(0,0,0,.6);
	box-shadow: 0 0 5px ${({ theme : { colors } , error }) => error ? colors.formError : colors.formInput};
	transition: 0.2s;

	&:focus {
		color: #000;
		box-shadow: 0 0 10px ${({ theme : { colors } , error }) => error ? colors.formError : colors.formInput};
	}
`

export const GroupHelperText = styled(HelperText)`
	position: absolute;
	bottom: 0;
	right: 0;
	left: 10px;
	${({ theme: {colors}, error })=> error ? css`color:${colors.formError}` : ''}
`

export const GroupButtonSubmit = styled(Button)`
	width: 100%;
	padding: 8px 10px;
	font-size: 18px;


	@media (min-width: ${props => props.theme.bp.sm}px) {
		margin-left: 50%;
		transform: translate(-50%, 0);
		width: 300px;
		font-size: 15px;
	}


	@media (min-width: ${props => props.theme.bp.md}px) {
		padding: 4px 10px;
	}
`