// import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
        <div className="upper-bar"></div>
        <div className="vertical-bar"></div>
        <div className="my-name">
            <div className="version">1.0.0</div>
            André Silva
        </div>
        <div className="description">
            <p>
                This is my portfolio and hobby website for 2024. Here, I will be posting articles about React (and possibly Angular), as well as various apps with whatever comes to my mind.
                If you're intered in my work, please visit my GitHub repository, as well as my LinkedIn profile. (Yes, this website is focused on style first before legibility).
            </p>
        </div>
        <div className="content">
            <div className="content__header__wrapper">
                <div className="content__header">
                    Articles:
                </div>
            </div>

            <div className="content__item">
                <div className="content__item__date">
                    01.01.24
                </div>
                <div className="content__item__title">
                    Some article 1
                </div>
            </div>

            <div className="content__item">
                <div className="content__item__date">
                    01.01.24
                </div>
                <div className="content__item__title">
                    Some article 2
                </div>
            </div>

            <div className="content__item">
                <div className="content__item__date">
                    01.01.24
                </div>
                <div className="content__item__title">
                    Some article 3
                </div>
            </div>
        </div>
    </>
  )
}

export default App
