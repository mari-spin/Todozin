import PropTypes from 'prop-types';

import CheckboxTask from "../Inputs/CheckboxTask";


import { SectionStyle } from "./style";



const ContentSection = ({children, filterDate, allTasks}) => {
    

    return (
        <SectionStyle>
            <h2>{children}</h2>

            { filterDate && <CheckboxTask filterDate/> }
            { allTasks &&  <CheckboxTask allTasks/> }
        </SectionStyle>
    )
}

ContentSection.propTypes = {
    children: PropTypes.node.isRequired,
    filterDate: PropTypes.bool,
    allTasks: PropTypes.bool,
};

export default ContentSection
