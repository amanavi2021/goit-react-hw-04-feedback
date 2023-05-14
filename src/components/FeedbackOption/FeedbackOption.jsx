import PropTypes from 'prop-types';
import { FeedbackControls, FeedbackBtn} from './FeedbackOption.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <FeedbackControls>
            {options.map(option => 
            <FeedbackBtn
             key={option}
             type="button"
             name={option}
             onClick={onLeaveFeedback}
            >{option}
            </FeedbackBtn>)}
       </FeedbackControls>  
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func
}