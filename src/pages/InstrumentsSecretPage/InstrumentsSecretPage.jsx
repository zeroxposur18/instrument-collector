import React from 'react';
import Confetti from 'react-confetti';
import TextLoop from 'react-text-loop';

const InstrumentsSecretPage = () => {
  return (
    <React.Fragment>
    <Confetti 
    width={1920}
    height={1080}
    />
    <div className="center blue-grey darken-2 white-text">
      <h1>SEI-CC-7 ATX</h1>
      <h6>
        <TextLoop interval={100}>
          <span>Alan McCracken</span>
          <span>Alanna Celentano</span>
          <span>Brandon Carter</span>
          <span>Crystal Vasquez</span>
          <span>Daniel Lara</span>
          <span>Jan Lee</span>
          <span>Lincoln Youree</span>
          <span>Michael Lackey</span>
          <span>Skylar Wong</span>
          <span>Tan Vu</span>
          <span>Vinnie Kokojan</span>
          <span>David Stinson</span>
          <span>Melony Segnit</span>
        </TextLoop>
      </h6>
      <h3>Software Engineering Immersive completed!</h3>
      <h1>Congratulations!</h1>
      <h5>You guys are the best, couldn't have asked for a better group of people to go through this course!</h5>
      <br></br>
      <h5>Special Thanks to my Instructors:</h5>
      <h6>
        <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
          <span>Ben Manley</span>
          <span>Linnae Kraemer</span>
          <span>Jim Clark</span>
          <span>Jim Haff</span>
        </TextLoop>
      </h6>            
    </div>
    </React.Fragment>
  );
}
 
export default InstrumentsSecretPage;
