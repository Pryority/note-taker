import React from 'react';
import { Link } from 'react-router-dom';

const AllNotes = () => {
    let data = [1, 2, 3, 4, 5];
    return (
        <div className="">
            <h1 id='page-title' className="font-light">All Notes</h1>
            <div id='allnotes-page' className="">
                {/* columns is-multiline */}
                <div className="">
                    {data.length > 0
                        ? data.map((item, i) => (
                            <div className="flex flex-col w-1/3" key={i}>
                                <div id='card' className="p-4">
                                    <header id='card-header' className="">
                                        <p id='card-header-title' className="font-bold text-lg">Note Title Here</p>
                                    </header>
                                    <div className="card-content">
                                        <div className="content">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Phasellus nec iaculis mauris. Lorem ipsum dolor sit
                                            amet.
                                            <br />
                                        </div>
                                    </div>
                                    <footer className="card-footer">
                                        <Link to={`note/${i}`} className="card-footer-item">
                                            Edit
                                        </Link>
                                        <a href="/" className="card-footer-item">
                                            Delete
                                        </a>
                                    </footer>
                                </div>
                            </div>
                        ))
                        : "No Notes yet"}
                </div>
            </div>
        </div>
    );
}
export default AllNotes;