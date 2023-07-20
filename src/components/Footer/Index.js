import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <section className='icons'>
                <img src='images/fb.png' alt='Facebook Logo' />
                <img src='images/tw.png' alt='Twitter Logo' />
                <img src='images/ig.png' alt='Instagram Logo' />
            </section>
            <div className='logo'>
                <img src='images/logo.png' alt='Organo Logo' />
            </div>
            <div className='info'>
                <p>Desenvolvido por Alura</p>
            </div>
        </div>


    )
}

export default Footer;