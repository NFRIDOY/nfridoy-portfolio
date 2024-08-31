import brandShop from '../../assets/images/projects/brandShop.png'
import eventManagementPCMob from '../../assets/images/projects/eventManagementPCMob.png'
import jobMarketPCMob from '../../assets/images/projects/jobMarketPCMob.png'
import assetHexa from '../../assets/images/projects/assethexa.png'
import { Link } from 'react-router-dom';

export default function ProjectsContainer() {
    return (
        <>
            <section className='my-10 '>
                <section className='flex flex-col md:flex-row gap-10'>
                    <div className='p-2 md:w-1/2'>
                        <img src={jobMarketPCMob} alt="" />
                    </div>
                    <div className='p-2 md:w-1/2 mb-4'>
                        <h1 className='text-4xl my-5 font-bold'>
                            Job Market X <a href='https://job-market-x.web.app' className='text-lg text-blue-500' >Website</a>
                        </h1>
                        <div className='flex gap-4'>
                            <h1 className='text-2xl my-5 font-bold'>
                                <span className='text-lg' >GitHub Repository: </span>
                            </h1>
                            <h1 className='text-2xl my-5 font-bold'>
                                <Link to='https://github.com/NFRIDOY/job-market-x-client' target='_blank' className='text-lg text-blue-600' >Client</Link>
                            </h1>
                            <h1 className='text-2xl my-5 font-bold'>
                                <Link to='https://github.com/NFRIDOY/job-market-x-server' target='_blank' className='text-lg text-blue-700' >Server</Link>
                            </h1>
                        </div>
                        <p>
                            In this website user can post jobs bid verious types of jobs. Users can also see their job process and payment information.
                        </p>
                        <h1 className='text-2xl my-5'>
                            Features
                        </h1>
                        <p className='text-base text-gray-700'>
                            <ul className='list-disc ml-10'>
                                <li>Firebase Authintication, User Sign up & Login</li>
                                <li>user can post jobs</li>
                                <li>user can bid jobs</li>
                                <li>Jobs status update table</li>
                                <li>Delete jobs</li>
                                <li>Update jobs</li>
                            </ul>
                        </p>

                    </div>
                </section>
                <section className='flex flex-col md:flex-row-reverse gap-10'>
                    <div className='p-2 md:w-1/2'>
                        <img src={assetHexa} alt="" />
                    </div>
                    <div className='p-2 md:w-1/2 mb-4'>
                        <h1 className='text-4xl my-5 font-bold'>
                            Asset Hexa (Team Project) <a href='https://asset-hexa.web.app/' className='text-lg text-blue-500' >Website</a>
                        </h1>
                        <div className='flex gap-4'>
                            <h1 className='text-2xl my-5 font-bold'>
                                <span className='text-lg' >GitHub Repository: </span>
                            </h1>
                            <h1 className='text-2xl my-5 font-bold'>
                                <Link to='https://github.com/NFRIDOY/Asset-Hexa' target='_blank' className='text-lg text-blue-600' >Client</Link>
                            </h1>
                            <h1 className='text-2xl my-5 font-bold'>
                                <Link to='https://github.com/NFRIDOY/Asset-Hexa-Server' target='_blank' className='text-lg text-blue-700' >Server</Link>
                            </h1>
                        </div>
                        <p className='text-base text-gray-700'>
                            This project focuses on effective money management, offering financial guidance, and streamlining investment in businesses. Users have the ability to register accounts, record daily income and expenses, and access transaction histories. Additionally, users can contribute to the community by writing money management blogs, which can be liked and commented on by others. Furthermore, users can showcase their entrepreneurial ventures by adding detailed information about their businesses. All users have the opportunity to invest in these businesses, creating a dynamic investment ecosystem. The project incorporates two distinct roles – admin and guest. Admins hold the authority to manage user accounts, verify blogs, and validate business posts. This dual-role system ensures a secure and controlled environment for financial activities and community engagement.

                        </p>
                        <h1 className='text-2xl my-5'>
                            Features
                        </h1>
                        <p className='text-base text-gray-700'>
                            <ul className='list-disc ml-10'>
                                <li><strong>Users:</strong>
                                    <ul className='list-disc ml-12'>
                                        <li>Create an account to log in to the website</li>
                                        <li>Login with Google</li>
                                        <li>Manage their account</li>
                                        <li>Add income and expenses</li>
                                        <li>Transfer money between accounts</li>
                                        <li>Show total income and expenses in the dashboard</li>
                                        <li>Display pie charts showing income-expense ratio and financial information</li>
                                        <li>View transaction history</li>
                                        <li>Invest in businesses</li>
                                        <li>Post blogs, like/dislike, comment, and bookmark favorite blogs</li>
                                        <li>Edit blogs from their profile section</li>
                                    </ul>
                                </li>
                                <li><strong>Businessman:</strong>
                                    <ul className='list-disc ml-12'>
                                        <li>Post business listings and request funding</li>
                                        <li>View business-related data on their dashboard</li>
                                        <li>Admin verification for business listings</li>
                                    </ul>
                                </li>
                                <li><strong>Admin:</strong>
                                    <ul className='list-disc ml-12'>
                                        <li>See total users and newsletter subscribers</li>
                                        <li>Send emails to subscribers</li>
                                        <li>Verify user accounts</li>
                                        <li>Verify business listings</li>
                                        <li>Verify blogs for relevance to money management</li>
                                    </ul>
                                </li>
                            </ul>

                        </p>

                    </div>
                </section>
                <section className='flex flex-col md:flex-row gap-10'>
                    <div className='p-2 md:w-1/2'>
                        <img src={brandShop} alt="" />
                    </div>
                    <div className='p-2 md:w-1/2 mb-4'>
                        <h1 className='text-4xl my-5 font-bold'>
                            NF Technology <a href='https://brand-shop-ed6ff.web.app' className='text-lg text-blue-500' >Website</a>
                        </h1>
                        <div className='flex gap-4'>
                            <h1 className='text-2xl my-5 font-bold'>
                                <span className='text-lg' >GitHub Repository: </span>
                            </h1>
                            <h1 className='text-2xl my-5 font-bold'>
                                <Link to='https://github.com/NFRIDOY/brandshop-client' target='_blank' className='text-lg text-blue-600' >Client</Link>
                            </h1>
                            <h1 className='text-2xl my-5 font-bold'>
                                <Link to='https://github.com/NFRIDOY/brandshop-server' target='_blank' className='text-lg text-blue-700' >Server</Link>
                            </h1>
                        </div>
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
                        <h1 className='text-2xl my-5'>
                            Features
                        </h1>
                        <p className='text-base text-gray-700'>
                            <ul className='list-disc ml-10'>
                                <li>Firebase Authintication. User Sign up & Login</li>
                                <li>user can see products</li>
                                <li>Product add to cart</li>
                                <li>Delete products from cart</li>
                            </ul>
                        </p>

                    </div>
                </section>
                <section className='flex flex-col md:flex-row-reverse gap-10'>
                    <div className='p-2 md:w-1/2'>
                        <img src={eventManagementPCMob} alt="" />
                    </div>
                    <div className='p-2 md:w-1/2 mb-4'>
                        <h1 className='text-4xl my-5 font-bold'>
                            Event Management  <a href='https://event-management-69fb5.web.app' className='text-lg text-blue-500' >Website</a>
                        </h1>
                        <div className='flex gap-4'>
                            <h1 className='text-2xl my-5 font-bold'>
                                <span className='text-lg' >GitHub Repository: </span>
                            </h1>
                            <h1 className='text-2xl my-5 font-bold'>
                                <Link to='https://github.com/NFRIDOY/event-management' target='_blank' className='text-lg text-blue-600' >Client</Link>
                            </h1>
                            {/* <h1 className='text-2xl my-5 font-bold'>
                                <Link to='https://github.com/NFRIDOY/job-market-x-server' target='_blank' className='text-lg text-blue-700' >Server</Link>
                            </h1> */}
                        </div>
                        <h1 className='text-2xl my-5'>
                            Features
                        </h1>
                        <p className='text-base text-gray-700'>
                            This website is a besic Event Management website where user can simply book events
                        </p>
                        <h1 className='text-2xl my-5'>
                            Features
                        </h1>
                        <p className='text-base text-gray-700'>
                            <ul className='list-disc ml-10'>
                                <li>Firebase Authintication. User Sign up & Login</li>
                                <li>user can book for events</li>
                                <li>Add to cart</li>
                                <li>Add to Whishlist</li>
                                <li>Delete orders from cart & Whishlist</li>
                            </ul>
                        </p>

                    </div>
                </section>



            </section>
        </>
    )
}
