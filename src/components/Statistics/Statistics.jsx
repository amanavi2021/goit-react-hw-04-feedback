import PropTypes from 'prop-types';
import { StatisticsList, StatisticItem } from './Statistics.styled';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
        <StatisticsList>
            <StatisticItem>Good: {good}</StatisticItem>
            <StatisticItem>Neutral: {neutral}</StatisticItem>
            <StatisticItem>Bad: {bad}</StatisticItem>
            <StatisticItem>Total: {total}</StatisticItem>
            <StatisticItem>Positive feedback: {positivePercentage}%</StatisticItem>
        </StatisticsList>
    )


Statistics.propTypes = {
    good:PropTypes.number.isRequired,
    neutral:PropTypes.number.isRequired,
    bad:PropTypes.number.isRequired,
    total:PropTypes.number,
    positivePercentage: PropTypes.number

}
