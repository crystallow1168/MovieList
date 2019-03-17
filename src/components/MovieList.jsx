import Movie from './Movie.js'

class MovieList extends React.Component {
   constructor(props) {
      super(props) 

      this.state = {
         toWatchTabClicked: true,
         watchedTabClicked: false
     }
   }

   handleTabClicked() {
      console.log('hiii')
      this.setState ({
         toWatchTabClicked: !(this.state.toWatchTabClicked),
         watchedTabClicked: !(this.state.watchedTabClicked)
      })
   }

   render() {

      if (this.state.toWatchTabClicked === true) {
         return (
            <div>
               <ul className="nav nav-tabs">
                  <li className="nav flex-row">
                     <a className={`nav-link `} onClick={()=> this.handleTabClicked()} href="#">To Watch</a>
                     <a className={`nav-link active`} onClick={()=> this.handleTabClicked()} href="#">Watched</a>
                  </li>
               </ul>
               <ul className="list-group flex-column">
                  {(this.props.movies.filter(movie => movie.watched === false)).map(movie => 
                     <Movie movie={movie} 
                     key={movie.toWatchTitle}
                     toggleWatchedBadge={this.props.toggleWatchedBadge}
                     />)}
               </ul>
            </div>
         )

      } else if (this.state.watchedTabClicked === true)  {
         
         return (
            <div>
               <ul className="nav nav-tabs">
                  <li className="nav flex-row">
                     <a className={`nav-link active`} onClick={()=> this.handleTabClicked()} href="#">To Watch</a>
                     <a className={`nav-link `} onClick={()=> this.handleTabClicked()} href="#">Watched</a>
                  </li>
               </ul>
               <ul className="list-group">
                     {(this.props.movies.filter(movie => movie.watched === true)).map(movie => 
                     <Movie movie={movie} 
                     key={movie.toWatchTitle}
                     toggleWatchedBadge={this.props.toggleWatchedBadge}
                     />)}
               </ul>
            </div>
         )
      } 
   }
}

export default MovieList;