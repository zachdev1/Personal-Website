import React, { useState} from 'react';
import './Icons.css';
import "xp.css/dist/XP.css";

const Icons = () => {
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
                <button style={ {background: 'transparent', border:'none'}}>
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
            <div className='recycle_bin-icon'>
                <button style={ {background: 'transparent', border:'none'}}>
                    <img src="public/pictures/recycle_bin-icon.png" alt="" />
                </button>
                <div className='icon-name'>
                    <p>Recycle Bin</p>
                </div>

            <div className='about_me-container'>
                <div class="window" style={{width: "500px"}}>
                    <div class="title-bar">
                        <div class="title-bar-text">About Me</div>
                            <div class="title-bar-controls">
                                <button aria-label="Minimize"></button>
                                <button aria-label="Maximize"></button>
                                <button aria-label="Close"></button>
                            </div>
                    </div>
                    <div class="window-body">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat reiciendis at explicabo in quidem tempora aliquam iste tenetur perferendis voluptatibus iusto veniam fugit sunt, saepe obcaecati excepturi? Eum, porro maxime?</p>
                    </div>
                </div>
            </div>
                
                
            </div>
        </>
    );
}

export default Icons;