import TeamCard from '../TeamCard';
import './Team.css';

const Team = (props) => {
    return (
        props.collaborators.length > 0 &&
        <section className='team' style={{ backgroundColor: props.secondColor }}>
            <h3 style={{ borderColor: props.primaryColor }} > {props.name}</h3>
            <div className='cards'>
                {props.collaborators.map(collaborator => <TeamCard key={collaborator.name}
                    name={collaborator.name}
                    jobTitle={collaborator.jobTitle}
                    image={collaborator.image}
                    primaryColor={props.primaryColor}

                />)}
            </div>
        </section>
    )
};

export default Team; 