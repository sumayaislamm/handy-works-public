import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="text-cyan-500 text-center  my-20 text-5xl font-bold">
        Blog
      </h1>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 mx-10 my-8  text-center justify-center">
        {/* card 1 */}
        <div class="card w-96 bg-base-100 shadow-2xl">
          <div class="card-body">
            <h2 class="card-title text-xl font-bold">
              How will you improve the performance of a React Application?
            </h2>
            <p>Answer: <br />
              1.Place ingredients locally where needed. <br /> 2.Remember feedback
              elements to prevent unnecessary rendering <br /> 3.Code-segmentation in 
              response using dynamic import () <br /> 4.By Answer window or list
              virtualization. <br /> 5.By lazy loading image in response.
            </p>
          </div>
        </div>
        {/* card 2 */}
        <div class="card w-96 bg-base-100 shadow-2xl">
          <div class="card-body">
            <h2 class="card-title text-xl font-bold">
            What are the different ways to manage a state in a React application?
            </h2>
            <p>Answer: <br />
             <span className="text-sm font-bold">1 . Communication State: </span> <br />
             <span className="text-sm font-bold"> 2. Data State
               </span>  
               <br /> 
               <span className="text-sm font-bold"> 3. Control State  </span>
                 
                <br />
                <span className="text-sm font-bold">4. Session State</span>
               <br />
                <span className="text-sm font-bold">5. Location State</span> 
                
            </p>
          </div>
        </div>
        {/* card 3 */}
        <div class="card w-96 bg-base-100 shadow-2xl">
          <div class="card-body">
            <h2 class="card-title text-xl font-bold">
            How does prototypical inheritance work?
            </h2>
            <p>Answer: <br />
            Every object with its methods and properties contains an internal and hidden property known as [[Prototype]].  The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects.  It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.
            </p>
          </div>
        </div>
        {/* card 4 */}
        <div class="card w-96 bg-base-100 shadow-2xl">
          <div class="card-body">
            <h2 class="card-title text-xl font-bold">
              How will you improve the performance of a React Application?
            </h2>
            <p>Answer: <br />
            1. You have access to $product variable <br /> 2. You have access to $product_id <br /> 3. You have access to the Order object or Order ID <br /> 4. You have access to the Cart object <br /> 5. You have access to $post object
            </p>
          </div>
        </div>
        {/* card 5 */}
        <div class="card w-96 bg-base-100 shadow-2xl">
          <div class="card-body">
            <h2 class="card-title text-xl font-bold">
            What is a unit test? Why should write unit tests?
            </h2>
            <p>Answer: <br />
            Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
