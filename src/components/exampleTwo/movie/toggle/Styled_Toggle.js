import styled from 'styled-components';
import { Red, Green, Transition } from '../../../../layout/layout.scss';

const StyledToggle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .switch {
    position: relative;
    display: flex;
    width: 90px;
    height: 34px;
    margin-bottom: 0px;
    input {
      opacity: 0;
      width: 0;
      height: 0;
      :checked + .slider {
        background-color: ${Green};
      }
      :checked + .slider:before {
        -webkit-transform: translateX(-55px);
        -ms-transform: translateX(-55px);
        transform: translateX(-55px);
      }
    }
    .slider {
      position: absolute;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 13px 4px 10px;
      overflow: hidden;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 34px;
      background-color: ${Red};
      transition: ${Transition};
      -webkit-transition: ${Transition};
      ::before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 60px;
        bottom: 4px;
        border-radius: 50%;
        background: linear-gradient(to right, #fff, rgb(202, 202, 202));
        box-shadow: 0 0 5px rgba(128, 128, 128, 0.5);
        -webkit-transition: ${Transition};
        transition: ${Transition};
      }
      .on-off {
        position: relative;
        right: -50px;
        transition: ${Transition};
      }
      .on-on {
        transition: ${Transition};
        right: 0px;
      }
      .off-off {
        position: relative;
        left: 0px;
        transition: ${Transition};
      }
      .off-on {
        transition: ${Transition};
        left: -50px;
      }
    }
  }
`

export default StyledToggle;