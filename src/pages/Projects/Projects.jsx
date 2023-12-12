import MainHeader from '../../components/Headers/MainHeader'
import brandShop from '../../assets/images/projects/brandShop.png'
import eventManagementPCMob from '../../assets/images/projects/eventManagementPCMob.png'
import jobMarketPCMob from '../../assets/images/projects/jobMarketPCMob.png'
import Container from './../../components/Containers/Container';
import { Link } from 'react-router-dom';

export default function Projects() {
    return (
        <div>
            <MainHeader>
                Projects
            </MainHeader>
            <Container>
                <section className='my-10 '>
                    <section className='flex flex-col md:flex-row gap-10'>
                        <div className='p-2 md:w-1/2'>
                            <img src={brandShop} alt="" />
                        </div>
                        <div className='p-2 md:w-1/2 mb-4'>
                            <h1 className='text-4xl my-5 font-bold'>
                                NF Technology <a href='https://brand-shop-ed6ff.web.app' className='text-lg text-blue-500' >Website</a>
                            </h1>
                            <h1 className='text-2xl my-5'>
                                Features
                            </h1>
                            <p className='text-base text-gray-700'>
                                This website shows top Technology and Electronics brands
                                In the home page it highlighted some brand name with image
                                By clicking brand image it takes user to that brand products
                                In the brand products there are a slider with images and product card
                                Product card has two button details & update
                                User can update and veiw products
                                User can also Add to cart form product details page
                                User can also delete product form cart page
                            </p>

                        </div>
                    </section>
                    <section className='flex flex-col md:flex-row gap-10'>
                        <div className='p-2 md:w-1/2'>
                            <img src={eventManagementPCMob} alt="" />
                        </div>
                        <div className='p-2 md:w-1/2 mb-4'>
                            <h1 className='text-4xl my-5 font-bold'>
                                Event Management  <a href='https://event-management-69fb5.web.app' className='text-lg text-blue-500' >Website</a>
                            </h1>
                            <h1 className='text-2xl my-5'>
                                Features
                            </h1>
                            <p className='text-base text-gray-700'>
                                This website shows top Technology and Electronics brands
                                In the home page it highlighted some brand name with image
                                By clicking brand image it takes user to that brand products
                                In the brand products there are a slider with images and product card
                                Product card has two button details & update
                                User can update and veiw products
                                User can also Add to cart form product details page
                                User can also delete product form cart page
                            </p>

                        </div>
                    </section>
                    <section className='flex flex-col md:flex-row gap-10'>
                        <div className='p-2 md:w-1/2'>
                            <img src={jobMarketPCMob} alt="" />
                        </div>
                        <div className='p-2 md:w-1/2 mb-4'>
                            <h1 className='text-4xl my-5 font-bold'>
                                Job Market X <a href='https://job-market-x.web.app' className='text-lg text-blue-500' >Website</a>
                            </h1>
                            <h1 className='text-2xl my-5'>
                                Features
                            </h1>
                            <p className='text-base text-gray-700'>
                                This website shows top Technology and Electronics brands
                                In the home page it highlighted some brand name with image
                                By clicking brand image it takes user to that brand products
                                In the brand products there are a slider with images and product card
                                Product card has two button details & update
                                User can update and veiw products
                                User can also Add to cart form product details page
                                User can also delete product form cart page
                            </p>

                        </div>
                    </section>


                </section>
            </Container>
        </div>
    )
}
