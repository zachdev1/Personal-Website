import React, { useState} from 'react';
import './Icons.css';
import "xp.css/dist/XP.css";
import Draggable from 'react-draggable';

const Icons = () => {

    const [isAboutMeWindowVisible, setAboutMeWindowVisible] = useState(false);
    const [isCmdWindowVisible, setCmdWindowVisible] = useState(false);
    const [restore, setRestore] = useState(false); 

    const handleAboutMeClick = () => {
        setAboutMeWindowVisible(true);
    };

    const handleCmdClick = () => {
        setCmdWindowVisible(true);
    };

    const handleClose = (windowName) => {
        if (windowName === 'aboutMe') {
            setAboutMeWindowVisible(false);
        } else if (windowName === 'cmd') {
            setCmdWindowVisible(false);
        }
    };

    const handleMaximizeClick = () => {
        setRestore(!restore);
    }

    return (
        <>
            <div className='folder-icon'>
                <button style={ {background: 'transparent', border:'none'}}>
                    <img src="public/pictures/folder-icon.png" alt="" />
                </button>
                <div className='icon-name'>
                    <p>My Work</p>
                </div>
            </div>
            <div className='my_computer-icon'>
                <button style={ {background: 'transparent', border:'none'}}>
                    <img src="public/pictures/my_computer-icon.png" alt="" />
                </button>
                <div className='icon-name'>
                    <p>My Computer</p>
                </div>
            </div>
            <div className='adobe-pdf'>
                <button style={ {background: 'transparent', border:'none'}}>
                    <a href="src/assets/Resume.pdf" target='_blank'>
                        <img src="public/pictures/adobe-pdf.png" alt="" />
                    </a>
                </button>
                <div className='icon-name'>
                    <p>Resume</p>
                </div>
            </div>
            <div className='notepad-icon'>
                <button style={ {background: 'transparent', border:'none'}} onClick={handleAboutMeClick}>
                    <img src="public/pictures/notepad-icon.png" alt="" />
                </button>
                <div className='icon-name'>
                    <p>About Me</p>
                </div>
            </div>
            <div className='linkedin-logo'>
                <button style={ {background: 'transparent', border:'none'}}>
                    <a href="https://www.linkedin.com/in/zachary-mohamed-065422217/" target='_blank'>
                        <img src="public/pictures/linkedin-logo.png" alt="" />
                    </a>
                </button>
                <div className='icon-name'>
                    <p>LinkedIn</p>
                </div>
            </div>
            <div className='github-logo'>
                <button style={ {background: 'transparent', border:'none'}}>
                    <a href="https://github.com/zachdev1" target='_blank'>
                        <img src="public/pictures/github-logo.png" alt="" />
                    </a>
                </button>
                <div className='icon-name'>
                    <p>GitHub</p>
                </div>
            </div>
            <div className='cmd-icon'>
                <button style={ {background: 'transparent', border:'none'}} onClick={handleCmdClick}>
                    <img src="public/pictures/cmd-icon.png" alt="" />
                </button>
                <div className='icon-name'>
                    <p>My Work</p>
                </div>
            </div>
            <div className='recycle_bin-icon'>
                <button style={ {background: 'transparent', border:'none'}}>
                    <img src="public/pictures/recycle_bin-icon.png" alt="" />
                </button>
                <div className='icon-name'>
                    <p>Recycle Bin</p>
                </div>

            {isAboutMeWindowVisible && (
                <Draggable bounds='body'>
                    <div className='about_me-container'>
                        <div className="window" style={{width: "100%"}}>
                            <div className="title-bar">
                                <div className="title-bar-text">About Me</div>
                                <div className="title-bar-controls">
                                    <button aria-label="Minimize"></button>
                                        <button aria-label={restore ? "Restore" : "Maximize"} onClick={handleMaximizeClick}>
                                    </button>
                                    <button aria-label="Close" onClick={() => handleClose("aboutMe")}></button>
                                </div>
                            </div>
                            <div className="window-body">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat reiciendis at explicabo in quidem tempora aliquam iste tenetur perferendis voluptatibus iusto veniam fugit sunt, saepe obcaecati excepturi? Eum, porro maxime?</p>
                            </div>
                        </div>
                    </div>
                </Draggable>
            )}

            {isCmdWindowVisible && (
                <Draggable bounds='body'>
                    <div className='cmd-container'>
                        <div class="window" style={{width: "100%"}}>
                            <div class="title-bar">
                                <div class="title-bar-text">My Work</div>
                                <div class="title-bar-controls">
                                    <button aria-label="Minimize"></button>
                                        <button aria-label={restore ? "Restore" : "Maximize"} onClick={handleMaximizeClick}>
                                    </button>
                                    <button aria-label="Close" onClick={() => handleClose("cmd")}></button>
                                </div>
                            </div>
                            <div class="window-body">
                                <pre>
                                    <li><a href="https://supplement-store-seven.vercel.app/" target='_blank'>Supplement Store</a>: React/JS, Express.JS, PostgreSQL, HTML/CSS</li>
                                    <li><a href="https://helpdesk-ticketing.vercel.app/" target='_blank'>Help-Desk Ticketing</a>: React/JS, HTML/CSS</li>
                                    <li><a href="https://github.com/zachdev1/Blackjack" target='_blank'>Blackjack</a>: C (console)</li>
                                    <li><a href="https://github.com/zachdev1/tdee-calculator" target='_blank'>TDEE Calculator</a>: Java (GUI)</li>
                                </pre>
                            </div>
                        </div>
                    </div>
                </Draggable>
            )}
            </div>
        </>
    );
}

export default Icons;