import Tilt from "react-parallax-tilt";

export const Pokemon = () => {
  return (
    <div className="pokemon-container flex content-center justify-center m-7">
      <div className="left-infos flex flex-col justify-center h-[400px]rounded-bl-[20px] mr-[40px]">
        <span><b>ID</b> #6</span>
        <span><b>Height:</b> 1.7M</span>
        <span><b>Abilities:</b> </span>
        <span><b>Type:</b> Fire, Dragon</span>
        <span><b>Forms:</b> Form1, form2, form3</span>
      </div>

      <div className="pokemon-image max-w-[600px] max-h-[600px] borderrounded-b-[50px]">
        <h1 className="text-center uppercase font-bold text-[30px]">CHARIZARD</h1>
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={800}
          transitionSpeed={1500}
          scale={1.1}
          gyroscope={true}
        >
          <img
            src="https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/006.png"
            alt=""
          />
        </Tilt>
      </div>

      <div className="right-infos flex flex-col justify-center h-[400px]rounded-br-[20px] ml-[40px]">
        <span><b>ID</b> #6</span>
        <b><span><b>Height:</b> 1.7M</span></b>
        <span><b>Abilities:</b> </span>
        <span><b>Type:</b> Fire, Dragon</span>
        <span><b>Forms:</b> Form1, form2, form3</span>
      </div>
    </div>
  );
};
