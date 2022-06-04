import React from 'react';

const Blogs = () => {
    return (
        <div className='text-left my-12'>
            <div className='my-6'>
                <h1 className='text-xl font-bold'>1. How will you improve the performance of a React Application?</h1>
                <p>
                    1. Practice and practice <br />
                    2. Thinking new Idea <br />
                    3. Daily Coding and <br />
                    4. Practice and practice
                </p>
            </div>

            <div className='my-6'>
                <h1 className='text-xl font-bold'>2. What are the different ways to manage a state in a React application?</h1>
                <p>
                    1. Communication State <br />
                    2. Data State <br />
                    3. Control State <br />
                    4. Session State <br />
                    5. Location State
                </p>
            </div>

            <div className='my-6'>
                <h1 className='text-xl font-bold'>3. How does prototypical inheritance work?</h1>
                <p>
                    Every object with its methods and properties contains an internal and hidden property known as Prototype. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object.getPrototypeOf and Object
                </p>
            </div>

            <div className='my-6'>
                <h1 className='text-xl font-bold'>4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
                <p>
                    State allows us to manage changing data in an application. It's defined as an object where we define key-value pairs specifying various data we want to track in the application.
                </p>
            </div>

            <div className='my-6'>
                <h1 className='text-xl font-bold'>5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                <p>I will use forEach() Method to find products by name </p>
            </div>

            <div className='my-6'>
                <h1 className='text-xl font-bold'>6. What is a unit test? Why should write unit tests?</h1>
                <p>
                    Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure
                </p>
            </div>

        </div>
    );
};

export default Blogs;