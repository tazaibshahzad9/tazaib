import styled from 'styled-components'

const TEXT = styled.h3`
    font-size: 16px;
    font-weight: 400;
    text-transform: ${props => (props.Lcase?props.Lcase:'lowercase')};
    margin-bottom: 20px;
    margin-top: ${props => (props.Mtop?props.Mtop:'')} ;
    letter-spacing: ${props => (props.Lspacing?props.Lspacing:'0.5px')};
    color: #797979;
`
export default TEXT;
