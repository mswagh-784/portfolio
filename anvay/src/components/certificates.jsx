import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/certificates.css';
import agnirva from '../assets/certificates/agnirva.jpg';
import oracle from '../assets/certificates/oracle.jpg';
import edunet from '../assets/certificates/edunet.jpg';

function Certificates() {
    const certificates = [
        {
            title: 'Edunet',
            description: 'Some representative placeholder content for the third certificate.',
            image: edunet,
        },
        {
            title: 'Oracle',
            description: 'Some representative placeholder content for the second certificate.',
            image: oracle,
        },
        {
            title: 'Agnirva',
            description: 'Some representative placeholder content for the first certificate.',
            image: agnirva,
        },
    ];

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">My Certificates</h2>
            <div className="row">
                {certificates.map((certificate, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card h-100">
                            <img src={certificate.image} className="card-img-top" alt={certificate.title} />
                            <div className="card-body">
                                <h5 className="card-title">{certificate.title}</h5>
                                <p className="card-text">{certificate.description}</p>
                                <a href={certificate.image} className="btn btn-primary">View Certificate</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Certificates;
