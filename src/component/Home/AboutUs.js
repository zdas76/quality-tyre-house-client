import React from 'react';
import founder from '../../images/founder.png'

const AboutUs = () => {
    return (
        <div className='bg-slate-100 my-12'>
            <h1 className='text-5xl py-6 font-bold'>About Quality Tyre House </h1>

            <div className='xl:flex self-center'>
                <div className='basis-2/3'>
                    <p className='text-justify md:px-12 md:mx-12 mx-6 py-6 text-xl'>
                        In 1921, just a few years after its establishment in 1917, Yokohama Rubber Co., Ltd. launched Japan 's first cord-type tires. Since then, we have remained at the cutting-edge of tire technology. <br /><br />

                        Since its establishment, the Company has manufactured a diversity of products as a comprehensive rubber chemicals manufacturer. In 1992, Yokohama formulated its basic philosophy "To enrich people's lives and contribute to their greater happiness and well-being by devoting our wholehearted energies and advance technology to the creation of beneficial products."

                        <br /><br />

                        Besides its mainstay automobile tires, Yokohama offers a broad spectrum of products that range from golf, industrial and marine-related products to aerospace products.

                        <br /><br />

                        In the field of high-performance tires, Yokohama is synonymous with superb sports car performance combined with high levels of comfort.

                        <br /><br />

                        The superiority of all our tire lines is soundly based. We draw on the know-how we have accumulated through competing in motor sports at the highest level, and apply it to the design and manufacture of tires for use on production vehicles.

                        <br /><br />

                        Yokohama Rubber Co. determined to stay abreast of consumer demand globally; anticipating changing needs and meeting them through the very latest in tire production technologies.
                    </p>
                </div>
                <div className='basis-1/3'>
                    <img className='mx-auto w-96' src={founder} alt="Founder" />
                </div>
            </div>

        </div>
    );
};

export default AboutUs;