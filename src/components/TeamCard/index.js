import './TeamCard.css';

const TeamCard = ({name, image, jobTitle, primaryColor}) =>{
    return (
        <div className='teamCard'>
            <div className='header' style={{backgroundColor: primaryColor}}>
                <img src={image} alt={name}/>
            </div>

            <div className='body'>
                <h4>{name}</h4>
                <h5>{jobTitle}</h5>
            </div>
        </div>

    )
}

export default TeamCard;