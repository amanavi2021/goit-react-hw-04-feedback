import PropTypes from 'prop-types';
import { InfoSection, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => (
  <InfoSection>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </InfoSection>
 )

 Section.propTypes = {
    title:PropTypes.string,
    children:PropTypes.node
 }