import { useEffect } from 'react';
import Logo from 'assets/images/services/services-banners/logo-coming.png';


type Props = {};

const ComingSoonSection = (props: Props) => {
    useEffect(() => {
        document.body.classList.add('Coming')
        return () => {
            document.body.classList.remove('Coming')
        }

    }, [])
    return (

        <>
            <section className='comming-page'>

                <div className='container'>
                    <div className='Comming-content'>
                        <img src={Logo} alt="" />
                        <h4>SOMETHING AWESOME IS COMING</h4>
                        <p className="coming-description">It's going to be amazing! Waiting for a while and finding out when it's going to be</p>
                        <a className="custom-btn-design" href="/">Back to Home</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ComingSoonSection;