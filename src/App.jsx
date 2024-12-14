import { useState } from 'react';

import './App.scss';

function App() {
  return (
    <div className="bg-container">
      <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
      <div className="main-box">
        <div className="inner-box">
          <img className="profile" src="Photo.jpeg" alt="Profile" />
          <div className="text-content">
            <h1>G Devishree</h1>
            <h5>Front-end Developer</h5>
            <p>
              I am passionate designer and developer.
            </p>
          </div>
          <div className="social-share">
            <div className="row">
              <i className="far fa-heart"></i>
              <i className="icon-2 fas fa-heart"></i>
              <span>20.4k</span>
            </div>
            <div className="row">
              <i className="far fa-comment"></i>
              <i className="icon-2 fas fa-comment"></i>
              <span>14.3k</span>
            </div>
            <div className="row">
              <i className="fas fa-share"></i>
              <span>12.8k</span>
            </div>
          </div>
          <button>
        Message 
        <div className="star star-1">
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 784.11 815.53">
                <path className="fil0"
                    d="M392.05 0c-20.9,210.08 -184.06,
                       378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,
                       407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,
                       -29.38 -371.16,-197.69 -392.06,-407.78z" />
            </svg>
        </div>
        <div className="star star-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53">
                <path className="fil0"
                    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,
                       407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,
                       -210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,
                       -197.69 -392.06,-407.78z" />
            </svg>
        </div>
        <div className="star star-3">
            <svg xmlns="http://www.w3.org/2000/svg" 
                 viewBox="0 0 784.11 815.53">
                <path className="fil0"
                    d="M392.05 0c-20.9,210.08 -184.06,
                       378.41 -392.05,407.78 207.96,29.37 371.12,197.68 
                       392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,
                       -407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
            </svg>
        </div>
        <div className="star star-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53">
                <path className="fil0"
                    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,
                       29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 
                       392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />
            </svg>
        </div>
        <div className="star star-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53">
                <path className="fil0"
                    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,
                       29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37
                       392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />
            </svg>
        </div>
        <div className="star star-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53">
                <path className="fil0"
                    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,
                       29.37 371.12,197.68 392.05,407.74 20.93,
                       -210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,
                       -197.69 -392.06,-407.78z" />
            </svg>
        </div>
    </button>

        </div>
      </div>
    </div>
  );
}

export default App;
