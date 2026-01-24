import SectionHeader from '../../global/SectionHeader'
import data from '../../../data/about';
import head from '../../../data/headers';

function AboutContent() {
    return (
        <div className='about-content'>
            <SectionHeader {...head['about']} />
            {data.map(item => (
                <p className="about__desc section__desc">{item}</p>
            ))}
        </div>
    )
}

export default AboutContent;