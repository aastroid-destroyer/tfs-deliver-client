import React from 'react';
import Marquee from 'react-fast-marquee';
import amazon from '../../assets/brands/amazon.png'
import amazon_vector from '../../assets/brands/amazon_vector.png'
import casio from '../../assets/brands/casio.png'
import moonstar from '../../assets/brands/moonstar.png'
import randstad from '../../assets/brands/randstad.png'
import star from '../../assets/brands/star.png'
import start_people from '../../assets/brands/start_people.png'

const BrandMarquee = () => {
    // Replace these URLs with your actual image assets
    const brands = [ amazon, amazon_vector, casio, moonstar, randstad, star, start_people ]

    const styles = {
        container: {
            padding: '40px 0',
            textAlign: 'center',
        },
        heading: {
            color: '#003d4d',
            fontSize: '1.5rem',
            fontWeight: '700',
            marginBottom: '30px',
            fontFamily: 'sans-serif',
        },
        imageWrapper: {
            margin: '0 40px',
            display: 'flex',
            alignItems: 'center',
        },
        image: {
            height: '40px',
            width: 'auto',
            display: 'block',
            transition: 'all ease',
        }
    };

    return (
        <div style={styles.container} className='mt-10 mb-10'>
            <h2 style={styles.heading}>We've helped thousands of sales teams</h2>

            <Marquee
                gradient={false}
                speed={50}
                pauseOnHover={true}
            >
                {brands.map((brand, index) => (
                    <div key={index} style={styles.imageWrapper}>
                        <img
                            src={brand}
                            style={styles.image}
                            onMouseOver={(e) => e.currentTarget.style.filter = 'grayscale(0%) opacity(1)'}
                            onMouseOut={(e) => e.currentTarget.style.filter = 'grayscale(100%) opacity(0.8)'}
                        />
                    </div>
                ))}
            </Marquee>
            <div className='mt-20 border border-green-900 border-dashed'>

            </div>
        </div>
    );
};

export default BrandMarquee;