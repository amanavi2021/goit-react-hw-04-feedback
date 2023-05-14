import styled from '@emotion/styled';

export const FeedbackControls = styled.div`
margin-top: 16px;
display: flex;
gap: 8px;
`;

export const FeedbackBtn = styled.button`
display: flex;
align-items: center;
justify-content: center;

padding: 5px 10px;
margin-top:20px;
border: 1px solid #dae1e9;
border-radius: 5px;
background-color: white;
box-sizing: border-box;
cursor:pointer;
height: 24px;
text-transform: capitalize;
transaction: background-color 250ms linear;

&:hover,
&:focus {
background-color: #5f8cea;
}
`;