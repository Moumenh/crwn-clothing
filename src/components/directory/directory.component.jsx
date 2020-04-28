import React from 'react';
import { connect } from 'react-redux'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'

import './directory.styles.scss'

import MenuItem from '../menu-item/menu-item.component';


const Directory = ({sections}) => ( 
  
            <div className='directory-menu'>
                {sections.map(({id, ...otherSectionsProps})=> (
                    <MenuItem key={id} {...otherSectionsProps}/>)
                )}
            </div>
        )

    
const mapStateToProps = (state) => ({
    sections: selectDirectorySections(state),
})

export default connect(mapStateToProps)(Directory);