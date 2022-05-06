import React from 'react'
import Experience from '../../components/templates/Experience/Experience'
import Helmet from '../../components/templates/Helmet/Helmet'
import Intro from '../../components/templates/Intro/Intro'

const About = () => {
    return (
        <div className='About'>
            <Helmet title='About'>
                <Intro />
                <Experience />
            </Helmet>
        </div>

    )
}

export default About