import "./home.css";
import { Button } from 'reactstrap';
import Book1 from '../../../src/assets/bookcovers/book1.jpg';
import Book2 from '../../../src/assets/bookcovers/book2.jpg';
import Book3 from '../../../src/assets/bookcovers/book3.jpg';
import Book4 from '../../../src/assets/bookcovers/book4.jpg';
import Book5 from '../../../src/assets/bookcovers/book5.jpg';
import Book6 from '../../../src/assets/bookcovers/book6.jpg';
import Book7 from '../../../src/assets/bookcovers/book7.jpg';
import Book8 from '../../../src/assets/bookcovers/book8.jpg';
import Book9 from '../../../src/assets/bookcovers/book9.jpg';
import Book10 from '../../../src/assets/bookcovers/book10.jpg';
import axios from "axios";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";
import "swiper/css/navigation";
import 'swiper/css';
import defaultBookCover from '../../assets/bookcovers/defaultBookCover.png';

const objectBookCover = {
    "book1": Book1,
    "book2": Book2,
    "book3": Book3,
    "book4": Book4,
    "book5": Book5,
    "book6": Book6,
    "book7": Book7,
    "book8": Book8,
    "book9": Book9,
    "book10": Book10,
}

function Home() {

    const [state, setState] = useState(
        {
            onSaleBooks :[],
            recommendedBooks: [],
            popularBooks: [],
            defaultBooks: [],
            recommended: true
        }
    );

    componentDidMount(){
        axios.get
    }
return (
    <section className="home-page flex-grow-1">
    <div className="container">
        <div className="row align-items-center mb-4">
            <div className="col-lg-6">
                <p>On Sale</p>
            </div>
            <div className="col-lg-6 d-flex justify-content-end">
                <Button color="secondary" size="sm">
                    View All &nbsp; <i class="fas fa-angle-right"></i> 
                </Button>
            </div>
        </div>
        <Swiper 
            spaceBetween={50} 
            slidesPerView={4} 
            navigation={true} 
            loop={true}
            loopFillGroupWithBlank={true}
            modules={[Autoplay, Navigation]}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
        >
            {
            arraySrcBook.map(book => {
            return (
                <SwiperSlide key={book} className="carousel">
                    <div className="card">
                        <img className="card-img-top img-fluid" src={book} alt="Books" />
                        <div className="card-body">
                            <p className="book-title font-18px">Book title</p>
                            <p className="book-author font-14px">Author Name</p>
                        </div>
                        <div className="card-footer text-muted font-14px">Price</div>
                    </div>
                </SwiperSlide>)})
            }
        </Swiper>
        <div className="book-list">
            <div className="text-center">
                <p className="section-title font-20px mb-3">Featured Books</p>
                <div className="mb-4">
                    <Button color="secondary">
                        Recommended
                    </Button>
                    <a className="custom-link">Popular</a>
                </div>
            </div>
            <div id="mainRow" className="row">
                {
                arraySrcBook.map(book => {
                return (
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={book}>
                    <div className="card">
                        <img className="card-img-top img-fluid" src={book} alt="Books" />
                        <div className="card-body">
                            <p className="book-title font-18px">Book title</p>
                            <p className="book-author font-14px">Author Name</p>
                        </div>
                        <div className="card-footer text-muted font-14px">Price</div>
                    </div>
                </div>
                )
                })
                }
            </div>
        </div>
    </div>
</section>
);
}

export default Home; 