import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Movie from './Movie';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Row = ({ title, fetchURL, rowNumber }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results);
        });
    }, [fetchURL]);

    const sliderChevronLeft = () => {
        var slider = document.getElementById('slider' + rowNumber);
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const sliderChevronRight = () => {
        var slider = document.getElementById('slider' + rowNumber);
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    return (
        <React.Fragment>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>

            <div className="relative flex items-center group">
                <MdChevronLeft className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                    size={40}
                    onClick={sliderChevronLeft} />
                <div id={'slider' + rowNumber} className="w-full h-full overflow-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
                    {movies.map((movie, id) => (
                        <Movie key={id} movie={movie} />
                    ))}
                </div>
                <MdChevronRight onClick={sliderChevronRight} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                    size={40} />
            </div>
        </React.Fragment>
    )
}

export default Row;