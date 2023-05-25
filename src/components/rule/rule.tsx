import { useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { ImArrowRight2 } from "react-icons/Im";
import { ImArrowUpLeft2 } from "react-icons/Im";
import { ImArrowDownLeft2 } from "react-icons/Im";
import "./rule.css";
import paper from "../../assets/images/icon-paper.svg";
import rock from "../../assets/images/icon-rock.svg";
import scissors from "../../assets/images/icon-scissors.svg";

const Rule: React.FC = () => {
  const [showRule, setShowRule] = useState(false);

  const handleClick = () => {
    setShowRule(true);
  };
  const handleRemoveNotice = () => {
    setShowRule(false);
  };
  return (
    <div className='rule-container'>
      <button onClick={handleClick} className='btn-rules'>
        RULES
      </button>
      {showRule && (
        <div className='rule-nav'>
          <div>
            <h3>RULES</h3>
            <button className='remove-rule' onClick={handleRemoveNotice}>
              <TfiClose className='close' />
            </button>
          </div>

          <div className='rule-content'>
            <div className='arrow-down'>
              <ImArrowDownLeft2 className='icon' />
              <h4>BEATS</h4>
            </div>
            <img src={paper} alt='paper' className='img-rule-paper' />

            <div className='arrow-right'>
              <ImArrowRight2 className='icon' />
              <h4>BEATS</h4>
            </div>
            <img src={rock} alt='rock' className='img-rule-rock' />

            <div className='arrow-up'>
              <h4>BEATS</h4>
              <ImArrowUpLeft2 className='icon' />
            </div>
            <img src={scissors} alt='scissors' className='img-rule-scissors' />
          </div>
        </div>
      )}
    </div>
  );
};

export default Rule;
