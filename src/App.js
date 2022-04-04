import logo from './logo.svg';
import './App.css';
import QuizCard from './components/QuizCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-interval="false">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <QuizCard />
            </div>
            <div class="carousel-item">
              <QuizCard />
            </div>
            <div class="carousel-item">
              <QuizCard />
            </div>
            <div class="carousel-item">
              <QuizCard />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
