import styled from 'styled-components';

type CaseButtonProps = {
  active?: boolean;
  activeClicked?: boolean;
};

export const CaseButton = styled.div<CaseButtonProps>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px 20px;
  padding-top: 12px;
  cursor: pointer;
  color: ${props => {
    if (props.theme.main === 'dark') {
      if (props.active || props.activeClicked) {
        return '#fff';
      } else {
        return '#E5E5E5';
      }
    } else {
      if (props.active || props.activeClicked) {
        return '#14213d';
      } else {
        return 'color: rgba(20,33,61,0.4);';
      }
    }
  }};
  border-bottom: ${props => {
    if (props.active) {
      return '2px solid #fca311';
    } else if (props.activeClicked) {
      return '2px solid #5ba4ca';
    } else {
      return '2px solid transparent';
    }
  }};
  box-sizing: border-box;
  white-space: nowrap;
`;
