import Link from 'next/link';

const MyPresentation = () => {
  return (
    <div className='card card-body bg-secondary border border-none text-light animate__animated animate__fadeIn'>
      <div className='row'>
        <div className='col-md-4'>
          <img
            src='/pay8pgm0c8ok8k4k.jpg'
            alt=''
            // center vertically and horizontally
            className='img-fluid mx-auto rounded-circle border border-light'
          />
        </div>
        <div className='col-md-8'>
          <h1>Ignacio Damián González</h1>
          <h3>Software Engineer and DevOps</h3>
          <p>
            I am a Web Development Technician graduated from the University of
            La Matanza, and studying Computer Engineering at the same
            university. I've been using and studying technologies such as
            Angular, Symfony, React.js, Node.js, NET, Spring, Linux, Python,
            Git, AWS and Kubernetes, among others. With my coworkers I try to
            apply agile methodologies and DevOps philosophy as much as I can.
            Always try to follow best practices and I am comfortable in a full
            stack role. I have the ability to abstract and strive to achieve a
            strategic vision that supports the business's goals to create
            solutions that have a medium and long-term impact.
          </p>
          <Link href='/hireme'>
            <a className='btn btn-outline-light'>Hire Me</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyPresentation;
