import "./score.css";

const Score = () => {
  return (
    <div className='box'>
      <div className='name'>
        <h1>
          Rock <br /> Paper <br /> Scissors
        </h1>
      </div>
      <div className='score'>
        <p> Score: "score"</p> {/* Display the score */}
      </div>
    </div>
  );
};

export default Score;
