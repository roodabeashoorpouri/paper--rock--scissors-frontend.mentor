import "./score.css";

const score = () => {
  return (
    <div className='box'>
      <div className='name'>
        <h1>
          Rock <br /> Paper <br /> Scissors
        </h1>
      </div>
      <div className='score'>
        <h4>SCORE</h4>
        <h1>12</h1>
      </div>
    </div>
  );
};

export default score;
