import React from 'react'
import Footer from '../../components/Footer'
import Header from '/src/components/Header'


const Subsidiaries = () => {
  return (
    <main id="main" className='pt-10 md:pt-20'>
        <Header />
        <Header />
        <section className='flex flex-col gap-3 px-4 py-12 mt-2 text-white md:px-8 bg-black/70'>
            <h1 className="mb-3 text-3xl font-extrabold text-white font-argentinum">Our Subsidiaries</h1>
            {/* <span className='font-bold'>Home / Contact Us</span> */}
        </section>
        <div className="px-4 pt-8 md:px-8">
            <section className="mb-20" id="dcl">
                <h2 className='mt-4 mb-2 text-2xl font-bold text-green'>Dordorian Concept Limited</h2>
                <p className="mb-3">
                    Dordorian Concept Limited is an indigenous business and human capacity development company duly registered with the Corporate Affairs Commission (CAC) with RC-804640 and endorsed by the Advertising Practitioners Council of Nigeria APCON with the registration number 2280 to carry out advertising and auxiliary services.
                </p>
                <h6 className='mb-2 font-semibold'>Mission</h6>
                <p className="mb-3">
                    To expand the reach of our clients, increase cash flow and productivity through corporate training workshops, business mentorship, and advertisement.
                </p>
                <h6 className='mb-2 font-semibold'>Vision</h6>
                <p className="mb-3">
                    To become renowned both locally and internationally in the field of capacity development training, advertisement, real estate, and education.
                </p>
                <h6 className='mb-2 font-semibold'>Objectives</h6>
                <ul className="pl-8 mb-3 list-disc md:pl-12">
                    <li>To increase the visibility of our client's businesses.</li>
                    <li>To provide professional training through workshops and seminars for our clients to increase their competitive advantage.</li>
                    <li>To consult for professional institutes and be the bridge for prospective candidates.</li>
                    <li>To partner with relevant stakeholders in the execution of developmental projects in Bayelsa state and beyond.</li>
                    <li>To provide capacity development for those in academia.</li>
                </ul>
                <h6 className='mb-2 font-semibold'>Value Proposition</h6>
                <ul className="pl-8 mb-3 list-disc md:pl-12">
                    <li>Capacity development</li>
                    <li>Business expansion</li>
                    <li>Visibility</li>
                    <li>Trust</li>
                    <li>Career growth</li>
                </ul>
                <h6 className='flex gap-2'><span className='min-w-[100px]'>Contact Us:</span> <span className='font-medium'>07037193301, 09024401562.</span></h6>
                <h6 className='flex gap-2'>
                    <span className='min-w-[100px]'>Address:</span> 
                    <div className='flex flex-col'>
                        <span className='font-medium'>260, Sam Inokoba street, adjacent Sunky Supermarket, off Azikoro Road, Ekeki, Yenegoa, Bayelsa State.</span>
                        <span className='font-medium'>Grace Amazing Plaza, 2 Church Street by Iwofe road, Port Harcourt. River's State.</span>
                    </div> 
                </h6>
        </section>

        <section className="mb-20" id="btu">
                <h2 className='mt-4 mb-2 text-2xl font-bold text-green'>Business and Technology (BusiTech) University (Coming Soon)</h2>
                <p className="mb-3">
                Business and Technology University (BUSITECH) differs from the traditional business schools because of its added business programs and hands-on learning. It is to be anchored as a professional business school of product creation and finishing. Our niche shall be to build entrepreneurs and professional businessmen and women who will take care of business management bottlenecks (BMBs). Our unique selling point (USP) shall be that every student during their learning period establishes and float their businesses. This way, graduates leave with established businesses ready for the market.
                We shall be partnering with numerous professional institutes like the Institute of Strategic Management Nigeria, Chartered Institute of Administration, and some foreign Universities to render world-className standard and professional services to make our students and graduates stand out from the crowd.</p>
                <h6 className='mb-2 font-semibold'>Mission</h6>
                <p className="mb-3">
                To expand the reach of our clients, increase cash flow and productivity through corporate training workshops, business mentorship, and advertisement.
                </p>
                <h6 className='mb-2 font-semibold'>Vision</h6>
                <p className="mb-3">
                Through our curriculum centred on practical trainings, innovative mind development, business coaching, and mentorship.
                </p>
                <h6 className='flex gap-2'> <span className='min-w-[100px]'>Contact Us:</span> <span className='font-medium'>07037193301, 09024401562.</span></h6>
                <h6 className='flex gap-2'>
                    <span className='min-w-[100px]'>Address:</span> 
                    <div className='flex flex-col'>
                        <span className='font-medium'>260, Sam Inokoba street, adjacent Sunky Supermarket, off Azikoro Road, Ekeki, Yenegoa, Bayelsa State.</span>
                        <span className='font-medium'>Grace Amazing Plaza, 2 Church Street by Iwofe road, Port Harcourt. River's State.</span>
                    </div> 
                </h6>
                {/* <h6>Administrative Address: <span className='font-medium'>260 Sam Inokoba street, adjacent Sunky Supermarket, off Azikoro Road, Ekeki, Yenegoa, Bayelsa State.</span></h6>
                <h6>Administrative Address 1: <span className='font-medium'>260, Sam Inokoba street, adjacent Sunky Supermarket, off Azikoro Road, Ekeki, Yenegoa, Bayelsa State.</span></h6>
                <h6>Administrative Address 2: <span className='font-medium'>Grace Amazing Plaza, 2 Church Street by Iwofe road, Port Harcourt. River's State</span></h6>
                <h6 className='flex gap-2'> <span className='min-w-[100px]'>Contact Us:</span> <span className='font-medium'>07037193301, 09024401562.</span></h6> */}
        </section>

        <section className="mb-20" id="bbm">

                <h2 className='mt-4 mb-2 text-2xl font-bold text-green'>BYS Business Magazine</h2>
                <p className="mb-3">
                BYS Business Magazine is a publication that captures businesses in Bayelsa State. On BYS Business Magazine, we showcase businesses in a fun and friendly way to potential customers in search of where to buy what.<br />
                We distribute the magazine across a wide range of locations including government ministries, hotels, airport etc.<br /><br />
                BYS Business Magazine is the printed version of yenreach.com with the aim of increasing the reach and visibility of local businesses.<br />
                It is a publication of Dordorian Concept Ltd a human capacity development and consultancy firm.
                </p>
                {/* <h6 className='mb-2 font-semibold'>Administrative Address: <span className='font-medium'>260 Sam Inokoba street, adjacent Sunky Supermarket, off Azikoro Road, Ekeki, Yenegoa, Bayelsa State.</span></h6>
                <h6 className='mb-2 font-semibold' className='flex gap-2'> <span className='min-w-[100px]'>Contact Us:</span> <span className='font-medium'>07037193301, 09024401562.</span></h6> */}
                <h6 className='flex gap-2'> <span className='min-w-[100px]'>Contact Us:</span> <span className='font-medium'>07037193301, 09024401562.</span></h6>
                <h6 className='flex gap-2'>
                    <span className='min-w-[100px]'>Address:</span> 
                    <div className='flex flex-col'>
                        <span className='font-medium'>260, Sam Inokoba street, adjacent Sunky Supermarket, off Azikoro Road, Ekeki, Yenegoa, Bayelsa State.</span>
                        <span className='font-medium'>Grace Amazing Plaza, 2 Church Street by Iwofe road, Port Harcourt. River's State.</span>
                    </div> 
                </h6>
        </section>
        <section className="mb-20" id="bmc">
                <h2 className='mt-4 mb-2 text-2xl font-bold text-green'>BusiTech Model College</h2>
                <h6 className='mb-2 font-semibold'>Mission</h6>
                <p className="mb-3">
                Through our well-crafted curriculum centred on students' capacity-building specifically designed to provide quality vocational education.
                </p>
                <h6 className='mb-2 font-semibold'>Vision</h6>
                <p className="mb-3">
                Become Africa’s foremost breeding ground for business and technical education for secondary school students.
                </p>
                <h6 className='mb-2 font-semibold'>Why we exist?</h6>
                <ul className="pl-8 mb-3 list-disc md:pl-12">
                <li>To provide an effective breeding ground for learners in preparing them for the world of work.</li>
                <li>To create an academic pool of secondary school innovators.</li>
                <li>To create a platform for technical and business innovation for secondary school students.</li>
                <li>To be a home for children with creative ideas to find expression.</li>
                <li>To provide affordable and standard business and technical education for secondary school students in a serene environment with well-equipped facilities.</li>
                </ul>
                <h6 className='mb-2 font-semibold'>Core Values</h6>
                <ul className="pl-8 mb-3 list-disc md:pl-12">
                <li>Creativity</li>
                <li>Exposure</li>
                <li>Excellence</li>
                <li>Self Reliance</li>
                </ul>
                <h6 className='mb-2 font-semibold'>Motto: <span>Redefining Secondary School Education</span></h6>
                {/* <h6>Address: <span className='font-medium'>260 Sam Inokoba street, adjacent Sunky Supermarket, off Azikoro Road, Ekeki, Yenegoa, Bayelsa State.</span></h6>
                <h6 className='flex gap-2'> <span className='min-w-[100px]'>Contact Us:</span> <span className='font-medium'>07037193301, 09024401562.</span></h6> */}
                <h6 className='flex gap-2'> <span className='min-w-[100px]'>Contact Us:</span> <span className='font-medium'>07037193301, 09024401562.</span></h6>
                <h6 className='flex gap-2'>
                    <span className='min-w-[100px]'>Address:</span> 
                    <div className='flex flex-col'>
                        <span className='font-medium'>260, Sam Inokoba street, adjacent Sunky Supermarket, off Azikoro Road, Ekeki, Yenegoa, Bayelsa State.</span>
                        <span className='font-medium'>Grace Amazing Plaza, 2 Church Street by Iwofe road, Port Harcourt. River's State.</span>
                    </div> 
                </h6>
        </section>

        <section className="mb-20" id="tec">
                <h2 className='mt-4 mb-2 text-2xl font-bold text-green'>TEC Industrial Park</h2>
                <p className="mb-3">
                TEC Industrial Park spans across five hundred plots of land enclosing industrial, commercial, and residential zones designed to promote the industrialization of Bayelsa state.
                It is strategically situated along Ekeki across the Epie Creek on the new Yenagoa road with easy access to the Bayelsa airport. It connects perfectly with the Mbiama Yenagoa road leading to Port Harcourt to the right and the east-west road to the left.
                </p>
                <h6 className='mb-2 font-semibold'>Vision</h6>
                <p className="mb-3">
                Fast track economic development in the state through the creation of business hubs and the right environment for them to thrive.
                </p>
                <h6 className='mb-2 font-semibold'>Objectives</h6>
                <ul className="pl-8 mb-3 list-disc md:pl-12">
                <li>Job creation.</li>
                <li>Trigger industrialization in the state.</li>
                <li>Attract and encourage industries/ manufacturers into the state.</li>
                <li>Change the state from being a civil servant state to an economic hub.</li>
                <li>Promote tourism in the state.</li>
                <li>Become a breeding ground for entrepreneurs.</li>
                <li>Provision of additional revenue to the government.</li>
                <li>Creation of business opportunities.</li>
                <li>Reducing youth restiveness.</li>
                </ul>
                <h6 className='mb-2 font-semibold'>Core Values</h6>
                <ul className="pl-8 mb-3 list-disc md:pl-12">
                <li>Industrial zone (The industrial zone shall contain light industries for manufacturing and production purposes)</li>
                <li>Centre for business incubation (CBI)</li>
                <li>Cinema</li>
                <li>Malls</li>
                <li>Hotels/Lodges</li>
                <li>Civil servants estates</li>
                <li>Lawn tennis court</li>
                <li>Basketball court</li>
                <li>Games arcade</li>
                <li>Coworking space</li>
                <li>Recreation centre/park</li>
                <li>Skill acquisition centre</li>
                <li>Artificial waterfall</li>
                <li>Parking lot</li>
                <li>Conference/seminar halls</li>
                <li>Clinic</li>
                <li>Warehouses</li>
                <li>Water supply</li>
                <li>Shops/business centres</li>
                <li>Constant power supply (gas turbine or solar)</li>
                <li>Central WIFI system</li>
                <li>ATM stand</li>
                <li>CCTV cameras</li>
                <li>Police and military posts</li>
                </ul>
                {/* <h6>Address: <span className='font-medium'>260 Sam Inokoba street, adjacent Sunky Supermarket, off Azikoro Road, Ekeki, Yenegoa, Bayelsa State.</span></h6>
                <h6 className='flex gap-2'> <span className='min-w-[100px]'>Contact Us:</span> <span className='font-medium'>07037193301, 09024401562.</span></h6> */}
                <h6 className='flex gap-2'> <span className='min-w-[100px]'>Contact Us:</span> <span className='font-medium'>07037193301, 09024401562.</span></h6>
                <h6 className='flex gap-2'>
                    <span className='min-w-[100px]'>Address:</span> 
                    <div className='flex flex-col'>
                        <span className='font-medium'>260, Sam Inokoba street, adjacent Sunky Supermarket, off Azikoro Road, Ekeki, Yenegoa, Bayelsa State.</span>
                        <span className='font-medium'>Grace Amazing Plaza, 2 Church Street by Iwofe road, Port Harcourt. River's State.</span>
                    </div> 
                </h6>
        </section>
        <section className="mb-20" id="bgs">
                <h2 className='mt-4 mb-2 text-2xl font-bold text-green'>BYS Graduate School</h2>
                <h6 className='mb-2 font-semibold'>Mission</h6>
                <p className="mb-3">
                BYS Graduate School is an indigenous business school of professional finishing. We teach cutting-edge business principles and practices with the aim of transforming our clients’ businesses. BGS is duly registered with CAC with the registration number BN 2638519.<br /><br />
                At BYS Graduate School, we empower students on hard and soft skills needed to create wealth and make them self-reliant.<br /><br />
                Among the hard skills we train students on are: bag making, shoemaking, belts, and hats making, tie and dye, catering and pastries.<br /><br />
                Among the soft skills we train students on are: video coverage, video editing, and animation, business plan writing, branding and advertising, customer relationship management/leadership.
                </p>
                {/* <h6>Address: <span className='font-medium'>260 Sam Inokoba street, adjacent Sunky Supermarket, off Azikoro Road, Ekeki, Yenegoa, Bayelsa State.</span></h6>
                <h6 className='flex gap-2'> <span className='min-w-[100px]'>Contact Us:</span> <span className='font-medium'>07037193301, 09024401562.</span></h6> */}
                <h6 className='flex gap-2'> <span className='min-w-[100px]'>Contact Us:</span> <span className='font-medium'>07037193301, 09024401562.</span></h6>
                <h6 className='flex gap-2'>
                    <span className='min-w-[100px]'>Address:</span> 
                    <div className='flex flex-col'>
                        <span className='font-medium'>260, Sam Inokoba street, adjacent Sunky Supermarket, off Azikoro Road, Ekeki, Yenegoa, Bayelsa State.</span>
                        <span className='font-medium'>Grace Amazing Plaza, 2 Church Street by Iwofe road, Port Harcourt. River's State.</span>
                    </div> 
                </h6>
        </section>

        <section className="mb-20" id="de">
            <div className="container mb-5 row" data-aos="fade-up">
            <div className="">
                <h2 className='mt-4 mb-2 text-2xl font-bold text-green'>Dordorian Estate</h2>
                <h6 className='mb-2 font-semibold'>Mission</h6>
                <p className="mb-3">
                Dordorian Estate is the real estate arm of Dordorian Concept Ltd. We purchase and sell lands to our clients at affordable prices. We also help our clients in the purchase of lands and securing of survey and title documents.<br />
                Dordorian Estate is situated in Yenagoa, Bayelsa State, Nigeria.
                </p>
                {/* <h6>Address: <span className='font-medium'>260 Sam Inokoba street, adjacent Sunky Supermarket, off Azikoro Road, Ekeki, Yenegoa, Bayelsa State.</span></h6>
                <h6 className='flex gap-2'> <span className='min-w-[100px]'>Contact Us:</span> <span className='font-medium'>07037193301, 09024401562.</span></h6> */}
                <h6 className='flex gap-2'> <span className='min-w-[100px]'>Contact Us:</span> <span className='font-medium'>07037193301, 09024401562.</span></h6>
                <h6 className='flex gap-2'>
                    <span className='min-w-[100px]'>Address:</span> 
                    <div className='flex flex-col'>
                        <span className='font-medium'>260, Sam Inokoba street, adjacent Sunky Supermarket, off Azikoro Road, Ekeki, Yenegoa, Bayelsa State.</span>
                        <span className='font-medium'>Grace Amazing Plaza, 2 Church Street by Iwofe road, Port Harcourt. River's State.</span>
                    </div> 
                </h6>
            </div>
            </div>
        </section>
        </div>
        <Footer />
    </main>
  )
}

export default Subsidiaries