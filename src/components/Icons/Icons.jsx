import React from 'react';
import './Icons.css';

const Icons = () => {
    return (
        <>
            <div className='folder-icon'>
                <button>
                    <img src="public/pictures/folder-icon.png" alt="" />
                </button>
                <div className='icon-name'>
                    <p>Zachary Mohamed</p>
                </div>
            </div>
            <div className='my_computer-icon'>
                <button>
                    <img src="public/pictures/my_computer-icon.png" alt="" />
                </button>
                <div className='icon-name'>
                    <p>My Computer</p>
                </div>
            </div>
            <div className='notepad-icon'>
                <button>
                    <img src="public/pictures/notepad-icon.png" alt="" />
                </button>
                <div className='icon-name'>
                    <p>About Me</p>
                </div>
            </div>
            <div className='linkedin-logo'>
                <button>
                    <img src="public/pictures/linkedin-logo.png" alt="" />
                </button>
                <div className='icon-name'>
                    <p>LinkedIn</p>
                </div>
            </div>
            <div className='github-logo'>
                <button>
                    <img src="public/pictures/github-logo.png" alt="" />
                </button>
                <div className='icon-name'>
                    <p>GitHub</p>
                </div>
            </div>
            <div className='recycle_bin-icon'>
                <button>
                    <img src="public/pictures/recycle_bin-icon.png" alt="" />
                </button>
                <div className='icon-name'>
                    <p>Recycle Bin</p>
                </div>
            </div>

        </>
    );
}

export default Icons;