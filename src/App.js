import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <Hero />
        {movieSections.map((section) => (
          <MovieSection key={section.title} title={section.title} movies={section.movies} />
        ))}
        <Footer />
      </main>
    );
  }
}

export default App;
