import "./shop.css";
import React, {useState} from 'react';
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
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import defaultBookCover from '../../assets/bookcovers/defaultBookCover.png';
import Pagination from "react-js-pagination";
import axios from "axios";


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

export default class Shop extends React.Component{

    // const [dropdownOpen, setDropdownOpen] = useState(false);

    // const [dropdownSort, setDropdownSortOpen] = useState(false);
    constructor(props){
        super(props);
        this.state = {
            allBooks:[],
            defaultBooks:[],
            activePage: 1,
            itemCountPerPage:1,
            totalItemCount:1,
            paginate:5,
            from:1,
            to:undefined
        };
        
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(pageNumber){
        axios.get(`http://localhost:8000/api/books?paginate=${this.state.paginate}&page=${pageNumber}`)
        .then(result => {

            // console.log(result.data);
            const allBooks = result.data.data;
            const current_page = result.data.current_page;
            const per_page = result.data.per_page;
            const total = result.data.total;
            const from = result.data.from;
            const to = result.data.to;

            allBooks.map((book) => (
                Object.keys(book).forEach((key) => {
                    if(key === 'book_cover_photo'){
                        if(book[key] === null || book[key] === 'null'){
                            book[key] = defaultBookCover;
                        }
                        else{
                            book[key] = objectBookCover[book[key]]; 
                        }
                    }
                })
            ))

            this.setState({ 
                allBooks: allBooks,
                activePage: current_page,
                itemCountPerPage: per_page,
                totalItemCount: total,
                from: from,
                to: to
    
    
             })
        });
    }

    getBookData(){
        axios.get(`http://localhost:8000/api/books?paginate=${this.state.paginate}&page=${this.state.activePage}`)
        .then(result => {
            const allBooks = result.data.data;
            const current_page = result.data.current_page;
            const per_page = result.data.per_page;
            const total = result.data.total;
            const from = result.data.from;
            const to = result.data.to;

            allBooks.map((book)=> (
                Object.keys(book).forEach((key) => {
                    if(key === 'book_cover_photo'){
                        if(book[key] === null || book[key] === 'null'){
                            book[key] = defaultBookCover;
                        }
                        else{
                            book[key] =  objectBookCover[book[key]];
                        }
                    }
                })
            ))
            this.setState({ 
                allBooks: allBooks,
                activePage: current_page,
                itemCountPerPage: per_page,
                totalItemCount: total,
                from: from,
                to: to
    
    
             })
        })
    }
    
    render(){
    // console.log(this.state.allBooks);
    console.log(this.state.activePage)
    console.log(this.state.itemCountPerPage)
    console.log(this.state.totalItemCount)
    return (


    <section className="shop-page flex-grow-1">
        <div className="container">
            <div className="title-page">
                <p>Books <span>(Filtered by Category #1)</span></p>
            </div>

            <div className="book-list">
                <div className="row">
                    <div className="col-lg-3">
                        <p className="bl-filter font-14px">Filter by</p>

                        <div className="bl-main-filter">
                            {/*
                            <!-- Category --> */}
                            <div className="blmf-card">
                                <p className="blmfc-title">Category</p>
                                <ul className="blmfc-list">
                                    <li>category_name</li>
                                    <li>Category #1</li>
                                    <li>Category #2</li>
                                </ul>
                            </div>

                            {/*
                            <!-- Author --> */}
                            <div className="blmf-card">
                                <p className="blmfc-title">Author</p>
                                <ul className="blmfc-list">
                                    <li>author_name</li>
                                    <li>Author #1</li>
                                    <li>Author #2</li>
                                </ul>
                            </div>

                            {/*
                            <!-- Rating --> */}
                            <div className="blmf-card">
                                <p className="blmfc-title">Rating Review</p>
                                <ul className="blmfc-list">
                                    <li>1 Star</li>
                                    <li>2 Star</li>
                                    <li>3 Star</li>
                                    <li>4 Star</li>
                                    <li>5 Star</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-9">
                        <div className="row mb-4">
                            <div className="col-lg-6">
                                <p className="bl-showing font-14px">Showing {this.state.from} of 126 books</p>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-end">
                                <div className="dropdown me-4">
                                    {/* <Dropdown isOpen={dropdownSort} toggle={() => setDropdownSortOpen(prevState => !prevState)}>
                                        <DropdownToggle caret>
                                            Sort by sale
                                        </DropdownToggle>
                                        <DropdownMenu container="body">
                                            <DropdownItem>
                                                Sort by popularity
                                            </DropdownItem>
                                            <DropdownItem>
                                                Sort by price: low to high
                                            </DropdownItem>
                                            <DropdownItem>
                                                Sort by price: high to low
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                                <div>
                                    <Dropdown isOpen={dropdownOpen} toggle={() => setDropdownOpen(prevState => !prevState)}>    
                                        <DropdownToggle caret>
                                            Show 5
                                        </DropdownToggle>

                                        <DropdownMenu container="body">
                                            <DropdownItem>
                                                Show 15
                                            </DropdownItem>
                                            <DropdownItem>
                                                Show 20
                                            </DropdownItem>
                                            <DropdownItem>
                                                Show 25
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown> */}
                                </div>                      
                            </div>
                        </div>

                        <div id="mainRow" className="row">
                            {
                            arraySrcBook.map(book => {
                            return (
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={book}>
                                <div className="card">
                                    <img className="card-img-top img-fluid" src={book} alt="Books" />
                                    <a className="card-body" href="/shop/1">
                                        <p className="book-title font-18px">Book title</p>
                                        <p className="book-author font-14px">Author Name</p>
                                    </a>
                                    <div className="card-footer text-muted font-14px">Price</div>
                                </div>
                            </div>
                            )
                            })
                            }
                        </div>

                        <div className="row">
                            <div className="col-12 d-flex justify-content-center">
                                <nav>
                                    <ul className="pagination">
                                        <li className="page-item"><a className="text-color-black page-link"
                                                href="#">Previous</a></li>
                                        <li className="page-item"><a className="text-color-black page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="text-color-black page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="text-color-black page-link" href="#">3</a></li>
                                        <li className="page-item"><a className="text-color-black page-link" href="#">Next</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

);
}
}

