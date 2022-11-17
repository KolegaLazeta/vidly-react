import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
    state = { 
        movies: getMovies()
     };



     handelDelete = (movie) => {
        //creating new movies array that incluce all movies except movie that we passed ass a argument on the of arrow f.
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        //with a setState method we can override movies prop in state object
        this.setState({movies})    
     }

    render() { 
        const {length: count} = this.state.movies;

        if(count===0)
            return <p>There is no movies in the database</p>;

       return (
        <React.Fragment>
            <p>Showing {count} movies in the database</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movies.map(movie => (
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td><button onClick={() => this.handelDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </React.Fragment>
       )}
}
 
export default Movies;