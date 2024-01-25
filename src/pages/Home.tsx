import Collapsible from "react-collapsible"
import { Link } from "react-router-dom"

export function Home() {
    return (
        <>
            <div className="super-parent">
                {/* <div className="upper-bar"></div> */}
                {/* <div className="upper-bar">
                    Home
                </div>
                <div className="vertical-bar"></div> */}
                <div className="my-name">
                    André Silva
                </div>
                <div className="version">v1.0.0</div>
                <div className="introduction">
                    <p>
                        This is my portfolio and hobby website for 2024. Here, I will be posting articles about React (and possibly Angular), as well as various apps with whatever comes to my mind.
                        If you're intered in my work, please visit my GitHub repository, as well as my LinkedIn profile. This website is responsive between 270px and 1024px.
                    </p>
                </div>
                <div className="content">
                    {/* Add state and functional arrow */}
                    <Collapsible trigger="Articles:" transitionTime={200} open={true}>
                        {/* TODO: Make a list component */}
                        <div className="content__item">
                            <div className="content__item__date">
                                <p>01.01.2024</p>
                            </div>
                            <div className="content__item__title">
                                <span className="content__item__title__first-letter">u</span>seEffect hook
                            </div>
                        </div>
                        <div className="content__item__divider"></div>
        
                        <div className="content__item">
                            <div className="content__item__date">
                                <p>01.01.2024</p>
                            </div>
                            <div className="content__item__title">
                            <span className="content__item__title__first-letter">u</span>seState hook
                            </div>
                        </div>
                        <div className="content__item__divider"></div>
        
                        <div className="content__item">
                            <div className="content__item__date">
                                <p>01.01.2024</p>
                            </div>
                            <div className="content__item__title">
                                <span className="content__item__title__first-letter">R</span>erender in React
                            </div>
                        </div>
                        <div className="content__item__divider"></div>
                    </Collapsible>
                </div>
        
                <Link to="/headache">
                    <div className="headache">headache</div>
                </Link>
            </div>

            <div className="diagon-alley_1"></div>
            <div className="diagon-alley_2"></div>
        </>
        )
}