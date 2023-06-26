* {
    box-sizing: border-box;
  }
  
  body {
    font-family: Arial;
    margin: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: flex-start;
    background: linear-gradient(0deg, rgba(19,41,61,1) 0%, rgba(237,245,249,1) 63%);
  }
  
  .reset-button {
    font-size: 16px;
    height: 30px;
    line-height: 8px;
    margin-top: 20px;
  }
  
  .win-loss-container {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
  }
  
  button {
    background: radial-gradient(circle, rgba(240,230,140,1) 0%, rgba(187,96,33,0.9542191876750701) 100%);
    border-radius: 8px;
    color: #13293d;
    cursor: pointer;
    font-size: 2em;
    letter-spacing: 0.21px;
    line-height: 16px;
    max-width: 255px;
    padding: 20px 52px;
    text-align: center;
    transition-duration: 0.15s;
    transition-property: background-color;
    transition-timing-function: linear;
    margin-top: 0.6em;
  }
  
  header {
    padding: 40px;
    text-align: center;
    background: #13293d;
    color: #fff;
    border-bottom:30px #879274;
  }
  
  main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  
  section {
    flex: 0 auto;
    padding: 8px;
    margin-top: 50px;
    background-color: white;
    border-radius: 8px;
  }
  
  .word-guess {
    width: 55vw;
    height: 400px;
  }
  
  .results {
    width: 30vw;
    height: 400px;
  }
  
  .card {
    background: radial-gradient(circle, rgba(240,230,140,1) 0%, rgba(187,124,33,0.604079131652661) 100%);
    border: 1px solid #eceff1;
    border-radius: 8px;
    box-shadow: rgba(60, 64, 67, 2) 0 1px 2px 0,
      rgba(60, 64, 67, 0.15) 0 2px 4px 3px;
    margin: auto;
    padding: 20px;
  }
  
  .word-blanks {
    line-height: 360px;
  }
  
  .large-font {
    font-size: 3.5em;
    text-align:center;
  }
  
  .timer {
    height: 240px;
    padding: 10px;
    background: #13293d;
    color: #fff;
    text-align: center;
  }
  
  .timer-text {
    padding: 55px;
  }
  
  @media screen and (max-width: 1183px) {
    main {
      flex-direction: column;
    }
  
    .word-guess,
    .results {
      width: 90vw;
    }
  
    section {
      background-color: white;
      margin: 20px auto;
      width: 92vw;
    }
  }
  
  @media screen and (max-width: 504px) {
    .large-font {
      font-size: 2em;
    }
  
    .reset-button {
      font-size: 12px;
      width: 20ox;
      
    }
  
    .timer {
      height: 200px;
    }
   
  